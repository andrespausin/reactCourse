import { useState, useEffect } from "react";

interface SearchBarProps {
    placeholder?: string;
    onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = "Buscar Gif", onQuery }: SearchBarProps) => {
    const [searchTerm, setSearchTerm] = useState("");

    // Debounce implementation
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onQuery(searchTerm);
        }, 700);

        return () => {
            clearTimeout(timeoutId);
        }

    }, [searchTerm, onQuery]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }

    const handleSearch = () => {
        onQuery(searchTerm);
        setSearchTerm("");
    }

    const handleSearchKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={handleChange}
                    onKeyDown={handleSearchKeyDown}
                />
                <button onClick={handleSearch}>Buscar</button>
            </div>
        </>
    )
}
