import mongoose, { Document, Schema } from 'mongoose';

// Define interface for individual game entry in top 10 list
export interface IGameEntry {
  rank: number;
  title: string;
  developer: string;
  releaseDate: Date;
}

// Define interface for Top10List document
export interface ITop10List extends Document {
  title: string;
  description?: string;
  games: IGameEntry[];
  createdAt: Date;
  updatedAt: Date;
}

// Create schema for game entry
const gameEntrySchema = new Schema<IGameEntry>({
  rank: {
    type: Number,
    required: true,
    min: 1,
    max: 10
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  developer: {
    type: String,
    required: true,
    trim: true
  },
  releaseDate: {
    type: Date,
    required: true
  }
});

// Create schema for Top10List
const top10ListSchema = new Schema<ITop10List>({
  title: {
    type: String,
    required: true,
    trim: true
  },
  games: {
    type: [gameEntrySchema],
    required: true,
    validate: [
      {
        validator: (games: IGameEntry[]) => games.length === 10,
        message: 'Top 10 list must contain exactly 10 games'
      },
      {
        validator: (games: IGameEntry[]) => {
          const ranks = games.map(game => game.rank);
          const uniqueRanks = new Set(ranks);
          return uniqueRanks.size === 10 && 
                 Math.min(...ranks) === 1 && 
                 Math.max(...ranks) === 10;
        },
        message: 'Games must have unique ranks from 1 to 10'
      }
    ]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Add pre-save middleware to update updatedAt
top10ListSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Export model
export default mongoose.model<ITop10List>('Top10List', top10ListSchema);
