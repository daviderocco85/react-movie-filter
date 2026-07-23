export const FilterGenreMovie = props => {
    return (
        <select
            value={props.genreFilter}
            onChange={props.onChange}>
            <option value="">Tutti i generi</option>
            <option value="Azione">Azione</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Romantico">Romantico</option>
            <option value="Thriller">Thriller</option>
        </select>
    );
};

<FilterGenreMovie
    value={genreFilter}
    onChange={handleFilterGenre}
/>

const handleFilterGenre = (genre) => {
    setGenreFilter(genre.target.value);
};
