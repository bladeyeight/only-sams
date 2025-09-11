import mongoose from 'mongoose';
import Top10List from './src/models/Top10List';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables based on NODE_ENV
const envFile = process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev';
dotenv.config({ path: path.join(__dirname, 'config', envFile) });

/**
 * Updates a Top10List in the database by its ID
 * @param listId - The MongoDB ObjectId of the Top10List to update
 * @param updateData - Object containing the fields to update
 */
const updateTop10List = async (listId: string, updateData: Partial<any>) => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gameReviews');
    console.log('Connected to MongoDB');

    // Find and update the Top10List
    const result = await Top10List.findByIdAndUpdate(
      listId,
      updateData,
      { new: true } // Return the updated document
    );

    if (!result) {
      console.error(`Top10List with ID ${listId} not found`);
      return null;
    }

    console.log('Top10List updated successfully:', result.title);
    
    // Disconnect
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    
    return result;
  } catch (error) {
    console.error('Error updating Top10List:', error);
    return null;
  }
};

// Example usage for updating a list's title:

// To update a Top10List's title:
const listId = '68b87457fb02187bc73914e8'; // Add the MongoDB _id of the Top10List here

// Update the title
updateTop10List(listId, { 
    title: "My Favorite Video Game Narrative of All Time",
    games: [
      {
        rank: 1,
        title: "Soma",
        developer: "Frictional Games",
        releaseDate: new Date('2015-09-21')
      },
      {
        rank: 2,
        title: "The Witcher 3: Wild Hunt",
        developer: "CD Projekt Red",
        releaseDate: new Date('2015-05-18')
      },
      {
        rank: 3,
        title: "Metal Gear Solid 2: Sons of Liberty",
        developer: "Konami",
        releaseDate: new Date('2001-11-12')
      },
      {
        rank: 4,
        title: "The Forgotten City",
        developer: "Modern Storyteller",
        releaseDate: new Date('2021-07-27')
      },
      {
        rank: 5,
        title: "Alan Wake 2",
        developer: "Remedy Entertainment",
        releaseDate: new Date('2023-10-26')
      },
      {
        rank: 6,
        title: "1000x Resist",
        developer: "sunset visitor 斜陽過客",
        releaseDate: new Date('2024-05-08')
      },
      {
        rank: 7,
        title: "The Walking Dead",
        developer: "Telltale Games",
        releaseDate: new Date('2012-04-23')
      },
      {
        rank: 8,
        title: "Citizen Sleeper II: Starward Vector",
        developer: "Jump Over the Age",
        releaseDate: new Date('2025-01-31')
      },
      {
        rank: 9,
        title: "Disco Elysium",
        developer: "ZA/UM",
        releaseDate: new Date('2019-10-15')
      },
      {
        rank: 10,
        title: "The Last of Us Part I",
        developer: "Naughty Dog",
        releaseDate: new Date('2013-06-13')
      }
    ] 
})
  .then(result => {
    if (result) {
      console.log('Top10List title updated successfully');
    } else {
      console.log('Failed to update Top10List');
    }
  });

// Export the function for use in other files
export default updateTop10List;
