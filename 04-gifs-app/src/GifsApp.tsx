import { useState } from "react"
import { GifContainer } from "./gifs/components/GifContainer"
import { mockGifs } from "./mock-data/data"
import { CustomHeader } from "./shared/components/CustomHeader"
import { PreviousSearches } from "./shared/components/PreviousSearches"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {
    const [previousSearches, setPreviousSearches] = useState<string[]>(["dragon ball"])

    const handleTermClicked = (term: string) => {
        console.log("Term clicked:", term)
    }

    const handleSearch = (searchTerm: string) => {
        // 2. El string ni empieza ni termina con espacios
        const search = searchTerm.trim().toLowerCase();

        // 1. El string no puede estar vacio
        if (search.trim() === "") return;


        // 3. No hay búsquedas repetidas y solo se guardan las últimas 8 búsquedas
        setPreviousSearches((prevSearches) => {
            if (prevSearches.includes(search)) {
                return prevSearches;
            }
            if (prevSearches.length >= 8) {
                return [search, ...prevSearches.slice(0, 7)];
            }
            return [search, ...prevSearches];
        });
    }

    return (
        <>
            {/* Custom Header */}
            <CustomHeader title="Gifs App" description="Descubre y comparte el gif perfecto" />

            {/* Search Bar y busquedas previas */}
            <SearchBar placeholder="Busca lo que + desees" onQuery={handleSearch} />

            <PreviousSearches previousSearches={previousSearches} onSearchClicked={handleTermClicked} />

            {/* Gifs */}
            <GifContainer gifs={mockGifs} />
        </>
    )
}
