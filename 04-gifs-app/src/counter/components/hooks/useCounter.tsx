import { useState } from "react";

export const useCounter = (initialValue = 20) => {
    const [counter, setCounter] = useState(initialValue);

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleSubstract = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(initialValue)
    }

    return {
        //Values
        counter,
        // Actions
        handleAdd,
        handleSubstract,
        handleReset
    }

}


