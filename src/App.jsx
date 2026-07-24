
import { useState, useEffect } from 'react';
import { NavbarMovies } from './components/NavbarMovies';
import { MoviesList } from './components/MoviesList';
import { AddNewMovieForm } from './components/AddNewMovieForm';




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



  const handleSubmit = (e) => {
    e.preventDefault();

    const movieToAdd = {
      id: moviesListUpdated.length + 1,
      title: newMovie.title.trim(),
      genre: newMovie.genre
    };
    setMoviesListUpdated(previousMovieList => [...previousMovieList, movieToAdd]);

    setNewMovie({ title: "", genre: "" });
  };

  const handleFilterTitle = (title) => {
    setTitleFilter(title.target.value);
  };

  const handleFilterGenre = (genre) => {
    setGenreFilter(genre.target.value);
  };

  const handleNewMovieChange = (e) => {
    setNewMovie(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
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
      <NavbarMovies
        titleFilter={titleFilter}
        genreFilter={genreFilter}
        onTitleChange={handleFilterTitle}
        onGenreChange={handleFilterGenre}
      />
      <MoviesList filteredMovies={filteredMovies} />
      <AddNewMovieForm
        newMovie={newMovie}
        onSubmit={handleSubmit}
        onChange={handleNewMovieChange}
      />

    </>
  )
};


