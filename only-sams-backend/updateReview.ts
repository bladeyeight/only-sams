import mongoose from 'mongoose';
import Review from './src/models/Review';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables based on NODE_ENV
const envFile = process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev';
dotenv.config({ path: path.join(__dirname, 'config', envFile) });

/**
 * Updates a review in the database by its ID
 * @param reviewId - The MongoDB ObjectId of the review to update
 * @param updateData - Object containing the fields to update
 */
const updateReview = async (reviewId: string, updateData: Partial<any>) => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gameReviews');
    console.log('Connected to MongoDB');

    // Find and update the review
    const result = await Review.findByIdAndUpdate(
      reviewId,
      updateData,
      { new: true } // Return the updated document
    );

    if (!result) {
      console.error(`Review with ID ${reviewId} not found`);
      return null;
    }

    console.log('Review updated successfully:', result.title);
    
    // Disconnect
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    
    return result;
  } catch (error) {
    console.error('Error updating review:', error);
    return null;
  }
};

// Example usage for updating releaseDate and genre:

// To update a review's release date and genre:
const reviewId = '6866c8a7041c5bcf54e19267'; // Add the MongoDB _id of the review here

// Update the release date and genre
updateReview(reviewId, { 
  releaseDate: new Date('2025-04-30'), // New release date
  genre: 'Immersive Sim' // New genre
})
  .then(result => {
    if (result) {
      console.log('Review updated with new release date and genre');
    } else {
      console.log('Failed to update review');
    }
  });

// Export the function for use in other files
export default updateReview;
