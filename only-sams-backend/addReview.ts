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
  title: "Death Howl",
  type: "Review",
  rating: 9,
  content: "\n\nSo Sam you are saying the number 1 game of 2026 is a game that came out at the end of 2025? Well, look — this site works by the same methodology as the game awards : Death Howl came out in December in 2025 and I did not have time to play it and review it by years end.  It deserves recognition and also it is in the number 1 spot because it is the first game that I have reviewed in 2026.  Death Howl is going to be hard to upset in the number 1 spot though, because it succeeds in pretty much everything that it sets out to do and it sets out to do a lot of ambitious things at once.  It is a turn based deck builder with combat that combines the best elements of Slay the Spire, Into the Breach, and Dark Souls and it takes place in an open world reminiscent of Zelda: Breath of the Wild or Elden Ring.\n\nYou play as Ro, a Scandinavian shaman from the year 6000 BC who has lost her son.  Instead of accepting his death, she uses a ritual to enter the spirit realm to try and bring him back.  We have had plenty of sad Dad games in recent times, but I haven’t actually seen too many sad Mom games.  Very quickly, this story effectively creates emotional stakes that I cared about for the entire game without too many words and propels us directly into the action.\n\nThe action itself takes place on a small Into the Breach style grid.  As Ro traverses the large over-world in real time, whenever she encounters an enemy the grid appears, real-time becomes turn-based, and cards from your deck are dealt to you.  Every turn Ro has a certain number of action (called mana) points that she can spend to play cards from her hand.  The combination of different cards and the grid results in satisfying Gloomhaven-esque choices where I was weighing lots of different factors like enemy movement and attack range with my position and hand to find the best possible move in every situation.\n\nProbably my favorite implementation of all these disparate genres is how the developers at Outer Zone brought souls like elements into the game.  They could’ve just made the game hard and called it a day, and the game is definitely hard.  All the varied enemies can do a lot of damage and are fully capable of executing Ro as she tries to preserve her health pool on the sometimes long and winding trek between bonfires on the map.\n\nBut what really makes the game hard, just like any souls like, is that all the different enemies have different, often devastating, attack patterns and abilities, and, while you can see their health and how long their movement range is, you have no other indication of how these enemies attack until you see them do it.  One enemy, a floating undead dragon head, can fully respawn any enemy you kill, so it’s important to focus on that one before the rest.  Another spider enemy has a lot of poison attacks and can jump over obstacles, so while it doesn’t do much damage initially, the stacking poison can deal a lot of damage in the long run.  This enemy diversity made it exciting every time I saw a new enemy type and made me switch up my strategies as I learned about their capabilities.  Fortunately, while you do need to visit bonfires to restore your health and when you die you do need to wade into the middle of combat to recover your souls from your body, the fact that Ro respawns right before the combat she died in does make learning new enemies attack patterns less frustrating.\n\nThe soulslike influences continue outside of combat into the overworld map too.  The shadow realm that Ro traverses is pretty big and filled with different winding paths that reward Ro with different ways to become stronger.  Many times, I went down one path to find enemies that were way too strong for me, but there were many other routes I could travel down to become stronger before returning to devastate what before seemed insurmountable.\n\nExploring the shadow realm feels very rewarding.  Sometimes, you might uncover a cave that has an important material that might help you add a new card to your Slay the Spire deck.  Sometimes, you might find a new character that gives you a new side quest to complete or you might find a new skill point that allows you to purchase upgrades from Ro’s skill tree that she has.  Simply killing enemies rewards Ro with crafting materials and souls (called “howls”) and that is how you craft inventive and powerful cards to add to your deck which is limited to 20 cards max.\n\nThere are multiple ways that you can build your deck in Death Howl.  Maybe you want to focus on cards that give you armor so that you are a tank character that is hard to kill.  Maybe you want to get a ton of movement cards so that you can hop across the battlefield, killing everyone in your path.\n\nAs you uncover new visually distinct regions in the shadow realm, there are families of cards that you are incentivized to use in that region to keep things fresh.  In the winter mountain area, I unlocked a new deck of cards that focused on a playstyle that revolved around building up lots of armor on my character and then blasting that armor off as rocks onto enemies to kill them.  Similar to switching your character in Slay the Spire, moving between regions in Death Howl requires you to play in a completely different way and I consistently found all my different “builds” interesting and easy to switch between.\n\nOne thing that remains consistent with me over all the different elements of Death Howl is an appreciation of its art style.  The developers at Outer Zone went with a pixelated, gothic horror vibe that seems manageable for a small team but also capable of encapsulating the ambitious world that they wanted to create.  All the characters and enemy designs are imaginative including Ro herself who comes tailored with lots of different animations to facilitate the numerous cards at her disposal.  It is rare to see a world that is authentically based on Scandanavian folklore taking place at such an early point in Earth’s history.\n\nDeath Howl is a chimera of wild proportions.  It is incredibly impressive that one indie game could aim for such a high level of depth and complexity in a bunch of seemingly incongruous gameplay elements and then victoriously combine them all to work seamlessly and play off of one another.  Last year, both Blue Prince and Nightreign struggled to merge only 2 different genres to much success, but I would argue that Death Howl manages to mash many more than 2 genres together and does it with the natural grace of a Nordic stag leaping through the forest that it calls home.  ",
  platforms: ["PC", "Switch", "Xbox", "PS5" ],
  genre: "Deck Builder",
  releaseDate: new Date('2025-12-09'),
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
