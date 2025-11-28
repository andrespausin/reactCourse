import { GifList } from './gifs/components/GifContainer';
import { PreviousSearches } from './shared/components/PreviousSearches';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';

import { useGifs } from './gifs/hooks/useGifs';

export const GifsApp = () => {

    const { gifs, previousTerms, handleTermClicked, handleSearch } = useGifs()

    return (
        <>
            {/* Header */}
            <CustomHeader
                title="Buscador de Gifs"
                description="Descubre y comparte el Gif perfecto"
            />

            {/* Search */}
            <SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch} />

            {/* Búsquedas previas */}
            <PreviousSearches
                searches={previousTerms}
                onSearchClicked={handleTermClicked}
            />

            {/* Gifs */}
            <GifList gifs={gifs} />
        </>
    );
};