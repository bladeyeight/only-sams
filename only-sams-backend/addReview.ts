import mongoose from 'mongoose';
import Review, { IReview } from './src/models/Review';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables based on NODE_ENV
const envFile = process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev';
dotenv.config({ path: path.join(__dirname, 'config', envFile) });

// Define a type for review input data
type ReviewInput = {
  title: string;
  type: string;
  rating: number;
  content: string;
  platforms: string[];
  genre: string;
  releaseDate?: Date;
  imageUrls?: string[];
};

/**
 * Adds a new review to the database
 * @param reviewData - Object containing the review data
 */
const addReview = async (reviewData: ReviewInput) => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gameReviews');
    console.log('Connected to MongoDB');

    // Create a new review
    const newReview = new Review(reviewData);
    const result = await newReview.save();

    console.log('Review added successfully:', result.title);
    
    // Disconnect
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    
    return result;
  } catch (error) {
    console.error('Error adding review:', error);
    return null;
  }
};

// Example usage (uncomment and modify to use):

const newReviewData = {
  title: "South Of Midnight",
  type: "Review",
  rating: 8,
  content: "\n\nWhen I first heard about South Of Midnight, I wasn’t super excited about it to be honest.  It sounded like just another action adventure game that I had played a million times before with a fresh coat of New Orleans paint and I don’t understand why the style had to incorporate stop motion animation seemingly for no reason.  But as I started playing it, I began to slowly get on board.  South of Midnight kept me engaged with its platforming and combat, but ultimately seals the deal with an intriguing story and an art style that is absolutely gorgeous and totally unique in the gaming landscape.  \n\nThe story begins with our protagonist Hazel Flood in the middle of a Katrina-esque storm that washes away her mother along with her house.  This immediately gives us our story long goal to find and rescue our mother.  When Hazel arrives at her grandmother’s house to look for help, she discovers that she is actually a part of an ancient order called Weavers who are able to view and alter the strands of fate around them.  \n\nAt this very early point in the story, I was skeptical of South of Midnights controls.  All of the platforming had been extremely simple and mostly driven by the early cinematic nature of the game with the camera forcing me to focus in one direction which made movement a little more complicated than it needed to be.  But as soon as I received Hazel’s dual blades at her grandmothers mansion and combat was introduced I began to notice something interesting about the game: everything looks and feels extremely good.  \n\nAll the animations from Hazel swinging her blades around to her executing each foe in combat to the way that she jumps feels fluid.  I especially love the way that Hazel’s double jump has her gliding through the air holding one of her silky magic strands.  As the openings cinematic camera gave way to harder platforming challenges that allowed me to find my own flow jumping and gliding across its landscape, I began to appreciate the controls better.  \n\nAs I kept unlocking new abilities for Hazel by exploring to find collectible experience points, it started to become apparent that some of the originality of South of Midnight’s setting had made the transition into its gameplay as well.  Hazel’s identity as a weaver made her comparable to a Spiderman of the Deep South effectively replacing webs with strands as she grapples with them around swampy trees and buildings.  \n\nThese Spiderman abilities are also present in combat as Hazel has a spell that lets her tie up enemies in her strands.  While tied up her enemies, or “Haints” as they are called here, are stunned and take increased damage from your attacks.  As I leveled up, I gained the bonus where when I executed a downed enemy all the enemies around us become tied up in strands as well.  This resulted in me constantly webbing up all of my foes and made every new combat encounter an exciting prospect.  \n\nAll in all I was pleasantly surprised by how much I liked the platforming and the combat despite the fact that it does feel similar to action adventure games like Kena: Bridge of Spirits with a New Orleans twist.  The real showcase for South of Midnight’s originality is the story.  I don’t want to spoil too much about the story itself (rest assured there are plenty of fun surprises hidden there), but two things that make the story great cannot be spoiled and that is the level structure and the music.  \n\nAside from some fun surprises, many of South of Midnights levels fall into the same repeated structure, and I think it mostly works to the games advantage.  First, Hazel journeys around the level getting into combat encounters with Haints and when she destroys their central corrupt node in each encounter she sees a memory of the pain that caused the node to be created in the first place.  Usually this painful memory is an explanation of the backstory of one of the characters in the game.  Once Hazel watches the memory, she puts it in a magic bottle and moves on to the next combat encounter. Eventually, this bottle gets filled up and that triggers a platforming section where Hazel must race against the corruption chasing her back to the bottle tree so that she can place this filled bottle on the tree amidst an awe inspiring display of lights.  This repeated structure is then punctuated with a boss battle.  \n\nMy favorite part about the boss battles and possibly my favorite part about the whole game is the music.  As you are fighting these gigantic beasts, the song in the background tells the story of how these monsters ended up as monsters.  These songs have great production value and absolutely match the overall Louisiana style of the entire game.  They also are very lyrically complex as each verse mentions specific characters by name all blended into a beautiful melody.  \n\nUltimately, the music is just another example of ways that South of Midnight manages to distinguish itself from the pack through its own uniqueness.  I have never played a game quite like South of Midnight before despite the aspects of the game that are just staples of the action adventure genre.  Its uniqueness finds its way into the story, the structure, the music, and even the combat and platforming gameplay.  That makes South of Midnight one of the most engaging games of 2025.",
  platforms: ["Xbox Series X/S", "PC"],
  genre: "Action Adventure",
  releaseDate: new Date('2025-04-08'),
  imageUrls: []
};

addReview(newReviewData)
  .then(result => {
    if (result) {
      console.log('New review added with ID:', result._id);
    } else {
      console.log('Failed to add review');
    }
  });

// Export the function for use in other files
export default addReview;
