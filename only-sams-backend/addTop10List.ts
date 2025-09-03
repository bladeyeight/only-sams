import mongoose from 'mongoose';
import Top10List, { ITop10List, IGameEntry } from './src/models/Top10List';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables based on NODE_ENV
const envFile = process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev';
dotenv.config({ path: path.join(__dirname, 'config', envFile) });

// Define a type for top 10 list input data
type Top10ListInput = {
  title: string;
  games: IGameEntry[];
};

/**
 * Adds a new top 10 list to the database
 * @param listData - Object containing the top 10 list data
 */
const addTop10List = async (listData: Top10ListInput) => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gameReviews');
    console.log('Connected to MongoDB');

    // Create a new top 10 list
    const newTop10List = new Top10List(listData);
    const result = await newTop10List.save();

    console.log('Top 10 list added successfully:', result.title);
    
    // Disconnect
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    
    return result;
  } catch (error) {
    console.error('Error adding top 10 list:', error);
    return null;
  }
};

// Example usage (uncomment and modify to use):

const newTop10ListData: Top10ListInput = {
  title: "Best Video Game Narrative of All Time",
  games: [
    {
      rank: 1,
      title: "Soma",
      developer: "Frictional Games",
      releaseDate: new Date('2015-09-22')
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
      releaseDate: new Date('2001-11-13')
    },
    {
      rank: 4,
      title: "The Forgotten City",
      developer: "Modern Storyteller",
      releaseDate: new Date('2021-07-28')
    },
    {
      rank: 5,
      title: "Alan Wake 2",
      developer: "Remedy Entertainment",
      releaseDate: new Date('2023-10-27')
    },
    {
      rank: 6,
      title: "1000x Resist",
      developer: "sunset visitor 斜陽過客",
      releaseDate: new Date('2024-05-09')
    },
    {
      rank: 7,
      title: "Sanabi",
      developer: "Wonder Potion",
      releaseDate: new Date('2023-11-08')
    },
    {
      rank: 8,
      title: "The Walking Dead",
      developer: "Telltale Games",
      releaseDate: new Date('2012-04-24')
    },
    {
      rank: 9,
      title: "Disco Elysium",
      developer: "Larian Studios",
      releaseDate: new Date('2019-10-15')
    },
    {
      rank: 10,
      title: "The Last of Us Part I",
      developer: " Naughty Dog",
      releaseDate: new Date('2013-06-14')
    }
  ]
};

// Uncomment the lines below to add the example list

addTop10List(newTop10ListData)
  .then(result => {
    if (result) {
      console.log('New top 10 list added with ID:', result._id);
    } else {
      console.log('Failed to add top 10 list');
    }
  });


// Export the function for use in other files
export default addTop10List;
