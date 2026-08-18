export function SearchBar({
  city,
  type,
  searchedCity,
  searchedType,
  onChangeCity,
  onChangeType,
  onSearch,
  onClear,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    onSearch();
  }

  return (
    <>
      <form className="search-section" onSubmit={handleSubmit}>
        {/* INPUT CIUDAD */}
        <label>
          Ciudad
          <span className="city-input-wrapper">
            <input
              type="text"
              placeholder="Santiago, Chile"
              value={city}
              onChange={(event) => onChangeCity(event.target.value)}
            />

            {(city || searchedCity) && (
              <button
                className="clear-city-button"
                type="button"
                onClick={onClear}
              >
                x
              </button>
            )}
          </span>
        </label>

        {/* INPUT TIPO */}
        <label>
          <span className="city-input-wrapper">
            Tipo
            <input
              type="text"
              placeholder="Apartamento"
              value={type}
              onChange={(event) => onChangeType(event.target.value)}
            />
            {(type || searchedType) && (
              <button
                className="clear-city-button"
                type="button"
                onClick={onClear}
              >
                x
              </button>
            )}
          </span>
        </label>

        {/* INPUT HUÉSPEDES */}
        <label>
          Huéspedes
          <input type="number" placeholder="2" />
        </label>

        {/* BOTÓN GENERAL */}
        <button type="submit">Buscar</button>
      </form>

      {/* INFORMACIÓN DE LA BÚSQUEDA */}
      <p className="current-search">
        Resultados de búsqueda:{" "}
        {searchedCity || searchedType ? (
          <strong>
            {searchedCity && `Ciudad: ${searchedCity}`}
            {searchedCity && searchedType && " | "}
            {searchedType && `Tipo: ${searchedType}`}
          </strong>
        ) : (
          <strong>Sin búsqueda</strong>
        )}
      </p>
    </>
  );
}
