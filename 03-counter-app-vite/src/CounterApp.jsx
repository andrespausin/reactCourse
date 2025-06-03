import { useState } from "react";

// La idea de manejar eventos fuera del componente es que no se re-renderice el componente al hacer click en el botón
    const getEvent = (event) => {
        console.log(event);
    }

export const CounterApp = ({ value }) => {
    const [counter, setCount] = useState(value);

    // Funcion que se ejecuta al hacer click en el botón
    // Modifica el estado del componente, el cual se declaro arriba con el valor inicial de value
    const handleClick = () => {
        setCount(counter+1)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ `Contador: ${counter}` }</h2>

            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}