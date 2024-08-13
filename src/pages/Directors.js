import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';

const Directors = () => {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/directors')
      .then(res => res.json())
      .then(data => setDirectors(data))
      .catch(error => console.error('Error fetching directors:', error));
  }, []);

  return (
    <div>
      <h1>Directors Page</h1>
      <main>
        {directors.map(director => (
          <article key={director.name}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </div>
  );
};

export default Directors;