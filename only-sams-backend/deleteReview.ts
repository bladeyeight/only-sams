import mongoose from 'mongoose';
import Review from './src/models/Review';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables based on NODE_ENV
const envFile = process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev';
dotenv.config({ path: path.join(__dirname, 'config', envFile) });

/**
 * Deletes a review from the database by ID or title
 * @param identifier - The ID or title of the review to delete
 * @param isId - Boolean indicating if the identifier is an ID (true) or title (false)
 */
const deleteReview = async (identifier: string, isId: boolean = true) => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gameReviews');
    console.log('Connected to MongoDB');

    let result;
    
    if (isId) {
      // Check if the ID is valid
      if (!mongoose.Types.ObjectId.isValid(identifier)) {
        console.error('Invalid MongoDB ID format');
        await mongoose.disconnect();
        return null;
      }
      
      // Delete by ID
      result = await Review.findByIdAndDelete(identifier);
    } else {
      // Delete by title (case insensitive)
      result = await Review.findOneAndDelete({ 
        title: { $regex: new RegExp(`^${identifier}$`, 'i') } 
      });
    }

    if (result) {
      console.log(`Review "${result.title}" deleted successfully`);
    } else {
      console.log(`No review found with ${isId ? 'ID' : 'title'}: ${identifier}`);
    }
    
    // Disconnect
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    
    return result;
  } catch (error) {
    console.error('Error deleting review:', error);
    
    // Ensure we disconnect even if there's an error
    try {
      await mongoose.disconnect();
      console.log('Disconnected from MongoDB');
    } catch (disconnectError) {
      console.error('Error disconnecting from MongoDB:', disconnectError);
    }
    
    return null;
  }
};

// Example usage (uncomment and modify to use):

// Delete by ID
const reviewId = '68277f1fe2c2d4c6ae5f9d9b'; // Replace with actual ID
deleteReview(reviewId)
  .then(result => {
    if (result) {
      console.log('Review deleted successfully');
    } else {
      console.log('Failed to delete review or review not found');
    }
  });

// Delete by title
// const reviewTitle = 'The Elder Scrolls IV: Oblivion Remastered';
// deleteReview(reviewTitle, false)
//   .then(result => {
//     if (result) {
//       console.log('Review deleted successfully');
//     } else {
//       console.log('Failed to delete review or review not found');
//     }
//   });

// Export the function for use in other files
export default deleteReview;
