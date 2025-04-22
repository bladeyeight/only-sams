import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './style/ReviewDetail.css';

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

const ReviewDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [review, setReview] = useState<Review | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
        const response = await fetch(`${apiUrl}/reviews/${id}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setReview(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch review. Please try again later.');
        setLoading(false);
        console.error('Error fetching review:', err);
      }
    };

    fetchReview();
  }, [id]);

  if (loading) {
    return <div className="review-detail-loading">Loading review...</div>;
  }

  if (error) {
    return <div className="review-detail-error">{error}</div>;
  }

  if (!review) {
    return <div className="review-detail-error">Review not found.</div>;
  }

  // Format the content with paragraphs
  const formattedContent = review.content.split('  ').map((paragraph, index) => (
    <p key={index}>{paragraph.trim()}</p>
  ));

  return (
    <div className="review-detail-container">
      <Link to="/reviews" className="back-button">← Back to Reviews</Link>
      
      <div className="review-detail-header">
        <h1 className="review-detail-title">{review.title}</h1>
        <div className="review-detail-meta">
          <span className="review-detail-genre">{review.genre}</span>
          <span className="review-detail-platforms">{review.platforms.join(', ')}</span>
          {review.releaseDate && (
            <span className="review-detail-release">
              Released: {new Date(review.releaseDate).toLocaleDateString()}
            </span>
          )}
        </div>
        <span className="review-detail-rating">{review.rating}</span>
      </div>

      {review.imageUrls && review.imageUrls.length > 0 && (
        <div className="review-detail-images">
          <img 
            src={review.imageUrls[0]} 
            alt={review.title} 
            className="review-detail-main-image" 
          />
        </div>
      )}

      <div className="review-detail-content">
        {formattedContent}
      </div>

      <div className="review-detail-footer">
        <p className="review-detail-date">
          Published: {new Date(review.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ReviewDetail;
