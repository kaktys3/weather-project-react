import { useEffect, useState } from "react";
import { WeatherContect } from "./WeatherContext";
import axios from 'axios'

export default function WeatherProvider({ children }) {
    const [newCity, setNewCity] = useState('Kyiv')
    const [nowWeather, setWeather] = useState([])
    const [onDelet, setDelet] = useState()
    const [isModal, setModal] = useState(false)

    useEffect(() => {
        const apiWeather = async () => {
            const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=39bf8d1910af44d76bee8dca04104c5f&units=metric`)
            setWeather([...nowWeather, weather.data])
        }

        apiWeather()
    }, [newCity])

    useEffect(() => {
        const newWeatherList = nowWeather.filter(e => e.name != onDelet)

        setWeather(newWeatherList)
    }, [onDelet])

    return (
        <>
            <WeatherContect.Provider value={{ setNewCity, nowWeather, setDelet, isModal, setModal}}>
                {children}
            </WeatherContect.Provider>
        </>
    )
}