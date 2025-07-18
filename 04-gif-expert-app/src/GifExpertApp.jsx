import { useEffect, useState } from "react"
import { AddCategory } from "./data/components/AddCategory"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['dragon ball', 'one punch man'])

    const onAddCategory = (newCategory) => {
        setCategories(categories => {
            if (categories.includes(newCategory)) return categories;
            return [newCategory, ...categories];
        })
    }


    return (
        <>
            {/* Titulo */}
            <h1>Gif Expert App</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={setCategories}
                onNewCategory={ event => onAddCategory(event) }
             />

            {/* .Listado de Gif */}
            <ol>
                {
                    categories.map((category) => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
                {/* Gif Item */}
        </>
    )
}