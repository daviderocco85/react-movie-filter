import { useState, useEffect } from 'react';
import { FilterTitleMovie } from './components/FilterTitleMovie';
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
  const [moviesListUpdated, setMoviesListUpdated] = useState(movies);

  const [newMovie, setNewMovie] = useState({
    title: "",
    genre: ""
  });

  const movieToAdd = {
    id: moviesListUpdated.length + 1,
    title: newMovie.title.trim(),
    genre: newMovie.genre
  };

  const handleAddMovie = (e) => {
    e.preventDefault();

    setMoviesListUpdated(previousMovieList => [...previousMovieList, movieToAdd]);

    setNewMovie({ title: "", genre: "" });
  };

  const handleFilterTitle = (title) => {
    setTitleFilter(title.target.value);
  };




  useEffect(() => {
    setFilteredMovies(
      moviesListUpdated
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
  }, [genreFilter, titleFilter, moviesListUpdated]);

  return (
    <>
      <div>
        <h1>La mia lista di Film</h1>
        <FilterTitleMovie
          value={titleFilter}
          onChange={handleFilterTitle}
        />
        <ul>
          {filteredMovies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
        <p>Scegli i film per genere</p>
        <select value={genreFilter} onChange={(e => setGenreFilter(e.target.value))}>
          <option value="">Tutti i generi</option>
          <option value="Azione">Azione</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Romantico">Romantico</option>
          <option value="Thriller">Thriller</option>
        </select>
        <form onSubmit={handleAddMovie}>
          <h3>Aggiungi un nuovo film</h3>

          <input
            type="text"
            placeholder=" Inserisci il titolo"
            value={newMovie.title}
            onChange={(e) =>
              setNewMovie({ ...newMovie, title: e.target.value })
            }

            required
          />

          <select
            value={newMovie.genre}
            onChange={(e) =>
              setNewMovie({ ...newMovie, genre: e.target.value })
            }
            required
          >
            <option value="">Seleziona il genere</option>
            <option value="Azione">Azione</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Romantico">Romantico</option>
            <option value="Thriller">Thriller</option>
          </select>

          <button>Aggiungi Film</button>
        </form>

      </div>
    </>
  )
};


