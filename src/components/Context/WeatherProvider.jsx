import { useEffect, useState } from "react";
import { WeatherContect } from "./WeatherContext";
import axios from 'axios'

export default function WeatherProvider({ children }) {
    const [newCity, setNewCity] = useState('Kyiv')
    const [nowWeather, setNowWeather] = useState([])
    const [dayWeather, setDayWeather] = useState([])
    const [weekWeather, setWeekWeather] = useState([])
    const [onDelet, setDelet] = useState()
    const [isModal, setModal] = useState(false)
    const [newStatistic, setStatistic] = useState()
    const [isLogin, setLogin] = useState('')
    const [coord, setCoord] = useState()

    useEffect(() => {
        const cityCoord = async () => {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=39bf8d1910af44d76bee8dca04104c5f&units=metric`)

            setCoord({...res.data.coord , name: res.data.name, country: res.data.sys.country})
        }
        cityCoord()
    }, [newCity])

    useEffect(() => {
        const allWeather = async () => {
            if (!coord) return
            const weatherNow = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${coord.lat}&longitude=${coord.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,surface_pressure,wind_speed_10m,visibility,weather_code&wind_speed_unit=ms`)
            const weatherDay = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${coord.lat}&longitude=${coord.lon}&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_probability_max,wind_speed_10m_max&timezone=auto&forecast_days=1`)
            const weatherWeek = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${coord.lat}&longitude=${coord.lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,weather_code&timezone=auto`)

            setNowWeather([...nowWeather, {...weatherNow.data, ...coord}])
            setDayWeather([...dayWeather, {...weatherDay.data, ...coord}])
            setWeekWeather([...weekWeather,{...weatherWeek.data, ...coord}])
        }
        allWeather()
    }, [coord])

    useEffect(() => {
        if(nowWeather) {
        const newNowWeatherList = nowWeather.filter(e => e.name != onDelet)
        const newDayWeatherList = dayWeather.filter(e => e.name != onDelet)
        const newWeekWeatherList = weekWeather.filter(e => e.name != onDelet)

        setNowWeather(newNowWeatherList)
        setDayWeather(newDayWeatherList)
        setWeekWeather(newWeekWeatherList)
        }
    }, [onDelet])

    useEffect(() => {
        const getInfoUser = JSON.parse(localStorage.getItem('user'))
        setLogin(getInfoUser)
    }, [])

    console.log(weekWeather[0])

    return (
        <>
            <WeatherContect.Provider value={{ setNewCity, nowWeather, setDelet, isModal, setModal, newStatistic, setStatistic, isLogin, setLogin, dayWeather, weekWeather }}>
                {children}
            </WeatherContect.Provider>
        </>
    )
}