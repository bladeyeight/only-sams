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
  title: "Cabernet",
  type: "Review",
  rating: 7,
  content: "\n\nI have always liked vampires.  I think they are very cool.  I’m a huge fan of things like Buffy: The Vampire Slayer and Angel and, most recently, Sinners.  If I ran into a vampire and they gave me the choice of becoming a vampire, I would say “Let’s do it!” as long as it was the type of vampire universe where becoming a vampire meant that I stayed in control of my body except with the added powers of a vampire.  Sure I wouldn’t be able to go outside during the day, but that would be a small price to pay compared to the prospect of eternal life and super strength and turning into a bat. Indie studio Party for Introvert’s Cabernet delivers on that vampire power fantasy with excellent writing and novel gameplay, but stumbles in balancing these myriad gameplay systems together.    \n\nThe game begins right at the start of any self respecting vampire’s long life: a funeral — with an emotional monologue from our uncle that gives us some backstory on our charming protagonist, Dr. Elizaveta “Liza” Morozova, and allows us to customize some of her stats to our liking.  After a few easy choices, we are thrown right into the action as Liza wakes up in the locked dingy basement of an appropriately gothic mansion in 1900’s Eastern Europe with no memories of how she got there.  Liza is able to negotiate her way beyond this locked door by placing herself in debt to some mysterious otherworldly force that brands her with a burn mark on her shoulder.    \n\nRight away, Party for Introverts demonstrates the aptitude for intrigue and pacing that makes living in Cabernet’s world such a delight.  What being let Liza out of the basement and what are the implications of this brand on Liza’s shoulder?  Things only become more interesting as Liza exits the basement into a ballroom crowded with fashionable party goers and she begins to uncover the tenants of the blue-blooded vampire secret society.   \n\nAs Liza understands more and more about her new station in life and her new vampire colleagues, it becomes apparent that also Party for Introverts gets everything that is so intoxicatingly exciting about being a vampire.  Ever present in the top left corner of the screen is a wine glass filled with cabernet that represents how long Liza has until she is forced to feed on the blood of a victim to survive.    \n\nIn order to feed, Liza has an array of fun powers at her disposal.  She can turn into a bat to quickly soar to new areas.  She can turn invisible to avoid detection, and she can hypnotize her victims with a lullaby that her mother used to sing to her as a child.  This last ability is particularly crucial, because it allows her to bite her victims while removing all memory of it from their minds.  The only limitation to Liza’s otherwise delightfully consummate potential is the fact that her ability to hypnotize only works if she has reached a certain relationship level with her quarry.    \n\nThis creates a very entertaining gameplay loop where you continually befriend new prey to lure them somewhere secluded in order to mesmerize and sink your teeth into their neck, all the while beneath the ever present threat of running out of cabernet in your glass and dying of hunger.  Fortunately, Liza is aided in this process by the fact that she is a doctor in her community.  This gives her the added opportunity of being alone with her patients to draw blood from them for both medical and dietary reasons.    \n\nSimilar to 2018’s Vampyr by Don’t Nod and Saber Interactive, the advantage of Liza’s profession also poses a moral quandary. As a doctor she visits her patients to keep them alive and healthy, but in her efforts to also sustain herself as a vampire, she may inadvertently end up killing them.  Each character that Liza meets besides being generally well written and developed also has a certain amount of blood you can drain from them before they die.  \n\nThis question of morality is gamified by Liza’s dual humanity and nihilism meters.  When Liza does something good like helping a patient get better, she gains humanity.  When she does something bad like draining them dry and stealing all their possessions, she gains nihilism points.  The benefit of accumulating these points are that certain dialogue actions are only selectable if Liza has the requisite level of nihilism or humanity.    \n\nFurther expanding upon the game’s light dose of RPG mechanics are Liza’s four stats in music, literature, science and knowledge of history and politics.  These function similarly to the morality points by unlocking certain dialogue options and actions based on whether Liza has acquired enough of the required stat.  She is able to increase her stats in the four areas by actively studying books from each field and by leveling up once she earns enough experience points.    \n\nAll these systems in Cabernet sound well and good but, unfortunately, as the game goes on and they are all combined together, they do not add up to be that engaging gameplay loop of balancing survival and morality that Party for Introverts clearly was aiming for.  Early on in the game that balance was alive and well when an unforeseen cabernet shortage on my part resulted in me being caught fang deep in someone by my victim’s wife.   But pretty soon, Liza unlocks the ability to go into the forest at any time and suck the blood of rabbits in order to satisfy her thirst.  Bafflingly, there is no downside to doing this and from that point onwards, whenever I was running low on blood, I just excused myself to the forest and drank to my hearts content.    \n\nFurthermore, the balance between good and evil morality points is designed to make the player carefully weigh their actions when posed with an important choice, but it is not as if doing bad actions harms your standing as a good person or vice versa.  If anything, I felt incentivized to just do a lot of both good and bad actions to acquire more good and evil points so more options were unlocked for me in any given situation.    \n\nUltimately though, despite these significant gameplay issues, I was driven to continue through Cabernet’s fairly lengthy 14 hour runtime simply because the game’s world, its story, and the story’s pacing are so well done.  Each time the gameplay let me down and I contemplated stopping, I would be hurled into some new thrilling situation where the well-being of a character that I cared about was at stake.  Not only is the story action-packed, it also has a lot to say about important topics like class relations, marriage, drug addiction, family, and nationalism.  Also, while the game’s choices don’t always have gameplay ramifications, they do affect the game’s story pretty substantially.  \n\nAt the end of the game, Cabernet has one of those final chapters where you can see what happened to every character as a result of your actions, and I felt assured that yes, indeed, my choices mattered.  I cared about them all and, even more, I cared about Liza.  My choices had left a mark upon her world, and her history, and upon me that I won’t soon forget.  Cabernet has some lows, but it succeeded in teaching me that there is no longer history and no longer EFFECT on history than the life of a vampire.",
  platforms: ["Xbox Series X/S", "PC", "PlayStation 5", "Nintendo Switch" ],
  genre: "Graphic Novel",
  releaseDate: new Date('2025-02-20'),
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
