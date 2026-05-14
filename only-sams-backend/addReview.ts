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
  title: "How I Play and Review Video Games",
  type: "Editorial",
  content: "\n\nI have been gaming ever since I was very young — maybe about 5 or 6 years old.  My first memories involve a boxy 90s era white desktop placed in our family’s kitchen.  I would play on it using floppy discs and MS-DOS, an old old operating system that resembled nothing more than a black terminal that a user could only type text into to start up programs and games.\n\nSince then, my tastes in games and how I play them have ran the gamut.  I was a PC gamer for many years before deciding that I really enjoy the freedom of playing on a console where I can lounge in a comfy chair or couch with only a controller in my hand instead of being weighed down with a burning hot laptop on my lap or being locked in at a desk in front of a desktop.\n\nWith the revolutionary release of the Nintendo Switch in March 2017, I and plenty of others realized that we enjoyed having the benefits of a console with its big screen and controller setup combined with the benefits of a handheld.  Now if I wanted to game nested in the comfort of my bed I could just grab my switch and game while curled up in my covers like I was reading a cozy novel.\n\nAfter the success of the Switch, Valve realized that it could take that idea even further by just making a handheld PC that could do everything a switch console could (minus detachable motion controlled joy cons) and everything a PC could with the power of SteamOS and Linux.  Now, my favorite way to game is either on my Switch 2 or Steam Deck OLED and my cat Clementine loves it too, since he can curl up on the couch right next to me.  If I ever need to play a highly graphics intensive game,  I use my Xbox Series X and those 3 systems pretty much allow me to play any game that I want to play.  The only outliers that can squeak by me are Sony games that do not get ported to PC, but most Playstation games do get ported to PC eventually.\n\nNow, for writing reviews on only-sams, I do have guidelines that I adhere to.  Only-sams.net is kind of like a diary for me for all the games that I play, but I also want it to reflect contemporary games each year so I can see not only how I have changed but also how gaming itself has changed over the years.\n\nI do sometimes play older games of course, but for only-sams I have mostly been focusing on reviewing games that have come out in the current year.  Now, there are some exceptions to this (Death Howl this year) where a game may come out at the very end of the previous year and I didn’t get the chance to review it so I will add that in and consider it in the following year.  Jeff Keele’s Game Awards does the same thing.\n\nIn addition to the game coming out during the current year, I believe it is also necessary that I beat the game in order to review it on only-sams.  Actually, one very important metric that I have for myself to know whether I like a game or not is whether I beat the game or not.  Sometimes, I really enjoy a game’s early hours and sometimes I WANT to like a game very much but ultimately I can’t bring myself to finish it.  There is a difference between liking the idea of a game and actually enjoying playing it and actually enjoying playing it is more important.\n\nBut what does “beating a game” even mean?  My personal definition (opinion) of beating a game is that I see credits.  There are many reasons for why I have defined beating a game as seeing credits for myself that I look forward to going into in a future editorial, but basically for reviewing purposes I believe that seeing credits means that I have concluded the main story and seen enough of the game to thoroughly gauge its pros and cons.  Sometimes seeing credits takes as little as 5 hours or it may take as long as 200 hours.\n\nLastly, you, fictional reader, may have noticed that all of my reviews so far have fallen in the 7-9 range and that is because in order to take the time to fully review a game on only-sams and recommend it to someone else I have to actually enjoy it.  There are plenty of new games that I have played that have not ended up on only-sams and that is because I probably didn’t make it to credits and didn’t enjoy it.\n\nIf a game has the quality of a 6 or lower to me I probably won’t enjoy it.  One day we may see a lower than 7 score probably because sometimes it can be fun (like watching a terrible movie) to play a terrible game but we shall see.  Maybe one day we will even see a 10 score, but those are incredibly rare. If I write reviews for my top 10 lists of all time then some of the games near the top of those lists would be 10 out 10.\n\nAnyways, I wanted to write this editorial so people can see some of the thought process behind how I write reviews for only-sams, so that if they see something they don’t understand on the site this might help explain a few things.  I plan to write more editorials in the future! "
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
