import { useState } from "react";

interface PreviousSearchesProps {
    searches?: string[];
    onSearchClicked?: (search: string) => void;
}

export const PreviousSearches = ({ searches = ["Cesar", "Pausin"], onSearchClicked }: PreviousSearchesProps) => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        return setCount(count + 1)
    }

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
            {/* Solo para la parte practica del curso */}
            <button onClick={handleClick}>+ 1</button>
            <span data-testid='contador'>Contador: {count}</span>
        </>
    )
}
