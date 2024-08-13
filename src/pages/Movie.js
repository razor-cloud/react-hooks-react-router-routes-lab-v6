import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null); // Correct state initialization

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`http://localhost:4000/movies/${id}`);
        const data = await response.json(); // Correct JSON parsing
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie:', error); // Handle errors
      }
    };

    fetchMovie();
  }, [id]);

  // Conditional rendering to handle cases where movie is null
  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      <div>
        {movie.genres && movie.genres.length > 0 ? ( // Check if genres exist and are non-empty
          movie.genres.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))
        ) : (
          <p>No genres available.</p> // Handle case where no genres are available
        )}
      </div>
    </>
  );
};

export default Movie;