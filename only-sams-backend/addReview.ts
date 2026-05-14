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
  rating?: number;
  content: string;
  platforms?: string[];
  genre?: string;
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
  title: "Mixtape",
  type: "Review",
  rating: 8,
  content: "\n\nDoes a video game have to have actual gameplay in it to be a video game? This is a question that has plagued video game Reddit threads since the height of the walking simulator genre about 10 years ago when games like What Remains of Edith Finch and Layers of Fear and Everybody’s Gone to the Rapture were coming out all the time.  The answer to this eternal question is: Yes of course it does!  If a video game had no gameplay then it would just be a movie or a photograph.  Just because walking simulators have no systems like combat or character building or platforming or fail states doesn’t mean they don’t have gameplay.  They just don’t have those things so their gameplay can focus more heavily on exploration, world building, and narrative.  While I wouldn’t necessarily call Mixtape a walking simulator (its more a coming of age story told through the medium of a series of interactive music videos for one epic playlist), it is a prime example of a game that manages to achieve so much personality, emotion and resonance, because its gameplay is only one of the supporting instruments in its band with no solos, and the whole band fucking rocks!\n\nWe play as Stacey Rockford, a graduating high school senior with a very particular skillset: namely the ability to match the vibes of her current reality with the perfect song from her extensive knowledge of musical history.  Because of this ever since she was a toddler, she has wanted to become a ‘music supervisor’, which ostensibly is a professional that just listens to all music to understand how the medium evolves over time.  I should see if there is an only-staceys.net.  The game takes place during the last night Stacey and her 2 best friends have together in their hometown before Stacey leaves for her shot at her dream job.\n\nWhile I highly doubt that Stacey will immediately become a music supervisor, the value of her niche skill is clearly demonstrated over the course of the game, as she creates the perfect mixtape for her friend group’s last hurrah.  It is also clear that Mixtape’s developers Beethoven and Dinosaur possess that same superpower.  The game opens to the crew skateboarding with zero regard for traffic on a road to the energetic beats of ‘That’s Good’, by Devo.\n\nWhat follows is a soundtrack of absolute bangers that never lets up alongside an emotional rollercoaster of a plot akin to the highs and lows of a coming of age film like Superbad.  We’ve got songs while running from the cops breaking up a party.  We’ve got sad songs because of teenage angst.  We’ve got awkward make-out music.\n\nEvery aspect of teenage years is unabashedly covered here pimples and all, and its realness will have you unintentionally belly laughing and wincing in equal measure.  For example, Stacey’s passion for and knowledge of music is so vast that before every song she will break the fourth wall and give background info about the artist and the origins for the song.  This could easily have come off as pretentious but instead it really helped me get into the mindset of why Mixtape and the music are so significant.  Mixtape’s humor and charm comes from its innocent genuinity rather than witty dialogue or complex plot twists and that can be a very difficult balance to pull off.\n\nFull disclosure, Mixtape succeeds at pretty much everything that it attempts, but the reason I am giving it an 8 instead of a 10 is the length of the game in relation to other games that I have loved this year.  I was able to finish it in one sitting of about 4 hours, and the price of the game on Steam is about 20 USD.  I think that is a reasonable price (it would be a perfect price at about 14 dollars on a sale maybe) considering that going to see a movie at a theatre is about 14 USD these days and Mixtape is even more valuable than a really good film.  It is slightly longer and includes entertaining gameplay as well.  But I think compared to the other games on this site which can be played for a minimum of about 14 hours and potentially much much longer, the short length of the game does reduce my score of it to below the other games rated at a 9 on this site.\n\nStill, it does speak to its value that I would consider playing it again in the future when I am longing for its unique brand of nostalgia-tinted optimism.  Also, its short length means that anyone of any skill level can easily play the game to completion in just one or two sittings.  So, there is no excuse not to play Mixtape everyone.  Get out there, rock on, and play it!",
  platforms: ["Xbox Series X/S", "PC", "Nintendo Switch 2", "PlayStation 5"],
  genre: "Interactive Music Video",
  releaseDate: new Date('2026-05-07'),
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
