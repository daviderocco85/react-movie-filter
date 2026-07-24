import './NavbarMovies.css';

export const NavbarMovies = props => {
    return (
        <div className="navbar-inline">

            <h1>La mia lista di Film</h1>

            <div className="navbar-filter-box-inline">
                <input
                    type="text"
                    placeholder="Filtra i film per titolo"
                    value={props.titleFilter}
                    onChange={props.onTitleChange}
                />
            </div>

            <div className="navbar-filter-box-inline">
                <label>Filtra i film per genere</label>
                <select
                    value={props.genreFilter}
                    onChange={props.onGenreChange}
                >
                    <option value="">Tutti i generi</option>
                    <option value="Azione">Azione</option>
                    <option value="Fantascienza">Fantascienza</option>
                    <option value="Romantico">Romantico</option>
                    <option value="Thriller">Thriller</option>
                </select>
            </div>

        </div>
    );
};
