export const CounterApp = ({ value }) => {
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ parseFloat(value) ? `Este es un numero: ${value}` : "Debes adjuntar un numero como prop"}</h2>
        </>
    )
}