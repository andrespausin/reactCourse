export const SearchBar = () => {
    return (
        <>
            <div className="search-container">
                <input type="text" placeholder="Buscar gifs" />
                <button>Buscar</button>
            </div>

            {/* Busquedas previas */}
            <div className="previous-searches">
                <h2>Busquedas anteriores</h2>
                <ul className="previous-searches-list">
                    <li>Gatos</li>
                    <li>Perros</li>
                    <li>Memes</li>
                </ul>
            </div>
        </>
    )
}
