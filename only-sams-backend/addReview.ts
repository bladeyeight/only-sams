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
  title: "Mewgenics",
  type: "Review",
  rating: 9,
  content: "\n\nWhen I first started playing Mewgenics about 100 hours ago, I really didn’t like the way that it looked visually.  I had just finished playing Death Howl and that game is so elegant in its presentation.  Instead of being about how an ancient religion and culture interact with a mother’s traumatic loss of her child, Mewgenics is a game about cats.  Cats that look like they were drawn in pencil.  By a four year old child.  What about the cats?  Well the cats are in a house.  Unsupervised.  There is some sort of apocalypse going on outside the house as well.  Now, 100 hours later, I actually think that the game’s style is one of the best things about it along with a versatile combat system and deep role-playing elements that reward the player for creatively interacting with its massive amount of variability from run to run.  And it’s great because I love cats, especially my own amazing cat Clementine. \n\nMewgenics comes to us from legendary video game creators Edmund McMillen who helped found the roguelite genre as we know it today with The Binding Of Isaac, and Tyler Glaiel who is most notable for The End is Nigh.  I’ve actually never played The End is Nigh, but the influence of The Binding of Isaac is all over the style and gameplay of Mewgenics.  In fact, I would say that Mewgenics is like Binding of Isaac if you replaced the bullet hell combat with Into the Breach turn based combat. \n\nLet’s start with the style.  Like The Binding of Isaac, Mewgenics utilizes comedy like a sledgehammer directly to the nose in a way that’s so unapologetically punk and silly it borders on nihilism.  Visually Mewgenics evokes a huge amount of nostalgia for the Newgrounds.com era of flash games that existed in the 1990’s.  All of the character models look hand-drawn and two dimensional.  There is poop everywhere.  EVERYWHERE.\n\nMewgenics is gross.  Breeding is an important gameplay mechanic, and it occurs by two cats fucking in your house and giving birth right in front of you every night.  Enemies and allies alike are often born out of or made out of poop, and when anything dies it explodes in a bloody mess. \n\nThat’s why it’s so fascinating to me that I ultimately find it all to be really adorable.  It brings back rose-tinted memories of my friends and I in elementary school secretly playing Super Meat Boy and watching gory and cartoony videos like Happy Tree Friends during computer class instead of paying attention to the teacher.  Like a cat casually turning around to put its butthole in your face, Mewgenics comes from an artistic strain that is so revoltingly unmediated that it somehow becomes cute. \n\nThe sincerity of Mewgenics’ stupidity culminates in its soundtrack.  This game HAS to have the best video game soundtrack of the year.  Each randomly generated biome that your team of cats go through on a run has its own song created by the band Ridiculon.  All of these songs have hilarious cat themed lyrics and some are so good that I actually listen to them on Spotify outside of the game.  My favorites are ‘Eatin Rats’ and ‘Chumbucket Kitty’. \n\nNow that I’ve thoroughly praised its sloppy stick figure drawings, I need to move on to Mewgenic’s actual gameplay which doesn’t waste any time pretending to be simple.  Like The Binding of Isaac,  Mewgenics is a roguelite.  Basically every day in your cat house at the end of the world you take whatever bizarre stray cats and birthed kittens are at your disposal and send them on runs made up of turn based battles against an inexhaustible supply of enemy types and bosses. \n\nIf it’s true that roguelites live or die based on the amount of possible variances from run to run then Mewgenics, like The Binding of Isaac, has that so covered it could easily give Hades a run for its money.  Even after about 100 hours playing and seeing credits, my completion tracker on the game says 50% and I am still seeing tons of new enemy types, bosses, gear, items, abilities and even new classes that my motley crew of mutant cats can adopt. \n\nEvery run is so different from the last that it can actually feel like too much is left up to random chance in the game.  Sometimes you might start a run with a cat who randomly is blind so they miss many of their attacks or the weather in your battles might bring back every dead enemy as a zombie with madness.  On the other hand, I also had a run where my cleric cat got a passive where he received an impenetrable shield every time he killed an enemy, and he had an ability where he could hit every enemy on the battlefield at once regardless of their location.  He effectively could refresh his invulnerability indefinitely leading to me snowballing out of control. \n\nBut, while it is possible to lose a run out of nowhere for reasons that are completely beyond your control, the RPG progression that happens as you develop your cats on a given run has plenty of tools to try and take advantage of all the RNG systems at your disposal in nuanced ways.  For example, I had a ranger cat that spawned a worm familiar every time it used an ability and then I equipped an item that I found that gave every familiar extra health when it spawned.  As the run continued, I doubled down on ways for that cat to spawn more familiars and soon I outnumbered all my enemies in every battle with tons of super powered allies. \n\nDespite the fact that Mewgenics presents itself to be as deep as a fart joke, its extensive RPG systems, tactical combat, and endless variability means that it’ll be hanging in the air long after any noxious smells have dissipated.  After playing 100 hours of Mewgenics, I still feel far from experiencing all the content that it has to offer.  Isn’t it also endearing when something honest and stupid ends up being so much more in a world where the opposite is far more common?",
  platforms: ["PC"],
  genre: "Roguelite",
  releaseDate: new Date('2026-02-10'),
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
