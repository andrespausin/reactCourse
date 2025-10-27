import { GifContainer } from "./gifs/GifContainer"
import { mockGifs } from "./mock-data/data"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {
    return (
        <>
            {/* Custom Header */}
            <CustomHeader title="Gifs App" description="Descubre y comparte el gif perfecto" />

            {/* Search Bar y busquedas previas */}
            <SearchBar />

            {/* Gifs */}
            <GifContainer gifs={mockGifs} />
        </>
    )
}
