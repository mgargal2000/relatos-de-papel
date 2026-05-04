function SearchBar({ value, onChange, totalResults }) {
  return (
    <div className="search-box">
      <div>
        <label htmlFor="search" className="search-label">
          Buscar por título
        </label>

        <input
          id="search"
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Ejemplo: biblioteca, mapa, cartas..."
          className="search-input"
        />
      </div>

      <span className="results-pill">{totalResults} resultado(s)</span>
    </div>
  );
}

export default SearchBar;