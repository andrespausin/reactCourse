// import { FirstApp } from "./FirstApp"
import { CounterApp } from "./CounterApp"

const firstTitle = 'Soy una propiedad que viene desde el componente padre'
const firstSubtitle = 'Soy un subtitulo que viene desde el componente padre'

export const App = () => {
    
    return (
        <>
            <CounterApp value={10} />
        </>
    )
}