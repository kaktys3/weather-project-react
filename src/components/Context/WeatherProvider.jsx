import { useEffect, useState } from "react";
import { WeatherContect } from "./WeatherContext";
import axios from 'axios'

export default function WeatherProvider({ children }) {
    const [newCity, setNewCity] = useState('')
    const [nowWeather, setNowWeather] = useState(() => JSON.parse(localStorage.getItem('nowWeather')) || [])
    const [dayWeather, setDayWeather] = useState(() => JSON.parse(localStorage.getItem('dayWeather')) || [])
    const [weekWeather, setWeekWeather] = useState(() => JSON.parse(localStorage.getItem('weekWeather')) || [])
    const [onDelet, setDelet] = useState()
    const [isModal, setModal] = useState(false)
    const [isLogin, setLogin] = useState('')
    const [dayStatistic, setDayStatistic] = useState()
    const [weekStatistic, setWeekStatistic] = useState()

    useEffect(() => {
        const allWeather = async () => {
            if (!newCity) return
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=39bf8d1910af44d76bee8dca04104c5f&units=metric`)
            const  newCoord = {...res.data.coord , name: res.data.name, country: res.data.sys.country}

            const [now, day, week] = await Promise.all([
                    axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${newCoord.lat}&longitude=${newCoord.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,surface_pressure,wind_speed_10m,visibility,weather_code&timezone=auto&wind_speed_unit=ms`),
                    axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${newCoord.lat}&longitude=${newCoord.lon}&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_probability_max,wind_speed_10m_max&timezone=auto&forecast_days=1`),
                    axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${newCoord.lat}&longitude=${newCoord.lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,weather_code&timezone=auto`)
                ]);
                
            setNowWeather([...nowWeather, {...now.data, ...newCoord}])
            setDayWeather([...dayWeather, {...day.data, ...newCoord}])
            setWeekWeather([...weekWeather,{...week.data, ...newCoord}])
        }
        allWeather()
    }, [newCity])

    useEffect(() => {
        if (!onDelet) return
        if(nowWeather) {

        setNowWeather(nowWeather.filter(e => e.name != onDelet))
        setDayWeather(dayWeather.filter(e => e.name != onDelet))
        setWeekWeather(weekWeather.filter(e => e.name != onDelet))
        }
    }, [onDelet])

    useEffect(() => {
        setLogin(JSON.parse(localStorage.getItem('user')))
    }, [])

    useEffect(() => {
        localStorage.setItem('nowWeather', JSON.stringify(nowWeather))
        localStorage.setItem('dayWeather', JSON.stringify(dayWeather))
        localStorage.setItem('weekWeather', JSON.stringify(weekWeather))
    }, [nowWeather, dayWeather, weekWeather])

    console.log(dayWeather)
    return (
        <>
            <WeatherContect.Provider value={{ setNewCity, nowWeather, setDelet, isModal, setModal, isLogin, setLogin, dayWeather, weekWeather, dayStatistic, setDayStatistic, weekStatistic, setWeekStatistic }}>
                {children}
            </WeatherContect.Provider>
        </>
    )
}