// MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, id }) => {
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <Link to={`/movie/${id}`}>View Info</Link>
    </div>
  );
};

export default MovieCard;