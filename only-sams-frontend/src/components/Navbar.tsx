import React from 'react';
import { Link } from 'react-router-dom';
import './style/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <div className="logo-circle">
              <div className="logo-content">
                <span className="logo-text">o-s</span>
                <span className="logo-smile">)</span>
              </div>
            </div>
          </Link>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/reviews">Reviews</Link>
          </li>
          <li className="navbar-item">
            <Link to="/editorials">Editorials</Link>
          </li>
          <li className="navbar-item">
            <Link to="/top-10">Top 10 Lists</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;