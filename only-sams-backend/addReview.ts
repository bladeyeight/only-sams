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
  title: "Citizen Sleeper 2: Starward Vector",
  type: "Review",
  rating: 8,
  content: "\n\nOne trend that I am beginning to notice as I write game reviews is that I often find myself introducing the review by comparing the game I am reviewing to some other game.  It makes sense to me that I do this, because I believe that the best way that we can convey knowledge is to metaphorically compare what we are talking about to something else or cite an example of what we are talking about.  I also do this because the history of video games is very iterative.  Developers make games by looking at their favorite games and seeing what worked and what didn’t before setting out to make “this game but better”.  Well, Citizen Sleeper 2 is especially interesting to me because I can’t really think of a game like it unless you count the original Citizen Sleeper.  The first Citizen Sleeper was a solid game but Citizen Sleeper 2 succeeds by taking everything that was good about the original (the writing, the gameplay, and the world) and elevating it.    \n\nLets start with the story, because its very original and well written and the game is mostly a visual novel.  You are a sleeper which is an android that has a humans mind copied and placed within it.  In the far future where humanity has used space travel long enough to spread itself across the stars and witness the rise and fall of a couple corporate empires, sleepers are primarily used for hard labor for corporations.  The game begins with you escaping your corporate overlords by rebooting your brain, restoring your autonomy but wiping all of your memories in the process.  With the help of your best buddy Serafin, you escape to Hexport Space Station.    \n\nOnce you arrive at Hexport, the gameplay begins and you must grow your skills and the resources available to you by exploring and working whatever jobs you can find aboard the station.  Unfortunately, as the days go by, it becomes apparent that Laine, the head of the organization that enslaved you does not intend to let his property go lead a life of its own.  So, the game eventually becomes the sci-fi version of Catch Me If You Can as Laine chases you from space station to space station.    \n\nAs you scramble across each new location in space, the writing and ambiance really endeared me to the game. Being a machine helps to drive home the theme of human mortality as your mechanical body slowly breaks down threatening your precious personality within.  New characters are introduced each with their own moody and complex ways of seeing the world and before you know it you have a motley crew of vagabonds that feel like a family.  By the end of the game, I felt like I knew how Serafin would react in any new situation we found ourselves in, because I knew him like a brother.    \n\nMostly, the game UI at any given time is simply a 3D model of whatever space station or star system that you are currently in with a stylized character portrait of whatever character is currently talking and lines upon lines of dialogue to sift through as that character speaks.  As I said earlier, this game is primarily a visual novel with very few animations so if you don’t like reading then this game probably won’t be for you.  I do like the way the game looks and feels though.  The character portraits on screen are simple but expressive and the soundtrack is comprised of relaxing lofi tunes that bestow a cozy, poignance to the text as it scrolls across the dialogue boxes.    \n\nCitizen Sleeper 2 is cozy and text heavy but I would never call it boring, because the gameplay brings high stakes to pretty much every situation that you encounter.  Every day you start with 6 dice with a number rolled between 1 and 6.  You then need to allocate these dice each day to each activity that your sleeper undertakes and the higher numbered dice brings the best probability for a good outcome.  Some days you might start with 6 dice with lower numbers and other days you could start with 6 dice that are all 6’s and 5’s.  It’s very strategic deciding which of your daily dice you want to allot to every action.  Maybe you are trying to do something that doesn’t have too many consequences if you fail so you might use one of your lower numbered dice for that.  Or maybe your sleeper is in a fight for his life so you need your 6 die for that.    \n\nEventually, it is inevitable that you will fail some rolls even if you are using high numbers on your dice and when that happens your sleeper accumulates stress.  Stress is what really ratchets up the tension and difficulty from the first Citizen Sleeper.  If your stress has reached a value of 1 and 3 then if you get a dice with either a 1 or a 3 on it then that die will be damaged.  Every one of your 6 daily dice has 3 hit points so it is possible for stress to destroy one and even all of your dice resulting in you losing the game.  There has been many nail-biting situations where a few unlucky rolls left me crossing my fingers as my sleeper repaired a derelict ship that was falling apart or faced down an armed bounty hunter.    \n\nFortunately, if a die is destroyed through stress, there are ways to repair your body and get your die back, but those repairs take resources.  Citizen Sleeper 2 introduces new special missions where you are allowed to select 2 crew members to accompany you on your ship to accomplish some goal in space.  These missions are especially dangerous to your dice, but at least you get two friends with specific strengths and weaknesses to add their dice to yours.  \n\nSimilarly, your sleeper also has strengths and weaknesses that give you a bonus to your dice when you add them to different types of actions.  These strengths and weaknesses are determined by the class you choose at the beginning of the game.  In my play through, I chose the Machinist so I was good at engineering types of actions but I was inherently bad at “engage” actions where I had to physically deal with other characters.  Each class also has a distinct push ability that you can use for the cost of 1 stress.  I would say this is the only negative about Citizen Sleeper 2, since I never used my push even once and made it through the game.  I never felt that my ability was strong enough to warrant giving myself stress.  \n\nDespite that,  Citizen Sleeper 2 is a huge improvement on the already solid foundation that is Citizen Sleeper 1.  The possibility for your life blood, your 6 dice, to break really adds some tension to what would otherwise be mostly a visual novel.  The first Citizen Sleeper also only took place on one space station, while its sequel lets us fly around to multiple stations on our own space ship.  These are welcome additions, but the writing behind developer Jump Over the Age’s newest game is what really cements it as one of the best games of 2025.",
  platforms: ["Xbox Series X/S", "PC", "Switch", "Mac", "PlayStation 5"],
  genre: "Graphic Novel",
  releaseDate: new Date('2025-01-31'),
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
