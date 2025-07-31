import React, { useState, useEffect } from 'react';
import './style/Home.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { apiGet } from '../utils/api';

interface Review {
  _id: string;
  title: string;
  rating: number;
  content: string;
  platforms: string[];
  genre: string;
  releaseDate?: Date;
  imageUrls?: string[];
  createdAt: string;
  updatedAt: string;
}

const Home: React.FC = () => {
  const [latestReview, setLatestReview] = useState<Review | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchLatestReview = async () => {
      try {
        const data = await apiGet<Review>('reviews/latest');
        setLatestReview(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching latest review:', err);
        setError('Failed to fetch latest review');
        setLoading(false);
      }
    };
    
    fetchLatestReview();
  }, []);
  const topGames2025 = [
        {
      id: 1,
      title: "The Alters",
      developer: "11 Bit Studios",
      releaseDate: "June 13, 2025",
      reviewId: "685d5574699ec890abe5cbea" // Hardcoded ObjectId for this game's review
    },
    {
      id: 2,
      title: "Atomfall",
      developer: "Rebellion Developments",
      releaseDate: "March 27, 2025",
      reviewId: "6807ae9fb72d175f0c4a6165" // Hardcoded ObjectId for this game's review
    },
    {
      id: 3,
      title: "Blade Chimera",
      developer: "Team Ladybug",
      releaseDate: "January 16, 2025",
      reviewId: "68220b014505828405783563" // Hardcoded ObjectId for this game's review
    },
    {
      id: 4,
      title: "Elden Ring: Nightreign",
      developer: "From Software",
      releaseDate: "May 30, 2025",
      reviewId: "688bb5c268f649b375208fd7" // Hardcoded ObjectId for this game's review
    },
    {
      id: 5,
      title: "Skin Deep",
      developer: "Blendo Studios",
      releaseDate: "April 30, 2025",
      reviewId: "6866c8a7041c5bcf54e19267" // Hardcoded ObjectId for this game's review
    },
    {
      id: 6,
      title: "The Elder Scrolls IV: Oblivion Remastered",
      developer: "Bethesda Game Studios, Virtuos",
      releaseDate: "April 22, 2025",
      reviewId: "68261b092a8a2f45ca20dd46" // Hardcoded ObjectId for this game's review
    },
    {
      id: 7,
      title: "South of Midnight",
      developer: "Compulsion Games",
      releaseDate: "April 8, 2025",
      reviewId: "681b7b2c73093a8e85a73af9" // Hardcoded ObjectId for this game's review
    },
    {
      id: 8,
      title: "Avowed",
      developer: "Obsidian Entertainment",
      releaseDate: "February 13, 2025",
      reviewId: "68220faaefc19dc5eb8f8d37" // Hardcoded ObjectId for this game's review
    },
    {
      id: 9,
      title: "Citizen Sleeper 2: Starward Vector",
      developer: "Jump Over The Age",
      releaseDate: "January 31, 2025",
      reviewId: "68221a6199f049d81edc570c" // Hardcoded ObjectId for this game's review
    },
    {
      id: 10,
      title: "Doom: The Dark Ages",
      developer: "id Software",
      releaseDate: "May 15, 2025",
      reviewId: "6835fe17517eb05283393152" // Hardcoded ObjectId for this game's review
    }
  ];


  return (
    <div className="home-container">
      <div className="home-content">
        <div className="hero-section">
          <h1>Welcome to Only-Sams</h1>
          <p>Your source for honest game reviews and gaming content</p>
        </div>
        
        <div className="featured-games-container">
          <div className="featured-game-card">
            <div className="featured-label">Currently Playing:</div>
            <img 
              src="data:image/jpeg;base64,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" 
              alt="Currently Playing Game" 
              className="featured-image" 
            />
            <div className="featured-title">Blue Prince</div>
          </div>
          
          <Link to={latestReview ? `/reviews/${latestReview._id}` : '#'} className="featured-game-card-link">
            <div className="featured-game-card">
              <div className="featured-label">Recently Added:</div>
              <img 
                src={latestReview && latestReview.imageUrls && latestReview.imageUrls.length > 0 
                  ? latestReview.imageUrls[0] 
                  : "data:image/jpeg;base64,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"} 
                alt={latestReview ? latestReview.title : "Recently Added Game"} 
                className="featured-image" 
              />
              <div className="featured-title">{latestReview ? latestReview.title : "Loading..."}</div>
            </div>
          </Link>
        </div>
        
        <div className="top-games-section">
          <h2>My Top 10 Games of 2025</h2>
          <div className="games-list">
            {topGames2025.map(game => (
              <Link to={`/reviews/${game.reviewId}`} key={game.id} className="game-card-link">
                <div className="game-card">
                  <div className="game-rank">{game.id}</div>
                  <div className="game-info">
                    <h3>{game.title}</h3>
                    <p className="game-developer">Developer: {game.developer}</p>
                    <p className="game-release">Release: {game.releaseDate}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        

      </div>
    </div>
  );
};

export default Home;