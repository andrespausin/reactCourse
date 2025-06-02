import { FirstApp } from "./FirstApp"

const firstTitle = 'Soy una propiedad que viene desde el componente padre'
const firstSubtitle = 'Soy un subtitulo que viene desde el componente padre'

export const App = () => {
    
    return (
        <>
            <FirstApp title={firstTitle} />
        </>
    )
}