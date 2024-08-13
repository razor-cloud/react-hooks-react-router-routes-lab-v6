import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:4000/movies'); // Ensure this URL is correct
        if (response.ok) {
          const data = await response.json();
          setMovies(data);
        } else {
          console.error('Failed to fetch movies');
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {movies.length === 0 ? (
        <p>No movies available</p>
      ) : (
        <div>
          {movies.map(movie => (
            <MovieCard key={movie.id} title={movie.title} id={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;