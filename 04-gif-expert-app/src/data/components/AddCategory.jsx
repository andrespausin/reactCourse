import { useEffect, useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    const [value, setValue] = useState('')

    const onInputChange = (event) => {
        setValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (value.trim().length <= 1) return
        onNewCategory(value.trim())
        setValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input
            type="text"
            placeholder="Buscar gifs"
            value={value}
            onChange={onInputChange}
            />
        </form>
    )
}