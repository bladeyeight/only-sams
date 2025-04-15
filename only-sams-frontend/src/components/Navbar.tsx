import React from 'react';
import './style/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <div className="logo-circle">
              <div className="logo-content">
                <span className="logo-text">o-s</span>
                <span className="logo-smile">)</span>
              </div>
            </div>
          </a>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/reviews">Reviews</a>
          </li>
          <li className="navbar-item">
            <a href="/editorials">Editorials</a>
          </li>
          <li className="navbar-item">
            <a href="/top-10">Top 10 Lists</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;