import { useEffect, useState } from "react"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['dragon ball', 'one punch man'])

    const onAddCategory = () => {
        setCategories([...categories, 'Hola mundo'])
    }

    return (
        <>
            {/* Titulo */}
            <h1>Gif Expert App</h1>

            {/* Input */}

            {/* .Listado de Gif */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {
                    categories.map((category, index) => {
                        return <li key={index}>{category}</li>
                    })
                }
            </ol>
                {/* Gif Item */}
        </>
    )
}