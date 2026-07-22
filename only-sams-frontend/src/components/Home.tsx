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
    },
    {
      id: 9,
      title: "Assassin's Creed Black Flag Resynced",
      developer: "Ubisoft Singapore",
      genre: "Open World",
      releaseDate: "July 9, 2026",
      reviewId: "6a5fc8c5329e3c379a3a39fb" // Hardcoded ObjectId for this game's review
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
          <p>Your source for game reviews and gaming content</p>
        </div>
        
        <div className="featured-games-container">
          <div className="featured-game-card">
            <div className="featured-label">Currently Playing:</div>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQElXIDLgTp91TO96PfRzvC3uVSXaI4SOTria-yXpZxjQ&s=10"
              alt="Currently Playing Game" 
              className="featured-image" 
            />
            <div className="featured-title">Beast of Reincarnation</div>
          </div>
          
          <Link to={latestReview ? `/reviews/${latestReview._id}` : '#'} className="featured-game-card-link">
            <div className="featured-game-card">
              <div className="featured-label">Recently Added:</div>
              <img 
                src={latestReview && latestReview.imageUrls && latestReview.imageUrls.length > 0 
                  ? latestReview.imageUrls[0] 
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLcCt3IItN8EjlmH1rF7KcI32cnn_AiUK1gR1fwzNKmg&s=10"} 
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