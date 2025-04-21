import React from 'react';
import './style/Home.css';
import Navbar from './Navbar';

const Home: React.FC = () => {
  const topGames2025 = [
    {
      id: 1,
      title: "Atomfall",
      developer: "Rebellion Developments",
      releaseDate: "March 27, 2025"
    },
    {
      id: 2,
      title: "Blade Chimera",
      developer: "Team Ladybug",
      releaseDate: "January 15, 2025"
    },
    {
      id: 3,
      title: "South of Midnight",
      developer: "Compulsion Games",
      releaseDate: "April 3, 2025"
    },
    {
      id: 4,
      title: "Avowed",
      developer: "Obsidian Entertainment",
      releaseDate: "February 13, 2025"
    },
    {
      id: 5,
      title: "Citizen Sleeper 2: Starward Vector",
      developer: "Jump Over The Age",
      releaseDate: "January 31, 2025"
    }
  ];
  const topGamesAllTime = [
    {
      id: 1,
      title: "Zelda: Breath of the Wild, Zelda: Tears of the Kingdom, Zelda: Ocarina of Time",
      developer: "Nintendo",
      releaseDate: "March 3, 2017; March 12, 2023; Nov 21, 1998"
    },
    {
      id: 2,
      title: "Xcom 2",
      developer: "Firaxis Games",
      releaseDate: "February 5, 2016"
    },
    {
      id: 3,
      title: "Baldurs Gate 3",
      developer: "Larian Studios",
      releaseDate: "August 3, 2023"
    },
    {
      id: 4,
      title: "Resident Evil 2 Remake",
      developer: "Capcom",
      releaseDate: "January 25, 2019"
    },
    {
      id: 5,
      title: "Northgard",
      developer: "Shiro Games",
      releaseDate: "March 7, 2018"
    },
    {
      id: 6,
      title: "Into the Breach",
      developer: "Subset Games",
      releaseDate: "February 27, 2018"
    },
    {
      id: 7,
      title: "Witcher 3",
      developer: "CD Projekt",
      releaseDate: "May 18, 2015"
    },
    {
      id: 8,
      title: "Half-Life",
      developer: "Valve",
      releaseDate: "November 19, 1998"
    },
    {
      id: 9,
      title: "Soma",
      developer: "Frictional Games",
      releaseDate: "September 22, 2015"
    },
    {
      id: 10,
      title: "Prince of Persia: Lost Crown",
      developer: "Ubisoft Montpellier",
      releaseDate: "January 18, 2024"
    }
  ];

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="hero-section">
          <h1>Welcome to Only-Sams</h1>
          <p>Your source for honest game reviews and gaming content</p>
        </div>
        
        <div className="top-games-section">
          <h2>My Top 10 Games of 2025</h2>
          <div className="games-list">
            {topGames2025.map(game => (
              <div key={game.id} className="game-card">
                <div className="game-rank">{game.id}</div>
                <div className="game-info">
                  <h3>{game.title}</h3>
                  <p className="game-developer">Developer: {game.developer}</p>
                  <p className="game-release">Release: {game.releaseDate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;