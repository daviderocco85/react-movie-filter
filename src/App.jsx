import { useState, useEffect } from 'react';

import './App.css';

const movies = [
  { id: 1, title: 'Inception', genre: 'Fantascienza' },
  { id: 2, title: 'Il Padrino', genre: 'Thriller' },
  { id: 3, title: 'Titanic', genre: 'Romantico' },
  { id: 4, title: 'Batman', genre: 'Azione' },
  { id: 5, title: 'Interstellar', genre: 'Fantascienza' },
  { id: 6, title: 'Pulp Fiction', genre: 'Thriller' },
];


export const App = () => {
  const [genreFilter, setGenreFilter] = useState("");
  const [titleFilter, setTitleFilter] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    setFilteredMovies(
      movies
        .filter(movie =>
          genreFilter === ""
            ? true
            : movie.genre === genreFilter
        )
        .filter(movie =>
          titleFilter === ""
            ? true
            : movie.title.toLowerCase().includes(titleFilter.toLowerCase().trim())
        )
    );
  }, [genreFilter, titleFilter]);

  return (
    <>
      <div>
        <h1>La mia lista di Film</h1>
        <input type="text" placeholder='Filtra per titolo' value={titleFilter} onChange={e => setTitleFilter(e.target.value)} />
        <ul>
          {filteredMovies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
        <p>Scegli i film per genere</p>
        <select value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}>
          <option value="">Tutti i generi</option>
          <option value="Azione">Azione</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Romantico">Romantico</option>
          <option value="Thriller">Thriller</option>
        </select>

      </div>
    </>
  )
};


