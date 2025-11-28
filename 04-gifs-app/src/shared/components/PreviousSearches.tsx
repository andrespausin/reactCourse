interface PreviousSearchesProps {
    searches?: string[];
    onSearchClicked?: (search: string) => void;
}

export const PreviousSearches = ({ searches = ["Cesar", "Pausin"], onSearchClicked }: PreviousSearchesProps) => {

    return (
        <>
            {/* Busquedas previas */}
            <div className="previous-searches">
                <h2>Busquedas anteriores</h2>
                <ul className="previous-searches-list">
                    {searches.map((search) => {
                        return (
                            <li key={search} onClick={() => onSearchClicked?.(search)}>
                                {search}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
