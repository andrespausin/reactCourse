import { useState } from "react";

// La idea de manejar eventos fuera del componente es que no se re-renderice el componente al hacer click en el botón
    const getEvent = (event) => {
        console.log(event);
    }

export const CounterApp = ({ value }) => {
    const [counter, setCount] = useState(value);

    const handleAdd = () => {
        setCount(counter+1)
    }

    const handleSubstract = () => {
        setCount(counter-1)
    }

    const handleReset = () => {
        setCount(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ `Contador: ${counter}` }</h2>

            <div className="btn-container">
                <button onClick={handleAdd}>+1</button>
                <button onClick={handleSubstract}>-1</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            
        </>
    )
}