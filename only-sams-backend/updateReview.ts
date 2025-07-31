import mongoose from 'mongoose';
import Review from './src/models/Review';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables based on NODE_ENV
const envFile = process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev';
dotenv.config({ path: path.join(__dirname, 'config', envFile) });

/**
 * Updates a review in the database by its ID
 * @param reviewId - The MongoDB ObjectId of the review to update
 * @param updateData - Object containing the fields to update
 */
const updateReview = async (reviewId: string, updateData: Partial<any>) => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gameReviews');
    console.log('Connected to MongoDB');

    // Find and update the review
    const result = await Review.findByIdAndUpdate(
      reviewId,
      updateData,
      { new: true } // Return the updated document
    );

    if (!result) {
      console.error(`Review with ID ${reviewId} not found`);
      return null;
    }

    console.log('Review updated successfully:', result.title);
    
    // Disconnect
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    
    return result;
  } catch (error) {
    console.error('Error updating review:', error);
    return null;
  }
};

// Example usage for updating releaseDate and genre:

// To update a review's release date and genre:
const reviewId = '688bb5c268f649b375208fd7'; // Add the MongoDB _id of the review here

// Update the release date and genre
updateReview(reviewId, { 
  title: "Elden Ring: Nightreign",
  type: "Review",
  rating: 8,
  content: "\n\nIf you had told me in 2022 when From Software’s Elden Ring was first released that in 3 years we would be getting a multiplayer-only sequel that was heavily influenced by Fortnite, I would’ve added a mental note in my brain that its possible you were nursing a crack addiction.  But here we are in 2025 and I have spent many hours playing Elden Ring: Nightreign all the way to seeing credits, frantically running from the blue storm time and again while rifling through corpses and chests for any equipment that would give me the smallest hope of surviving From Software’s classic onslaught of merciless bosses.  Nightreign somehow succeeds at delivering the same addictive souls-like combat that the Elden Ring developers are known for but novelly wrapped inside the package of a live-service multiplayer title.  This souls-like understandably has some rough edges where Elden Ring’s deep massive world was crammed into a round based system, but overall I am left impressed by how well Elden Ring plays on the Fortnite island.    \n\nWhen the game loads in, we are treated to an opening cutscene just like the beginning of the first Elden Ring. The world has been shrouded in darkness by the night lord or something leaving only 6 nightfarers to defeat the night lord and return the Lands-Between to normal. I realized during this cutscene that Elden Ring: Nightreign is every bit as freakishly gorgeous as its predecessor and also every bit as incomprehensible.  Every character speaks with an airy, nonchalantness as if they are about to drift off to sleep at any moment and we unfortunately learned the history of planet Earth as children instead of the 50,000 page atlas of the Lands-Between that George R. R. Martin wrote off camera.  But that’s okay because we aren’t here to know what’s going on, we are here to gaze in awe at this hostile effervescent moth that is attached to a scorpion as it rips us to shreds over and over again.    \n\nEach multiplayer session of Nightreign begins in the roundtable hold that we have grown accustomed to as our base in the first game so that we can talk to all of our impeccably designed NPC support characters to select which nightfarer we want to play as, outfit our nightfarer with different stat bonuses called relics, and buy different relics and outfits from the shop.\n\nUnlike the first Elden Ring, in Nightreign you are locked to playing as one of 6 different starting classes: Wylder, the Guardian, the Recluse, IronEye, the Raider, and Executor (you unlock 2 more later: the duchess and the revenant).  Each of these starting classes roughly represents a different playstyle that you could’ve adopted in Elden Ring and has a passive ability, an ultimate ability, and a secondary ability.  Wylder is the closest champion to a kind of all rounder who is good in most situations and is effective with a bunch of different types of weapons.  His secondary ability is a hookshot that lets him rush across the battlefield into enemies and his primary ability  sets off a huge explosion near him that stuns enemies.  The Guardian who is a humanoid eagle is more similar to a tank character who is effective with shields.  The Recluse is adept at using magic spells and the IronEye starts each round with a bow and is the best at using bows.    \n\nOnce you have selected one of these champions, its time to group up with 2 of your friends or get matched with 2 strangers online, select the boss that you want to fight and then enter the match.  Every Elden Ring Nightreign run consists of 3 in game days.  The first day begins with your team of 3 dropping at a random position on a Fortnite-size island.  This island is dotted with various locations that contain mini-bosses your team can kill for loot, churches that give you an extra flask use, and other objectives that are designed to give your character souls for leveling up and equipment to upgrade your character.    \n\nNot long after your boots have hit the ground, the Fortnite-esque swirling blue storm begins to close in on the island, so there is always a very quick pace to Nightreign that is not present in a typical From Software soulslike game.  You have to pull up your map, zoom in on your position, find where you want to go and rush off there.  Then, when you arrive and defeat a mini-boss, you have to look through the different loot options that the boss dropped and decide which one you want to use for your character before zooming off to your next destination.    \n\nIt is here that the friction between From Software’s souls formulae and a round based structure lies.  Nightreign possesses all of the numerous diverse items and build paths that make Elden Ring feel so open ended and freeform and it is extremely fun to look through all the equipment options that all have different attack animations and stat bonuses that greatly impact how your nightfarer plays, but, because the ultra lethal storm is closing in and you need to collect as many upgrades from defeated bosses as possible to defeat the unforgiving final bosses in each run, you don’t really get to bask in all the different nuanced and complex options that the game presents to you when you are building your character.    \n\nThere were many times where I was contemplating a particularly difficult decision between two epic items that I had just looted and ended up trapped underground in the mines to be devoured by the storm.  Chasing my teammates around the map in order to complete objectives, I often felt like a boomer yelling at them to not run so fast and slow down and wait for me!  \n\nStill, this friction is not insurmountable and after enough runs you begin to learn the best items for your nightfarer and you begin to learn your way around once you have seen a location enough times. After leveling up your character on the first day of a run and the storm reaches the center of the island, a harder boss fight begins and you and your team need to defeat that boss in order for dawn to arrive and herald the start of the next day.  On the third day, your team must fight the boss that you selected at the start of the run.  All of these boss fights are what you have come to expect from From Software, filled with elaborate animations and gorgeous effects and brutal difficulty.  Some bosses in the game are even directly reused from previous Dark Souls games.\n\nProbably after several matches, you will emerge victorious over one of these monstrosities and on your list of bosses to choose from a giant slash will cover the boss you defeated.  Also after every match you will randomly receive a bunch of relics which are stat and ability bonuses that you can attach to each of your nightfarers in the roundtable hold to further customize their builds.\n\nAfter all the bosses in the game are defeated, it is possible to select the nightlord as the boss of your next match. On our fourth attempt, my friends  that I have been playing Nightreign with and I managed to defeat the Nightlord.  I was playing as the Duchess and I will say it was really the first time playing a From Software game where I truly felt like I understood everything that was going on.  I perfectly dodged all of the Nightlords attacks as its health was falling lower and lower.  My friend Brian who was playing IronEye fired his ultimate as my friend Danny who was playing Raider pummeled the Nightlord with a two handed mace.  The Duchess’ secondary skill replays a bunch of damage in the same area over again and I used that to do an unnecessary amount of damage that brought the Nightlord down.  Nailbiting encounters like these are what makes From Software games so special and Elden Ring: Nightfarers successfully brings that to a whole new genre for the first time.",
  platforms: ["Xbox One", "Xbox Series X/S", "PC", "PlayStation 4", "PlayStation 5"],
  genre: "Soulslike",
  releaseDate: new Date('2025-05-30'),
  imageUrls: []
})
  .then(result => {
    if (result) {
      console.log('Review updated with new release date and genre');
    } else {
      console.log('Failed to update review');
    }
  });

// Export the function for use in other files
export default updateReview;
