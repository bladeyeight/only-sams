import React from 'react';
import { Link } from 'react-router-dom';
import './style/Top10.css';

const Top10: React.FC = () => {
  const topGamesAllTime = [
    {
      id: 1,
      title: "Zelda: Breath of the Wild, Zelda: Tears of the Kingdom, Zelda: Ocarina of Time",
      developer: "Nintendo",
      releaseDate: "March 3, 2017; March 12, 2023; Nov 21, 1998",
      reviewId: "65f0c8f2a3b4c5d6e7f8a9b0" // Hardcoded ObjectId for this game's review
    },
    {
      id: 2,
      title: "Xcom 2",
      developer: "Firaxis Games",
      releaseDate: "February 5, 2016",
      reviewId: "65f0c903b4c5d6e7f8a9b0c1" // Hardcoded ObjectId for this game's review
    },
    {
      id: 3,
      title: "Baldurs Gate 3",
      developer: "Larian Studios",
      releaseDate: "August 3, 2023",
      reviewId: "65f0c914c5d6e7f8a9b0c1d2" // Hardcoded ObjectId for this game's review
    },
    {
      id: 4,
      title: "Resident Evil 2 Remake",
      developer: "Capcom",
      releaseDate: "January 25, 2019",
      reviewId: "65f0c925d6e7f8a9b0c1d2e3" // Hardcoded ObjectId for this game's review
    },
    {
      id: 5,
      title: "Northgard",
      developer: "Shiro Games",
      releaseDate: "March 7, 2018",
      reviewId: "65f0c936e7f8a9b0c1d2e3f4" // Hardcoded ObjectId for this game's review
    },
    {
      id: 6,
      title: "Into the Breach",
      developer: "Subset Games",
      releaseDate: "February 27, 2018",
      reviewId: "65f0c947f8a9b0c1d2e3f4a5" // Hardcoded ObjectId for this game's review
    },
    {
      id: 7,
      title: "Witcher 3",
      developer: "CD Projekt",
      releaseDate: "May 18, 2015",
      reviewId: "65f0c958a9b0c1d2e3f4a5b6" // Hardcoded ObjectId for this game's review
    },
    {
      id: 8,
      title: "Half-Life",
      developer: "Valve",
      releaseDate: "November 19, 1998",
      reviewId: "65f0c969b0c1d2e3f4a5b6c7" // Hardcoded ObjectId for this game's review
    },
    {
      id: 9,
      title: "Soma",
      developer: "Frictional Games",
      releaseDate: "September 22, 2015",
      reviewId: "65f0c970c1d2e3f4a5b6c7d8" // Hardcoded ObjectId for this game's review
    },
    {
      id: 10,
      title: "Prince of Persia: Lost Crown",
      developer: "Ubisoft Montpellier",
      releaseDate: "January 18, 2024",
      reviewId: "65f0c981d2e3f4a5b6c7d8e9" // Hardcoded ObjectId for this game's review
    }
  ];

  return (
    <div className="top10-container">
      <div className="top10-content">       
        <div className="top-games-section">
          <h2>My Top 10 Games of All Time</h2>
          <div className="games-list">
            {topGamesAllTime.map(game => (
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

export default Top10;
