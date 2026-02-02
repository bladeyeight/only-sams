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
  title: "Mio: Memories in Orbit",
  type: "Review",
  rating: 7,
  content: "\n\nIt seems like the general consensus about Mio in the gaming community is that \"Mio is not as good as Silksong\", and I agree with that consensus, but I also think that it is reductive.  In the year of our lord 2026, Silksong is arguably one of (if not THE) best metroidvanias of all time.  Does that mean that we need to wait for someone to make a metroidvania better than Silksong before we can play a metroidvania again?  Absolutely not!  I fully beat Mio: Memories in Orbit over the last week, just like I do with all the games I review, and I had a great time all the way through it.  Mio is a high production value metroidvania that has many similarities to Hollow Knight: Silksong, but it does plenty of things that differentiate itself.  I like some of these things better than Silksong and some of them I think Silksong did better.  The fact that Mio can be mentioned in the same breath as Silksong though I think is more of a compliment than anything else. \n\nWhen Silksong was released, my greatest hope was that its extreme success would motivate other developers to try and create metroidvanias with the same scope and attention to detail.  Mio is exactly that attempt, and the place where it puts most of its effort is into a high quality, almost AAA presentation of its world. \n\nYou play as Mio the titular robot who is awakened on a giant colony ship known as The Vessel.  This spacecraft is ostensibly designed to carry a bunch of humans from their origin planet towards a new home with automated robots taking care of them every step of the way from growing their food to replicating the air that they breath to even finding and navigating towards their destination. \n\nEvery part of The Vessel depicted in a 2.5D style is both gorgeous and grandiose.  The Metropolis region is probably one of the best examples of this as it features a massive city that spreads out on the horizon, as Mio runs through it on a 2D plane. Along the sidewalks, lots of other robots chirp and bustle around exhibiting that there are plenty of other robots on The Vessel in addition to Mio keeping everything running smoothly.  \n\nComplementing the great visual style is a pretty good synth soundtrack with a couple subtle bangers that do a great job of ratcheting up the tension during an intense boss fight or emphasizing the melancholy emptiness of some of the games more apocalyptic moments. \n\nThroughout the course of the game, it becomes more and more apparent that something is terribly wrong with The Vessel.  Enemy robots begin appearing in increasing number and strength and many of the friendly robots that Mio encounters on their journey begin to fall to the ground lifelessly lining the sidewalks of The Metropolis where they once skittered with animation.  The overseer AI modules known as the Pearls that control each of the ships systems like air supply and navigation start going offline, and it becomes Mios job to find each of these Pearls and recover their memories to figure out what is going on with and fix The Vessel. \n\nThe stellar presentation of Mios world and its gradual destruction really help hammer home the high stakes of your quest while simultaneously making the exploration in Mio a blast.  Every room feels pretty unique, and its fun uncovering each one as you wind through corridors and platforming puzzles trying to unlock them all.  There are also a varied amount of powerups, health upgrades, and collectible logs from the crew of The Vessel to make uncovering new rooms feel rewarding. \n\nUnfortunately, one area that Mios intriguing world cannot uplift is the combat.  Mios combat is definitely fun and interesting but also equally perplexing and unbalanced.  In a nod to Silksong, the protagonists main source of damage is their basic attack, but, while Hornet enhanced her kit with new tools and fighting styles, Mios unlocked combat abilities are mostly defensive in nature. Pretty early on in the game, you unlock a grapple hook ability that allows you to zip across the battlefield at an enemy and grants some invulnerability frames. You also unlock a spot dodge button that allows you to dodge any attack if timed correctly.  Although these two unlocked attacks that make up the bread and butter of your character are pretty overpowered (spot dodging and grappling everywhere actually make it pretty manageable to adeptly dodge many of the soulslike bosses flailing attack patterns), Mio is more of a floaty character than Hornet and that makes you a little more imprecise in your movement and attacks.  Mio moves more slowly like Kirby than Hornet and, while you can use Mios overtuned defensive abilities to compensate for that against the challenging enemies, ultimately Mios fights cannot compete with the choreographed dances that make up Silksongs intense fights. \n\nThis floatiness problem does continue into Mios perilous platforming sections (of which there are many) that has Mio managing a stamina meter ,as they swing and hover from grapple to grapple.  Its always a good idea to include a grapple hook to enhance movement in a game, and it is really fun to fly around a level like Spiderman, but I would prefer the weightier physics of Silksong to accompany the grappling hook for more precision in your movements. \n\nFor better or worse comparing Mio to Silksong is unavoidable.  Mio is an attempt to capitalize on the huge audience that Silksong so clearly identified.  Instead of looking at Mio as \"Silksong but not as good\", I think its more of a case of, \"If you enjoyed Silksong and are hungry for more games like Silksong, you should try out Mio: Memories in Orbit\".",
  platforms: ["PC", "Switch", "Switch 2", "Xbox Series X", "PS5"],
  genre: "Metroidvania",
  releaseDate: new Date('2026-01-20'),
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
