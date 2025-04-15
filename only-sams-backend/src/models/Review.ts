import mongoose, { Document, Schema } from 'mongoose';

// Define interface for Review document
export interface IReview extends Document {
  title: string;
  game: string;
  rating: number;
  content: string;
  platform: string;
  genre: string;
  releaseYear?: number;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Create schema
const reviewSchema = new Schema<IReview>({
  title: {
    type: String,
    required: true,
    trim: true
  },
  game: {
    type: String,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 10
  },
  content: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: true,
    trim: true
  },
  genre: {
    type: String,
    required: true,
    trim: true
  },
  releaseYear: {
    type: Number
  },
  imageUrl: {
    type: String
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

// Export model
export default mongoose.model<IReview>('Review', reviewSchema);
