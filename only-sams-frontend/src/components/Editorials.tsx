import React, { useState, useEffect } from 'react';
import { apiGet } from '../utils/api';
import './style/Editorials.css';

interface Editorial {
  _id: string;
  title: string;
  content: string;
  genre: string;
  imageUrls?: string[];
  createdAt: string;
  updatedAt: string;
}

const Editorials: React.FC = () => {
  const [editorials, setEditorials] = useState<Editorial[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEditorials = async () => {
      try {
        // Use the API utility to fetch editorials
        const data = await apiGet<Editorial[]>('reviews/editorials');
        setEditorials(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch editorials. Please try again later.');
        setLoading(false);
        console.error('Error fetching editorials:', err);
      }
    };

    fetchEditorials();
  }, []);

  if (loading) {
    return <div className="editorials-loading">Loading editorials...</div>;
  }

  if (error) {
    return <div className="editorials-error">{error}</div>;
  }

  return (
    <div className="editorials-container">
      <h1 className="editorials-header">Editorials</h1>
      
      {editorials.length === 0 ? (
        <p className="no-editorials">No editorials available yet.</p>
      ) : (
        <div className="editorials-table-container">
          <table className="editorials-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Date Published</th>
              </tr>
            </thead>
            <tbody>
              {editorials.map((editorial) => (
                <tr key={editorial._id}>
                  <td>{editorial.title}</td>
                  <td>{editorial.genre}</td>
                  <td>{new Date(editorial.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Editorials;