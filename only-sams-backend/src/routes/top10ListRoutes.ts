import express, { Request, Response, Router } from 'express';
import Top10List, { ITop10List } from '../models/Top10List';

const router: Router = express.Router();

// Get all top 10 lists (sorted by newest first)
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const top10Lists: ITop10List[] = await Top10List.find().sort({ createdAt: -1 });
    res.json(top10Lists);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single top 10 list by ID
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const top10List: ITop10List | null = await Top10List.findById(req.params.id);
    if (!top10List) {
      res.status(404).json({ message: 'Top 10 list not found' });
      return;
    }
    res.json(top10List);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new top 10 list
router.post('/', async (req: Request, res: Response): Promise<void> => {
  const top10List = new Top10List({
    title: req.body.title,
    games: req.body.games
  });

  try {
    const newTop10List: ITop10List = await top10List.save();
    res.status(201).json(newTop10List);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a top 10 list
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const top10List: ITop10List | null = await Top10List.findById(req.params.id);
    if (!top10List) {
      res.status(404).json({ message: 'Top 10 list not found' });
      return;
    }
    
    await Top10List.findByIdAndDelete(req.params.id);
    res.json({ message: 'Top 10 list deleted' });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
