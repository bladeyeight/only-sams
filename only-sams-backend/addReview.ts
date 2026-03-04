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
  title: "Resident Evil: Requiem",
  type: "Review",
  rating: 9,
  content: "\n\nResident Evil potentially could be my favorite gaming franchise of all time, so a completely new entry in the series is a huge deal for me.  Resident Evil 2 Remake is my favorite horror game of all time.  Resident Evil 7 is the scariest game I have ever played, and I think Resident Evil 4 probably has the most fun real time combat out of any game I have ever played.  Resident Evil Requiem manages to take every element of what made these 3 earlier games great, elevate them, and then mash them all together into one game.  This isnt necessarily surprising considering that Capcom made Resident Evil 2 Remake, Resident Evil 4 Remake and Resident Evil 7 relatively recently and there certainly were developers that worked on all 3 of those games working on Requiem.  That doesnt make it any less impressive though that Requiem manages to outperform 3 of the greatest, but also very different, games of all time and pack them all into one game.  Still, while Requiem might be perfect for me, a hardcore Resident Evil fan, there is a lot of stuff going on in this game, and I could see that being overly complex for someone if this is their first Resident Evil experience.  But if you want a crash course on all the best things that Resident Evil has been up to in the last 5 years look no further than Resident Evil Requiem.\n\nLike Resident Evil 7, Requiem begins very cinematically with an introduction to one of our two main protagonists in this game: Grace Ashcroft.  Grace is the daughter of journalist Alyssa Ashcroft, and, while Graces fearful, anxious stammering initially made me question how she managed to become an FBI agent in the first place, her brave actions in the face of incredible adversity later on made me admire her just like many Resident Evil characters before her.\n\nIn the first very scripted level, Grace is sent to investigate a mysterious body found at the Wrenwood Hotel which is the same location that her mother was killed 8 years earlier.  Despite being a huge conflict of interest that should probably disqualify Grace from this job, what happens at the Wrenwood invested me in Graces situation and made me eager to uncover what prompted Alyssa Ashcrofts murder in the past.  Ultimately, the answers that Requiem presents for these questions at the end of the game are confusing and hamfisted, but that is usually the case for Resident Evil storylines.  What really matters about the story is its excellent atmosphere and all the unforgettable situations that its likable characters find themselves in.  \n\nWhat also really matters is the narratives excellent pacing, and Requiem manages this by switching perspectives between Grace and another fan favorite character: Leon Kennedy.  I mean this very literally, since the game allows you to play in either first or third person for either Grace or Leon and the recommended way to play is first person for Grace and third person for Leon.  First person does suit Grace, since her gameplay style is most similar to the slow, resource deprived and horror focused Resident Evil 2 Remake.  Leon, on the other hand, plays more like the action forward Resident Evil 4 with him taking on armies of zombies with a powerful arsenal of guns and stylish melee attacks.  As someone who loves both of these styles, it was impossible for me to be bored playing Requiem.  Whenever playing as one character even hinted at becoming stale, the narrative left that character on a tantalizing cliff hanger and leapt to the other character.\n\nNow, when I first heard that Capcom was going to put Resident Evil 2 and Resident Evil 4 segments back to back in the same game, I was afraid that they were biting off more than they could chew, but Requiem gives both play styles all the depth that they deserve and even manages to make smart improvements to the formulas of each.  The maps that Grace finds herself exploring are just as winding and interconnected as the Raccoon City police station and the Spencer mansion.  What elevates them (especially the care center) above those in earlier games is that some zombies throughout the map have more distinct personalities from the rest and that forces Grace to deal with them in different ways.  The opera singer will draw a bunch of zombies to her if she is alerted and the chef is huge, armed with a cleaver, and loves to chop up meat in the kitchen.  Because of the scarce resources, it is often necessary to avoid killing these zombies and the fact that they can all behave so differently makes working your away around them time and again much more interesting as the game goes on.\n\nThe Leon sections are even more bombastic than what was present in Resident Evil 4.  Somehow, Leons badassery did not plateau with 4 and he has ascended to Batman levels in his old age now that he has a fancy car, an expensive looking watch, and most importantly, a hatchet that allows him to parry attacks and execute zombies in addition to his melee attacks.  It is incredibly satisfying to shotgun a zombie in the face, kick it so it slams against a wall and then execute it by chopping its head off.  In an even better way to handle the dual protagonist setup that Resident Evil has used many times in the past, Leon will come onto the map after Grace has precariously snuck her way through it to enact bitter revenge on all the enemies that she had trouble with.\n\nI need more time to determine where exactly Resident Evil Requiem sits on my tier list of Resident Evil games.  Right now, I have it as my third favorite right behind Resident Evil 2 Remake and Resident Evil 4 (and 4 Remake).  I wouldnt scoff at someone saying that it is their favorite Resident Evil game, since it does include elements of all of them and all those elements are the best or better than they have ever been.  One thing is for sure though: Resident Evil is back better than ever.  Now if youll excuse me, I have the sudden urge to play the original Resident Evil again and probably a few others after that",
  platforms: ["PC","PS5", "Xbox Series X/S, Nintendo Switch 2"],
  genre: "Survival Horror",
  releaseDate: new Date('2026-02-27'),
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
