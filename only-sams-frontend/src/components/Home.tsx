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
  const topGames2026 = [
    {
      id: 1,
      title: "Resident Evil Requiem",
      developer: "Capcom",
      genre: "Survival Horror",
      releaseDate: "February 27, 2026",
      reviewId: "69a84cf3d1f40d3955fa06e5" // Hardcoded ObjectId for this game's review
    },
    {
      id: 2,
      title: "Cairn",
      developer: "The Game Bakers",
      genre: "Climbing",
      releaseDate: "January 29, 2026",
      reviewId: "698b8845bf488a3c753905d5" // Hardcoded ObjectId for this game's review
    },
    {
      id: 3,
      title: "Death Howl",
      developer: "The Outer Zone",
      genre: "Deck Builder",
      releaseDate: "December 9, 2025",
      reviewId: "697b965a9f0e3f9210e2518d" // Hardcoded ObjectId for this game's review
    },
        {
      id: 4,
      title: "Pragmata",
      developer: "Capcom",
      genre: "Shooter",
      releaseDate: "April 17, 2026",
      reviewId: "69f21d8ad59224353af34728" // Hardcoded ObjectId for this game's review
    },
    {
      id: 5,
      title: "Mio: Memories in Orbit",
      developer: "Focus Entertainment",
      genre: "Metroidvania",
      releaseDate: "January 20, 2026",
      reviewId: "69811718fb9df5b7c1fc534e" // Hardcoded ObjectId for this game's review
    }
  ];

  const topGames2025 = [
        {
      id: 1,
      title: "Hades II",
      developer: "SuperGiant Games",
      genre: "Roguelite",
      releaseDate: "September 25, 2025",
      reviewId: "695c327374f0fe96f499c394" // Hardcoded ObjectId for this game's review
    },
    {
      id: 2,
      title: "Hollow Knight: Silksong",
      developer: "Team Cherry",
      genre: "Metroidvania",
      releaseDate: "September 4, 2025",
      reviewId: "68dc3dda64e92e2b26d5c6c6" // Hardcoded ObjectId for this game's review
    },
        {
      id: 3,
      title: "The Alters",
      developer: "11 Bit Studios",
      genre: "Base Building",
      releaseDate: "June 13, 2025",
      reviewId: "685d5574699ec890abe5cbea" // Hardcoded ObjectId for this game's review
    },
    {
      id: 4,
      title: "Blue Prince",
      developer: "Dogubomb",
      genre: "Puzzle",
      releaseDate: "April 10, 2025",
      reviewId: "68b7403c50fb3bcd5796ec85" // Hardcoded ObjectId for this game's review
    },
    {
      id: 5,
      title: "Atomfall",
      developer: "Rebellion Developments",
      genre: "Survival Horror",
      releaseDate: "March 27, 2025",
      reviewId: "6807ae9fb72d175f0c4a6165" // Hardcoded ObjectId for this game's review
    },
    {
      id: 6,
      title: "Blade Chimera",
      developer: "Team Ladybug",
      genre: "Metroidvania",
      releaseDate: "January 16, 2025",
      reviewId: "68220b014505828405783563" // Hardcoded ObjectId for this game's review
    },
    {
      id: 7,
      title: "Elden Ring: Nightreign",
      developer: "From Software",
      genre: "Soulslike",
      releaseDate: "May 30, 2025",
      reviewId: "688bb5c268f649b375208fd7" // Hardcoded ObjectId for this game's review
    },
    {
      id: 8,
      title: "Skin Deep",
      developer: "Blendo Studios",
      genre: "Immersive Sim",
      releaseDate: "April 30, 2025",
      reviewId: "6866c8a7041c5bcf54e19267" // Hardcoded ObjectId for this game's review
    },
    {
      id: 9,
      title: "Donkey Kong Bananza",
      developer: "Nintendo",
      genre: "Platformer",
      releaseDate: "July 17, 2025",
      reviewId: "68b8581055e04f87bc85f0a2" // Hardcoded ObjectId for this game's review
    },
    {
      id: 10,
      title: "Citizen Sleeper 2: Starward Vector",
      developer: "Jump Over The Age",
      genre: "Graphic Novel",
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
              src="data:image/jpeg;base64,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"
              alt="Currently Playing Game" 
              className="featured-image" 
            />
            <div className="featured-title">Mewgenics</div>
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
          <h2>My Top 10 Games of 2026</h2>
          <div className="games-list">
            {topGames2026.map(game => (
              <Link to={`/reviews/${game.reviewId}`} key={game.id} className="game-card-link">
                <div className="game-card">
                  <div className="game-rank">{game.id}</div>
                  <div className="game-info">
                    <h3>{game.title}</h3>
                    <p className="game-developer">Developer: {game.developer}</p>
                    <p className="game-genre">Genre: {game.genre}</p>
                    <p className="game-release">Release: {game.releaseDate}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
                    <p className="game-genre">Genre: {game.genre}</p>
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