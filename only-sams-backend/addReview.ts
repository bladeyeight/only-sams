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
  title: "Assassin's Creed Black Flag Resynced",
  type: "Review",
  rating: 7,
  content: "\n\nAs a whole, I have historically been kind of harsh on the Assassins Creed franchise.  I really enjoyed Assassins Creed 1 and 2 when they came out almost 20 years ago, because they were groundbreaking for the time and came out when Ubisoft was firing on all cylinders redefining the open world genre into what it is today.  But then Assassins Creed 3 came out and, in my opinion, it has been downhill ever since.  First, all the mystery surrounding the aliens that created the pieces of Eden that made the storyline intriguing was eradicated with the death of Desmond Miles in the 3rd game and then the stealth/par core gameplay that made the series distinct was given a backseat when they switched to an RPG format in Assassin’s Creed: Origins.  However, there has always been one anomaly in  my depressing opinion about the fall of Assassins Creed:  Assassins Creed IV Black Flag.  I never spent much time with that game when it came out, and people often talk about how it is their favorite game in the series.  But now, this has been rectified since Ubisoft has released a ground up remake of the fan favorite game this year with Assassins Creed Black Flag Resynced.  Now that I have rolled credits on it,  I can confidently say that Black Flag Resynced is the first Assassin’s Creed game in a long time that I actually enjoyed.  Black Flag’s main character Edward Kenway and it’s excellent nautical elements plus smart tweaks to the game’s combat and par core systems successfully help Assassin’s Creed IV rise above the rest of the entries in the series.\n\nI have played a lot of Assassin’s Creed games in my time, and, ever since Assassin’s Creed 3, it has been a strange experience.  During my first few hours with the game, my initial impressions are always great.  The graphics are always gorgeous depicting a huge, rich world dripping with historical authenticity, npcs going about their realistic daily routines, and tons of treasure chests and collectibles hiding tantalizingly just out of reach waiting to be uncovered.\n\nThen, as the dozens and dozens of hours threaten to go by, it slowly becomes apparent that the world’s size is a million miles long horizontally with absolutely no vertical depth.  The story driven introductory chapters give way to an endless checklist of templar assassinations.  There are a million npcs but the player never really interacts with them except as quest givers for repetitive copy pasted quests that are all about just stealthing around or killing the same enemies over and over. And all the treasure chests either just have gold or gear that ultimately only improves the player’s stats by a marginal amount.\n\nWhat finally drives the nail into the coffin for the majority of the franchise for me is that the stealth and the combat and par core, arguably the defining points of Assassin’s Creed, are similarly gilded.  I think Assassin’s Creed has the best LOOKING par core climbing I have ever seen in a video game, and it feels great when you are hopping on ledges across rooftops or climbing up a massive stone tower with each hand and foot fitting perfectly into the cracks between the bricks.  Unfortunately because it is so good at aligning the assassin’s limbs to all the footholds in the environment, it can be imprecise so you might accidentally veer off from where you want to go. Instead of pursuing an escaping villain across a roof, Ezio will frustratingly snap to jumping on top of a box like a stubborn cat or, even worse, leaping to his death to the ground below.\n\nMoving on to the stealth and combat: it’s completely unbalanced to the point where I would eventually just run into every combat encounter without even trying to hide.  Your so called “assassin” protagonist with just a few gear upgrades is more comparable to an unkillable juggernaut.  You could spend the time hiding in bushes to slowly make your way to your target or you can use a gun to simply shoot them from a rooftop above without even getting your hands dirty.  \n\nNow, it might seem that I have spent most of this “positive” review so far complaining about Assassin’s Creed, but I feel like it is important for me to do so because to a much smaller extent all of these frustrations are still present in Assassins Creed Black Flag Resynced.  What makes it an actually good game is all the significant ways that it makes these annoyances less of a deal breaker.  \n\nThe biggest remedial move is the addition of your pirate ship: The Jackdaw.  You know all of the problems with our core gameplay loop as an assassin?  Well guess what you aren’t an assassin in this game.  You are a pirate!  The cities in Assassin’s Creed Black Flag are more comparable to small villages compared to the urban landscape of Assassin Creed 2’s Italy.  You basically only spend half the game climbing and killing in Assassin Creed IVs cities and you spend the other half dealing with Black Flag’s more rewarding ship combat.  \n\nSailing and shooting aboard the Jackdaw is a delight.  Even if you happen to be sailing around aimlessly, the undulating frothy waves beneath the fully rendered deck of your ship with the whole crew bustling about their duties can be mesmerizing to watch.\n\nWhen the cannon balls start flying, things get even more interesting.  The Jackdaw has numerous weapons for you to take advantage of.  Besides the broadsides that erupt when you fire to the right or left of your ship, you can configure cannons fired from the front of the ship to use chainshot, tearing into the enemy’s sails.  Firing from the back of the ship drops explosive barrels into the water.  You can also use the right bumper to fire the ship’s swivel cannon which can ignite those barrels in the water or hit weak points exposed by your cannon fire in the opposing ship’s hull.  When the Jackdaw is about to be hit by cannons, you can also yell for your crew to get down which lessens the damage your ship receives.\n\nAll of these elements come together in a way that makes you feel like Master and Commander in a naval battle.  Ships maneuver around each other trying to get an angle with which to splinter their opponents hull.  When a rival vessel takes enough damage, it opens them up to being boarded by you and your crew.  It feels great to rope in an enemy ship, man the swivel cannon for a couple quick shots before leaping onto a rope and diving into onto the boarded ship.  After you damage enough of the victim’s crew, you can then choose to repair some of the Jackdaws hull or add the overrun ship to your fleet.  Because boarding a rival’s boat can repair your ship, naval battles with multiple ships can turn into a desperate ship boarding chain where you keep boarding ships in order to prolong your own  feeble life long enough to win the overall battle.\n\nIn addition to the combat at sea being enjoyable, the presence of the boat itself really elevates the overall progression above other games in the series. While a lot of the time hidden chests still only contain gold, that gold is used to permanently upgrade the Jackdaw in various ways as opposed to just making your assassin do slightly more damage.  In fact, pretty much every activity you undertake in Assassins Creed IV rewards you with gold and, since the naval combat is the best part of the game,  that makes every activity feel that much more important.\n\nWhile I do wonder if the reason I had so much fun with Assassin’s Creed  Black Flag Resynced is that it just avoids the normal Assassin’s Creed fare using warships, it does feel like the combat is in my favorite state the series has seen thus far.  Adding a parry to the mix does imbue the counter based combat of the series’ origins with a little more skill while still retaining its flashy finishing moves.  I also liked how it was possible to combo in a quick pistol shot or a kick to send enemies flying off cliffs.\n\nAnother positive element in Black Flag is the main character himself: Edward Kenway.  Like so much of the rest of the game, the best thing about Edward is that he really isn’t an assassin at all, but rather a pirate who steals an assassins gear at the very beginning.  Unlike Bayek in Origins, Edward isn’t motivated by revenge against the templars at all.  He is only motivated by money.  Thematically, the simplicity of this alignment with the general emphasis on freedom in a pirate’s carefree booty-driven lifestyle makes the whole story of Black Flag ring true, as Edward finds friendship and family in unlikely places along with his wealth.\n\nAssassin’s Creed Black Flag Resynced does a lot to emphasize the best parts of the franchise while distracting away from its lows, ever present as they may be.  One thing it did not fully address at the time of writing is its glitches. A few times I clipped into a wall during combat and I had to awkwardly wriggle my way out of it like I was wrestling my way out of Jell-O.  Even more heinous, I did experience a glitch that permanently prevented me from completing the side quest line that unlocks the templar armor for Edward to wear. Still, it should speak volumes that despite this and my general status as an Assassin’s Creed hater I still completed Assassin’s Creed Black Flag Resynced.  I haven’t been able to make it through an Assassin’s Creed game in years.  There is a lot of fun to be had with this newest entry and the good does outweigh the bad.",
  platforms: ["PC", "PlayStation 5", "Xbox Series"],
  genre: "Open World",
  releaseDate: new Date('2026-07-09'),
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
