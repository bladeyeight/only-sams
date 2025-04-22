import mongoose, { Document, Schema } from 'mongoose';

// Define interface for Review document
export interface IReview extends Document {
  title: string;
  type: string;
  rating: number;
  content: string;
  platforms: string[];
  genre: string;
  releaseDate?: Date;
  imageUrls?: string[];
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
  type: {
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
  platforms: {
    type: [String],
    required: true,
    validate: [(val: string[]) => val.length > 0, 'At least one platform is required']
  },
  genre: {
    type: String,
    required: true,
    trim: true
  },
  releaseDate: {
    type: Date
  },
  imageUrls: {
    type: [String],
    default: []
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
