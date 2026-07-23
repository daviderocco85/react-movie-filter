export const AddNewMovieForm = props => {
    return (
        <form onSubmit={props.onSubmit}>
            <h3>Aggiungi un nuovo film</h3>

            <input
                name="title"
                type="text"
                placeholder=" Inserisci il titolo"
                value={props.newMovie.title}
                onChange={props.onChange}
                required
            />

            <select
                name="genre"
                value={props.newMovie.genre}
                onChange={props.onChange}
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
    );
};