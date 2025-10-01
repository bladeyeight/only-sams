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
  title: "Hollow Knight: Silksong",
  type: "Review",
  rating: 9,
  content: "\n\nWhen the first Hollow Knight came out in 2017, many considered it to be the best metroidvania ever made.  I played it to see credits and enjoyed it thoroughly, but its map system was off-putting to me.  Now, move over 2025 game of the year competitors, because 8 years later after much speculation about whether its sequel would ever come out or even if it still existed at all, suddenly we have the sequel: Hollow Knight: Silksong.  Typically, a benefit of small indie teams creating games is that they are able to create a small game quicker than their AAA counterparts, but Silksong is anything but small.  It’s just as massive and detailed and polished as its AAA fellows, but risky original choices that pay off betray the fact that Silksong was created by a team of only about 25 people.  No, it turns out that the reason that the game took so long is that an indie team was creating a game as big as a AAA one, and, now after a long wait, we get to enjoy that quality of game for the price of only 20 US dollars.  Hopefully, this is a signal of more good things to come in the gaming industry, but if not at least we get to savor this moment and enjoy a true masterpiece.\n\nIn Silksong, you play as Hornet, a fan favorite side character from the original Hollow Knight.  The story begins with her being transported in a cage towards an unknown city for unknown reasons.  While being carried across a bridge, some mysterious magical force sets her free and she sets out to reach the citadel on her own in order to figure out who captured her and why and to stop them from ever doing that to her again.\n\nI don’t know whether you have picked up on this, but I personally enjoyed Silksong a significant amount more than the original.  Part of this might be that I had already come to grips with the original Hollow Knight’s difficulty and stressful map system, but certainly a major reason why I like Silksong more is because it’s story is presented in a better way.  \n\nUnlike the original’s silent protagonist the knight, Hornet speaks her mind to anyone she meets on her journey.  She is neither overly talkative nor cold and unfeeling but manages to strike a charismatic balance that reveals her to be a powerful pragmatic badass that really resonated with me.  On her epic journey, she meets plenty of memorable characters and these interactions range from heartwarming and funny to shocking and horrifying.  Hornet’s supporting cast often reappear throughout her lengthy journey and I genuinely cared to see what happened to my favorites.\n\nNot only is Hornet a better protagonist than the knight storywise but I also found her to be an absolute blast to play as in the gameplay department.  All the characters in Silksong are gorgeously animated and expressive from the bosses to the shopkeepers and Hornet is no exception.  From the very start of the game, she moves with a dancers grace and one of the first abilities she unlocks is a sprint which might be my favorite sprint in any game ever.    \n\nUnlike the original knight, she can clamber up ledges and her downward air attack doesn’t strike directly beneath her but attacks at a diagonal which lets her pogo off enemies and the environment in order to reach new areas or position herself behind an enemy.  This diagonal pogo attack is definitely one of the risky design choices by Team Cherry that I mentioned earlier, because it is certainly harder to pogo off of something at the diagonal than if it were below your character.  But, once I mastered the pogo, it felt so good to slam into the enemies below me and then cartwheel off of them in the air.  \n\nIn fact, all of the movement in the entire game feels so good.  I played through Silksong on the Switch 2 and I could feel the soft haptics of every step that Hornet took as she glides across the ground with my 8bitdo controller.  There is plenty of nail-biting platforming challenges in Silksong where you string together a bunch of the abilities you unlock throughout the game to reach new areas and their formidableness was only equalled by my joy in conquering them.\n\nSimilarly, there is plenty of combat in Silksong and that also feels like a choreographed dance where positioning is incredibly important.  Most fights start by you learning your enemies attack patterns, so that you can use Hornets agility to position her in a spot where you can strike them before dashing off to safety.  The real standouts of the game’s combat are its boss encounters and there a lot of them: over 40 to be more specific, and they are an absolute joy to discover and figure out.    \n\nAnd by absolute joy I mean they will pummel you into submission until you truly believe that beating them is absolutely impossible and then after many deaths you will begin to realize that you have figured out all the bosses attack patterns.  Then you will beat the boss and it will feel like the greatest thing that you have ever achieved!  At least until you encounter the next boss and the whole process starts over again.\n\nYou might be recognizing that definitely another risky move that Team Cherry has pulled in making Silksong is the level of difficulty in the game.  Ever since the game’s release, debate has raged online about whether the game is too punishing and too difficult or whether it is just right.  This debate about the level of difficulty is pretty common for souls-like games which is a genre that almost necessitates that the game be challenging, since dying over and over again in order to grow stronger is usually a core mechanic in that genre.\n\nStill, part of me wonders whether Silksong would be a better game and make more money if it were less difficult.  I managed to beat the game by getting to the first ending in the game which took me 54 hours, but I am aware that there is a sizable portion of the game that still remains for me to play in order to get the other endings.  I am taking a break from playing right now simply because I feel so much accomplishment for beating the game’s first ending, and I want to revel in that for a bit before diving back into probably even more difficult challenges.    \n\nI encourage other players who are having a hard time to do the same thing and try and make it to that first ending.  Furthermore, whenever you have died numerous times at one place in the game, I would recommend exploring elsewhere on Silksong’s vast map.    \n\nDespite my grievances with Hollow Knight’s map system (specifically I don’t like how you have to sit down at a bench checkpoint in order to update your map and how you need to find the map person in each zone before you can have a map), exploration in Silksong is so much fun, mostly because of how distinct and hauntingly beautiful each zone in the game feels.  There are desert zones.  There is a zone where you are inside a giant clockwork machine.  There is a zone where you climb a massive mountain Celeste style.\n\nNot only are these zones visually distinct but distinct gameplay makes them feel different.  In the Sands of Karak, wind gusts can push the player around whenever they are in the air.  There are a ton of different music tracks to accompany each zone and boss fight that you encounter and it regularly had my head bobbing along to the sound.   There are numerous cities in the game that you can discover that grow and change as you meet more of the game’s roster of characters. \n\nAside from exploring just to discover strange new worlds, exploration reveals a lot of opportunities to upgrade Hornet’s capabilities in true metroidvania fashion.  You can find movement abilities, upgrades to your silk (mana) and health caps.  There are numerous tools like throwing daggers and traps that you can find and equip that have a huge impact on combat including boss fights.  You can find different crests which are almost like character classes for Hornet that changes the look and impact of all of her attacks.\n\nAll of this makes exploration a great idea when you are stuck in one area of the game.  The map is so huge and interconnected that there is always somewhere new to explore and that also ensures that when you come back to where you are stuck you will be more equipped to triumph.\n\nAs I look back on my 54 hours with Silksong, I have so many emotions, because each area that I explored and each boss that I defeated was paid for with blood and sweat and concentration.  When my roommate asks for help trying to beat a certain boss or get a certain area, I can tell him all the steps to get there because I remember each wall I flipped off of and each enemy I defeated distinctly.  I faced all of these challenges enthusiastically and voluntarily, because I was having so much fun the whole time even when I was at my most frustrated.  It takes a very special game to pull that off.",
  platforms: ["Xbox Series X/S", "Xbox One", "PC", "PlayStation 5", "Playstation 4", "Nintendo Switch", "Nintendo Switch 2" ],
  genre: "Metroidvania",
  releaseDate: new Date('2025-09-04'),
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
