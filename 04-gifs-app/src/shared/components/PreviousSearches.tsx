interface PreviousSearchesProps {
    previousSearches?: string[];
    onSearchClicked?: (search: string) => void;
}

export const PreviousSearches = ({ previousSearches = ["Cesar", "Pausin"], onSearchClicked }: PreviousSearchesProps) => {
    return (
        <>
            {/* Busquedas previas */}
            <div className="previous-searches">
                <h2>Busquedas anteriores</h2>
                <ul className="previous-searches-list">
                    {previousSearches.map((search) => {
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
