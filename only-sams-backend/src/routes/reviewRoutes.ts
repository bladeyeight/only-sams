import express, { Request, Response, Router } from 'express';
import Review, { IReview } from '../models/Review';

const router: Router = express.Router();

// Get all reviews
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const reviews: IReview[] = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// Get all game reviews (type = 'Review')
router.get('/reviews', async (req: Request, res: Response): Promise<void> => {
  try {
    const reviews: IReview[] = await Review.find({ type: 'Review' }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// Get all editorials (type = 'editorial')
router.get('/editorials', async (req: Request, res: Response): Promise<void> => {
  try {
    const editorials: IReview[] = await Review.find({ type: 'editorial' }).sort({ createdAt: -1 });
    res.json(editorials);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// Get the most recently added review
router.get('/latest', async (req: Request, res: Response): Promise<void> => {
  try {
    const latestReview: IReview | null = await Review.findOne({ type: 'Review' })
      .sort({ createdAt: -1 })
      .limit(1);
      
    if (!latestReview) {
      res.status(404).json({ message: 'No reviews found' });
      return;
    }
    
    res.json(latestReview);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// Search reviews by title
router.get('/search', async (req: Request, res: Response): Promise<void> => {
  try {
    const query = req.query.q as string;
    
    if (!query) {
      res.status(400).json({ message: 'Search query is required' });
      return;
    }
    
    // Create a case-insensitive regex for the search
    const searchRegex = new RegExp(query, 'i');
    
    // Find reviews where title matches the search query
    const reviews: IReview[] = await Review.find({ 
      title: searchRegex,
      type: 'Review'
    }).sort({ createdAt: -1 });
    
    res.json(reviews);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single review
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const review: IReview | null = await Review.findById(req.params.id);
    if (!review) {
      res.status(404).json({ message: 'Review not found' });
      return;
    }
    res.json(review);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// Create a review
router.post('/', async (req: Request, res: Response): Promise<void> => {
  const review = new Review({
    title: req.body.title,
    type: req.body.type,
    rating: req.body.rating,
    content: req.body.content,
    platforms: req.body.platforms,
    genre: req.body.genre,
    releaseDate: req.body.releaseDate,
    imageUrls: req.body.imageUrls
  });

  try {
    const newReview: IReview = await review.save();
    res.status(201).json(newReview);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

// Update a review
router.patch('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const review: IReview | null = await Review.findById(req.params.id);
    if (!review) {
      res.status(404).json({ message: 'Review not found' });
      return;
    }

    // Update fields that are present in the request
    if (req.body.title) review.title = req.body.title;
    if (req.body.type) review.type = req.body.type;
    if (req.body.rating) review.rating = req.body.rating;
    if (req.body.content) review.content = req.body.content;
    if (req.body.platforms) review.platforms = req.body.platforms;
    if (req.body.genre) review.genre = req.body.genre;
    if (req.body.releaseDate) review.releaseDate = req.body.releaseDate;
    if (req.body.imageUrls) review.imageUrls = req.body.imageUrls;
    
    review.updatedAt = new Date();

    const updatedReview: IReview = await review.save();
    res.json(updatedReview);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a review
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const review: IReview | null = await Review.findById(req.params.id);
    if (!review) {
      res.status(404).json({ message: 'Review not found' });
      return;
    }
    
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: 'Review deleted' });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
