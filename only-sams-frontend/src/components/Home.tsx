import React from 'react';
import './style/Home.css';
import Navbar from './Navbar';

const Home: React.FC = () => {
  const topGames2025 = [
    {
      id: 1,
      title: "Elden Ring: Shadow of the Erdtree",
      developer: "FromSoftware",
      releaseDate: "February 2025",
      description: "The highly anticipated expansion to the award-winning Elden Ring, taking players to new realms of the Lands Between."
    },
    {
      id: 2,
      title: "Starfield: Shattered Space",
      developer: "Bethesda Game Studios",
      releaseDate: "March 2025",
      description: "The first major expansion for Starfield, introducing new planets, factions, and storylines to the universe."
    },
    {
      id: 3,
      title: "The Legend of Zelda: Echoes of Wisdom",
      developer: "Nintendo",
      releaseDate: "May 2025",
      description: "A brand new Zelda adventure focusing on Princess Zelda as the playable protagonist."
    },
    {
      id: 4,
      title: "Cyberpunk 2077: Chrome Dynasty",
      developer: "CD Projekt Red",
      releaseDate: "June 2025",
      description: "A standalone expansion to Cyberpunk 2077, set in a new district of Night City."
    },
    {
      id: 5,
      title: "Mass Effect: Nexus",
      developer: "BioWare",
      releaseDate: "August 2025",
      description: "The long-awaited return to the Mass Effect universe, bridging the original trilogy with a new saga."
    },
    {
      id: 6,
      title: "God of War: Ragnarok - Aftermath",
      developer: "Santa Monica Studio",
      releaseDate: "September 2025",
      description: "A continuation of Kratos and Atreus's journey following the events of Ragnarok."
    },
    {
      id: 7,
      title: "Horizon: New Dawn",
      developer: "Guerrilla Games",
      releaseDate: "October 2025",
      description: "The third installment in the Horizon series, taking Aloy to unexplored territories."
    },
    {
      id: 8,
      title: "Bioshock: Isolation",
      developer: "Cloud Chamber",
      releaseDate: "October 2025",
      description: "A new entry in the Bioshock franchise, exploring themes of isolation and identity in a new dystopian setting."
    },
    {
      id: 9,
      title: "Final Fantasy XVI: Realm of Embers",
      developer: "Square Enix",
      releaseDate: "November 2025",
      description: "An expansion to Final Fantasy XVI, continuing the epic saga of Valisthea."
    },
    {
      id: 10,
      title: "Metroid Prime 4: Echoes of the Void",
      developer: "Retro Studios",
      releaseDate: "December 2025",
      description: "The long-anticipated fourth installment in the Metroid Prime series, following Samus Aran on a new interstellar adventure."
    }
  ];

  return (
    <div className="home-container">
      <Navbar />
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
                  <p className="game-description">{game.description}</p>
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