import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiGet } from '../utils/api';
import './style/Reviews.css';

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

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Use the API utility to fetch reviews
        const data = await apiGet<Review[]>('reviews/reviews');
        setReviews(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch reviews. Please try again later.');
        setLoading(false);
        console.error('Error fetching reviews:', err);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <div className="reviews-loading">Loading reviews...</div>;
  }

  if (error) {
    return <div className="reviews-error">{error}</div>;
  }

  return (
    <div className="reviews-container">
      <h1 className="reviews-header">Game Reviews</h1>
      
      {reviews.length === 0 ? (
        <p className="no-reviews">No reviews available yet.</p>
      ) : (
        <div className="reviews-table-container">
          <table className="reviews-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Platforms</th>
                <th>Release Date</th>
                <th>Date Published</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review._id} className="review-row">
                  <td>
                    <Link to={`/reviews/${review._id}`} className="review-title-link">
                      {review.title}
                    </Link>
                  </td>
                  <td>{review.genre}</td>
                  <td>{review.platforms.join(', ')}</td>
                  <td>{review.releaseDate ? new Date(review.releaseDate).toLocaleDateString(undefined, { timeZone: 'UTC' }) : 'N/A'}</td>
                  <td>{new Date(review.createdAt).toLocaleDateString(undefined, { timeZone: 'UTC' })}</td>
                  <td><span className="review-rating">{review.rating}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Reviews;