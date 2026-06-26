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
  title: "007: First Light",
  type: "Review",
  rating: 9,
  content: "\n\nOne thing I have observed across popular culture in the United States is the rise of the anti hero.  We have come a long way since Milton published Paradise Lost in 1667 and it was placed on the Catholic Church’s list of banned heretical texts because of his charismatic portrayal of Satan as a central character.  The popularity of every famous contemporary rapper, Deadpool, the Joker, Darth Maul, and Walter White will tell you that we are far beyond becoming outraged when a character is willing to sacrifice other people in order to achieve their own goals.  No doubt this is a response to the times we live in where strength and ambition are becoming more and more emphasized over other human qualities like empathy and curiosity.  Trust me, I love a good anti hero.  Rap is my favorite genre of music, and I cheered when Walter White grabbed his balls and told his boss to “Wipe down this!”  But it’s important to remember kids that Heisenberg is an anti hero, not a hero, and that selling crystal meth no matter what your justification might be is still wrong at the end of the day.  That’s why its refreshing when a cold corporate monolith like Amazon is willing to spend 200 million dollars to forge James Bond in 007: First Light with a new origin story decidedly as a hero who breaks the rules time and again not for himself but to save others.  The developers behind the game, IO Interactive, effectively use cinematic storytelling with developed characters and immaculately defined pacing to give Bond his due.\n\nSo many people online have compared First Light to the Hitman games which makes sense because that is what IO Interactive is best known for and Hitman is a beloved series.  There are a few elements of the Hitman series present in First Light:  there are multiple slightly free form levels where Bond is infiltrating a high class party filled with wealthy socialites and Bond can choose whether to hack into security with his trusty gadget watch, talk one of the guards into letting him behind closed doors by impersonating someone else, or simply sneak around security to accomplish his goals.\n\nBut while there are multiple points in each mission where the player might choose to go replay the level and do something small differently, what made the Hitman series great and so replay-able isn’t really present in First Light.  There aren’t 50 completely different well developed paths that Bond can follow in each level that lead to the mission playing out completely differently.\n\nIn fact, I think that 007: First Light is more similar to a Naughty Dog game like The Last of Us, because it’s strengths lie in its well written cinematic narrative and it’s stealth vs action approach to combat.  At the beginning of the game, Bond’s origin story as an agent demands a great training montage the likes of which we have all seen time and again in movies.  But here the montage doubles as an effective tutorial for the player to get a grip on the combat, stealth and driving in the game.  007 completely sets a new standard for how player agency in gameplay can stand alongside a story that would simultaneously feel right at home on the big screen.\n\nThe combat continues this same trend.  It is probably possible to make it through most missions completely undetected, but it was always a pleasure when I was spotted to ram my detectors head into the nearest wall before stealing his gun to turn it on his comrades.  Just like the Bond movies (which I have seen all of by the way), 007’s fighting style is frantic and improvisational.  Most guns that you get your hands on have only 1 or 2 clips full of bullets so you are constantly finishing them, throwing them into the faces of your enemies before picking up an entirely different gun and emptying that.  It’s possible to throw items like pots and cups on nearby surfaces at enemies, and Bond is just as deadly with his fists as he is with his weapons and gadgets.\n\nJust like The Last of Us, if there was a film adaption of 007: First Light, all the director would really need to do is just mirror the cutscenes of the game and it would make for a terrific Bond movie.  My favorite part about the story is probably its masterfully restrained pacing that culminates in the narrative’s payoff feeling earned.  Every mission begins with a briefing about the web of interconnected players and goals that Bond is walking into before the player slowly drives in as James and his team across an exotic landscape.  Following that, intrigue builds before popping off in action packed and surprising ways.\n\nIO Interactive also takes its time to allow complex characters to grow and develop in order to become more likable over time.  This depiction of James Bond himself, expertly portrayed by Patrick Gibson, is no exception.  At first, I found young James to be overly reckless, and I rolled my eyes when, during the first mission, he chose to basically blow up the MI6 mission objective almost whimsically.  It turned out that was, of course, the point and just a part of his well-told origin story about transitioning from brash young man to seasoned agent.  Similarly, I loved this depiction of the same old classic characters like Moneypenny and Q.  My favorite character of all though was John Greenway, Bond’s mentor, who, just like me, starts out hating Bond but slowly grows to love him over the course of the game.\n\nWith the absence of Naughty Dog in this console generation, others have been encouraged to step up to the plate of cinematic storytelling in gaming.  IO Interactive’s latest effort is especially impressive, since they haven’t really been making games that focus on combat and storytelling to this magnitude before, and they knocked it out of the park!  Do I like 007: First Light more than The Last of Us?  It’s very close but hard to tell.  You better be careful Sony.  If you don’t let Naughty Dog hurry up and release a game, people may forget who pioneered this genre altogether.",
  platforms: ["PC", "PlayStation 5", "Xbox Series X", "Nintendo Switch 2"],
  genre: "Action Adventure",
  releaseDate: new Date('2026-05-27'),
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
