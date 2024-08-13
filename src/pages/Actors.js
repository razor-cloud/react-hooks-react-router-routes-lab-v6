import { useEffect, useState } from "react";
import NavBar from '../components/NavBar'; // Ensure NavBar is correctly imported

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await fetch('http://localhost:4000/actors');

        const data = await response.json();
        setActors(data);
      } catch (error) {
        console.error('Error fetching actors:', error); // Handle errors
      }
    };

    fetchActors();
  }, []);

  return (
    <>
      <header>
        <h1>Actors Page</h1>
      </header>
      <main>{
          actors.map((actor) => (
            <article key={actor.id}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </article>
          ))
        }
      </main>
    </>
  );
}

export default Actors;