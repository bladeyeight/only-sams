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
      title: "Atomfall",
      developer: "Rebellion Developments",
      releaseDate: "March 27, 2025",
      reviewId: "6807ae9fb72d175f0c4a6165" // Hardcoded ObjectId for this game's review
    },
    {
      id: 2,
      title: "Blade Chimera",
      developer: "Team Ladybug",
      releaseDate: "January 16, 2025",
      reviewId: "68220b014505828405783563" // Hardcoded ObjectId for this game's review
    },
    {
      id: 3,
      title: "The Elder Scrolls IV: Oblivion Remastered",
      developer: "Bethesda Game Studios, Virtuos",
      releaseDate: "April 22, 2025",
      reviewId: "681b7b2c73093a8e85a73af9" // Hardcoded ObjectId for this game's review
    },
    {
      id: 4,
      title: "South of Midnight",
      developer: "Compulsion Games",
      releaseDate: "April 8, 2025",
      reviewId: "681b7b2c73093a8e85a73af9" // Hardcoded ObjectId for this game's review
    },
    {
      id: 5,
      title: "Avowed",
      developer: "Obsidian Entertainment",
      releaseDate: "February 13, 2025",
      reviewId: "68220faaefc19dc5eb8f8d37" // Hardcoded ObjectId for this game's review
    },
    {
      id: 6,
      title: "Citizen Sleeper 2: Starward Vector",
      developer: "Jump Over The Age",
      releaseDate: "January 31, 2025",
      reviewId: "68221a6199f049d81edc570c" // Hardcoded ObjectId for this game's review
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzw8H75F9xJrs2hUfSqNZstyQRrf_LfKwaT1OXOXEUilx6-1svA&s=10&ec=72940544" 
              alt="Currently Playing Game" 
              className="featured-image" 
            />
            <div className="featured-title">Cabernet</div>
          </div>
          
          <Link to={latestReview ? `/reviews/${latestReview._id}` : '#'} className="featured-game-card-link">
            <div className="featured-game-card">
              <div className="featured-label">Recently Added:</div>
              <img 
                src={latestReview && latestReview.imageUrls && latestReview.imageUrls.length > 0 
                  ? latestReview.imageUrls[0] 
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP1UuvEuWWkGmvqsA53QVhSYP3DvTUwYJSg4N0WZkP3ze3aDyShg&s=10&ec=72940544"} 
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