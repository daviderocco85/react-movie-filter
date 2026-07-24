import './MoviesList.css'
export const MoviesList = props => {
    return (

        <div className="movies-list-container">
            <ul>
                {props.filteredMovies.map((movie) => (
                    <li key={movie.id}>
                        <span className="movie-title">Titolo - {movie.title}</span>
                        <span className="movie-genre">Genere - {movie.genre}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};