import mongoose from 'mongoose';
import Review from './src/models/Review';
import dotenv from 'dotenv';

dotenv.config();

const seedReviews = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gameReviews');
    console.log('Connected to MongoDB');

    // Create sample reviews
    const reviews = [
      {
        title: "Elden Ring",
        type: "Game Review",
        rating: 9.5,
        content: "This is an amazing game with incredible world design...",
        platforms: ["PS5", "Xbox Series X", "PC"],
        genre: "Action RPG",
        releaseYear: 2022,
        imageUrls: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"]
      },
      {
        title: "Starfield",
        type: "Game Review",
        rating: 8.0,
        content: "Bethesda's space epic has incredible scope...",
        platforms: ["Xbox Series X", "PC"],
        genre: "RPG",
        releaseYear: 2023,
        imageUrls: ["https://example.com/starfield1.jpg"]
      }
    ];

    await Review.insertMany(reviews);
    console.log('Sample reviews inserted');

    // Disconnect
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

seedReviews();