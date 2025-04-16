import React, { useState, useEffect } from 'react';
import './style/Reviews.css';

interface Review {
  _id: string;
  title: string;
  rating: number;
  content: string;
  platforms: string[];
  genre: string;
  releaseYear?: number;
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
        const response = await fetch('/api/reviews/reviews');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
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
                <th>Rating</th>
                <th>Genre</th>
                <th>Platforms</th>
                <th>Release Year</th>
                <th>Date Published</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review._id}>
                  <td>{review.title}</td>
                  <td>{review.rating}/10</td>
                  <td>{review.genre}</td>
                  <td>{review.platforms.join(', ')}</td>
                  <td>{review.releaseYear || 'N/A'}</td>
                  <td>{new Date(review.createdAt).toLocaleDateString()}</td>
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