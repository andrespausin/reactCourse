import type { Gif } from "../../mock-data/data"

interface GifProps {
    gifs: Gif[]
}

export const GifContainer = ({ gifs }: GifProps) => {
    return (
        <>
            <div className="gifs-container">
                {
                    gifs.map(gif => (
                        <div key={gif.id} className="gif-card">
                            <img src={gif.url} alt={gif.title} />
                            <h3>{gif.title}</h3>
                            <p>
                                {gif.width} x {gif.height} (1.5Mb)
                            </p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
