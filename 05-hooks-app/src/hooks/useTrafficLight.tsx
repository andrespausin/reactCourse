import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
}

// En caso de agregar colores, no se debe modificar manualmente
type TrafficColor = keyof typeof colors

export const useTrafficLight = () => {
    const [light, setLight] = useState<TrafficColor>("red");
    const [countdown, setCountdown] = useState(5)

    // Countdown effect
    useEffect(() => {
        if (countdown === 0) return;

        const intervalId = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000)

        intervalId

        return () => {
            clearInterval(intervalId)
        }
    }, [countdown])

    // Change light color effect
    useEffect(() => {
        if (countdown > 0) return

        setCountdown(5)

        if (light === 'red') {
            setLight('green')
        }

        if (light === 'green') {
            setLight('yellow')
        }

        if (light === 'yellow') {
            setLight('red')
        }


    }, [countdown, light])

    return {
        // Properties
        // light,
        countdown,
        // colors,

        // Computed
        percentage: (countdown / 5) * 100,
        greenLight: light === 'green' ? colors.green : 'bg-gray-500',
        yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
        redLight: light === 'red' ? colors.red : 'bg-gray-500',

    }
}
