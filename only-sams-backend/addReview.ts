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
  title: "Cairn",
  type: "Review",
  rating: 9,
  content: "\n\nMy favorite moments in life are when I am experiencing something that I could never have fathomed before and loving it.  This has happened twice so far this year in video games already with Death Howl and now Cairn.  Two weeks ago when I was wrapped in a nice cozy Mio blanket sewn together from familiar Hollow Knight threads, I never would have pictured myself hanging by a finger from a sheer outcropping of rocks thousands of kilometers in the sky in a nail-biting mountain climbing game — a video game genre that I have never dabbled in before.  A brainchild of The Game Bakers, Cairn succeeds both on a pure mechanical level with a new, brilliantly deep climbing system and also on an emotional level by demonstrating how challenge and fulfillment can walk hand in hand with obsession and self-destruction.  The former will have you gripping your controller sweating with nothing more on your mind than making it over the next rock alive, and the latter will stick with you long after you put down the controller.\n\nYou play as a famous rock climber named Aava who is trying to climb Kami: a mountain that no climber has ever reached the peak of alive.  Many before her have tried and either lost their lives in a grisly fashion that you can observe on the way to the top of the mountain or they opted to give up and climb back down in defeat.  You and Aava will have many opportunities to experience both these outcomes yourselves, as the obstacles Kami throws at you become more and more merciless and the game will ask you whether you want to give up and end the game by going back to the base of the mountain or keeping going upwards. \n\nGoing upwards is done by placing each of Aava’s limbs individually into handholds on the surface of a wall.  Behind the scenes, the game has a highly complex physics simulation running the numbers on the position and strength of each hold relative to Aava’s body and center of gravity.  There are dozens of different factors at play when Aava wedges her leg into a corner on a wall like the grip Aavas foot has on the rock and whether the rest of Aava’s body is in a comfortable position relative to the rock. \n\nAs you move Aava’s limbs, the game automatically selects the most probable one you want to move next (although it is possible and often necessary to manually select which one you want to move) and the rest of Aava’s body reacts realistically to the movement that is chosen.  When you reach towards a far off handhold, Aava will sometimes push off of her foot that is planted somewhere else letting her stretch even farther to find her purchase or maybe reaching so far has placed her in a precarious position that makes Aava’s body shake with exertion until she falls with a blood curdling scream. \n\nThis all comes together to make climbing feel less like snapping a rag doll into various positions on a grid and more like a human being moving naturally by any means necessary up the rock face.  Now, I will admit there are plenty of times where this simulation breaks down exposing the sparking wires beneath.  Sometimes, you can move Aava into such a contorted position that her limbs “rubber-hose” her into looking like some sort of nightmarish cartoon character.  Other times, the game letting you constantly connect yourself via a rope that can stretch from multiple pitons jammed into the wall for miles as you explore this open ended mountain leaves the rope jittering and clipping through a wall or two.  But, these glitches were the exception rather than the rule. \n\nThe craziest part about this whole climbing physics simulation is that you as the player really have no inkling at first into all the different elements of it other than your connection with Aava herself.  As you grab hold of different cracks and ledges jutting out from the rock, Aava will occasionally give verbal feedback as to how things are going.  She’ll say “That’s good!” or “I’m going to slip!”  Her pained grunts of exertion and shaking muscles are also indicators that her tenure on the side of the mountain is nearing its limits. \n\nMy connection with Aava extends even beyond the gameplay mechanic of her teaching me how to climb.  I feel like I know her better than any other person in her life does, in no small part because she pushes everyone else in her life away.  Cairn answers the question: “What type of person would risk everything to try to climb an otherworldly video game mountain that progressively increases in difficulty?” \n\nThe answer sensibly is an incredibly self involved fucked up person turns out.  Everyone Aava meets on the mountain, including all the dead bodies, is constantly telling her to give up and go home and just live her life, yet she tells them that she is not like them.  She lives for those moments when it is just her and the mountain. \n\nIn many ways, the mountain reminds me of some terribly evil supernatural force that you might find in a Resident Evil game.  In addition to the fact that there are survival mechanics where you have to conserve and organize resources necessary for life in your Resident Evil 4 style backpack, the mountain itself feels relentlessly terrifying and insurmountable. Not only does Aava face a constant desperate fight for survival as she twists her bleeding fingers into each crevice on the rock face, but there is a foreboding inevitability to every new layer of height that Aava reaches.  All the bodies flattened and pierced by sharp rocks, the dwindling temperatures, and the empty ruins of past civilizations that Aava passes seem to suggest that her ascent is a one way trip. \n\nThe one question that I and all the people who care about her back home, as they leave her voicemail messages on her robot that she never responds to, is: “Why?”  Why risk everything in a brutal suicidal attempt to climb an insurmountable mountain when Aava could just go home and be with the people who love her? \n\nThough she tries many times, Aava is never able to give us a satisfying answer.  She says that she is different from everyone else.  She lives for these moments of challenge on the mountain where she has no thoughts and no company even though it causes her and everyone who loves her so much pain.  Climbing is who she is. When she finally reaches the peak of each mountain she climbs, she feels like she is touching something even greater than herself. \n\nAs I watched the credits scroll down the screen at the end of the game, and even before I started playing Cairn, I was still left with this question unanswered.  Why does Aava insist on climbing Mount Kami?  Is it because, in my desire to play the game, I never allowed her to turn back?  Why do I care about doing the things in life that I do while others care about completely different things? Why do I sometimes do them even when they might not be what’s best for me?  Why?",
  platforms: ["PC","PS5"],
  genre: "Climbing",
  releaseDate: new Date('2026-01-29'),
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
