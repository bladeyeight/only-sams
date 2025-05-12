import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style/Navbar.css';
import { apiGet } from '../utils/api';

interface Review {
  _id: string;
  title: string;
}

const Navbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Review[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim().length > 2) {
      try {
        const results = await apiGet<Review[]>(`reviews/search?q=${encodeURIComponent(value)}`);
        setSearchResults(results);
        setShowResults(true);
      } catch (error) {
        console.error('Error searching reviews:', error);
      }
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };
  
  const handleResultClick = (reviewId: string) => {
    setSearchTerm('');
    setShowResults(false);
    navigate(`/reviews/${reviewId}`);
  };
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      handleResultClick(searchResults[0]._id);
    }
  };
  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [navigate]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
        
        <div className="navbar-search">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search reviews..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
              onBlur={() => setTimeout(() => setShowResults(false), 200)}
              onFocus={() => searchResults.length > 0 && setShowResults(true)}
            />
            <button type="submit" className="search-button">
              <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>
          
          {showResults && searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map(review => (
                <div 
                  key={review._id} 
                  className="search-result-item"
                  onClick={() => handleResultClick(review._id)}
                >
                  {review.title}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Mobile menu button */}
        <button 
          className={`mobile-menu-button ${mobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/reviews">Reviews</Link>
          </li>
          <li className="navbar-item">
            <Link to="/editorials">Editorials</Link>
          </li>
          <li className="navbar-item">
            <Link to="/top-10">Top 10 Lists</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about">About Sam</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;