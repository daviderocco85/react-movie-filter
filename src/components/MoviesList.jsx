export const MoviesList = props => {
    return (
        <ul>
            {props.filteredMovies.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
            ))}
        </ul>);
};