export const FilterTitleMovie = props => {
    return (
        <input
            type="text"
            placeholder='Filtra per titolo'
            value={props.titleFilter}
            onChange={props.onChange} />
    );
};