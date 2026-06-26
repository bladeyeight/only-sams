import React, { useState, useEffect } from 'react';
import './style/Home.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { apiGet } from '../utils/api';

interface Review {
  _id: string;
  title: string;
  type: string;
  rating?: number;
  content: string;
  platforms?: string[];
  genre?: string;
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
      title: "007: First Light",
      developer: "IO Interactive",
      genre: "Action Adventure",
      releaseDate: "May 27, 2026",
      reviewId: "6a32e68ac9cb49dd3e65212b" // Hardcoded ObjectId for this game's review
    },
    {
      id: 4,
      title: "Mewgenics",
      developer: "Edmund McMillen & Tyler Glaiel",
      genre: "Roguelite",
      releaseDate: "February 10, 2026",
      reviewId: "6a173c65b39d70db98de6a69" // Hardcoded ObjectId for this game's review
    },
    {
      id: 5,
      title: "Death Howl",
      developer: "The Outer Zone",
      genre: "Deck Builder",
      releaseDate: "December 9, 2025",
      reviewId: "697b965a9f0e3f9210e2518d" // Hardcoded ObjectId for this game's review
    },
    {
      id: 6,
      title: "Mixtape",
      developer: "Beethoven & Dinosaur",
      genre: "Interactive Music Video",
      releaseDate: "May 7, 2026",
      reviewId: "6a06017e266ab33bd0e81c13" // Hardcoded ObjectId for this game's review
    },
    {
      id: 7,
      title: "Pragmata",
      developer: "Capcom",
      genre: "Shooter",
      releaseDate: "April 17, 2026",
      reviewId: "69f21d8ad59224353af34728" // Hardcoded ObjectId for this game's review
    },
    {
      id: 8,
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
            <div className="featured-title">Mina The Hollower</div>
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