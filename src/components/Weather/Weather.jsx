import { useContext, useEffect, useState } from 'react'
import wh from './Weather.module.css'
import { WeatherContect } from '../Context/WeatherContext'
import Sun from '/src/img/Sun.png'
import { IoReload } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { DateTime } from "luxon";


const WeatherCard = ({ place, country, time, data, dataDay, temperature, img, }) => {
    const { setDelet, setDayStatistic, setWeekStatistic, setModal, isLogin} = useContext(WeatherContect)
    const [isLike, setLike] = useState(false)

    const delet = () => {
        setDelet(place)
        setDayStatistic('')
        setWeekStatistic('')
    }

    const allStatistic = () => {
        setDayStatistic(place)
        setWeekStatistic(place)
    }

    const removeStatistic = () => {
        setDayStatistic('')
        setWeekStatistic('')
    }

    return (
        <>
            <div className={wh['weather-card']}>
                <div className={wh['country-box']}>
                    <p className={wh.text}>{place}</p>
                    <p className={wh.text}>{country}</p>
                </div>
                <h3 className={wh.time}>{time}</h3>
                <div className={wh['statistick-consol-box']}>
                    <button className={wh['hour-weather']} onClick={() => isLogin ? setDayStatistic(place) : setModal(true)}>Day forecast</button>
                    <button className={wh['week-weather']} onClick={() => isLogin ? setWeekStatistic(place) : setModal(true)}>Weekly forecast</button>
                </div>
                <p className={wh.data}>{data} | {dataDay}</p>
                <img src={img} alt="" />
                <h2 className={wh.temperatureText}>{temperature}</h2>
                <div className={wh['card-console']}>
                    <div className={wh['right-consol-box']}>
                        <button className={wh.reboot} onClick={() => removeStatistic()}><IoReload className={wh['reboot-icon']} /></button>
                        <button className={wh.like} onClick={() => setLike(!isLike)}><FaHeart style={isLike ? { fill: 'red' } : {}} className={wh['like-icon']} /></button>
                    </div>
                    <div className={wh['left-consol-box']}>
                        <button className={wh.statistick} onClick={() => isLogin ? allStatistic() : setModal(true)}>See more</button>
                        <button className={wh.delet} onClick={() => delet()}><MdDeleteOutline className={wh['delet-icon']} /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function Weather() {
    const [nowTime, setTime] = useState(new Date())
    const { nowWeather, dayWeather } = useContext(WeatherContect)
    const days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 60000)

        return () => clearInterval(timer)
    }, [])

    return (
        <>
            <section className={wh.weather}>
                {nowWeather && nowWeather.map((weather, index) => {
                    const dt = DateTime.now().setZone(`${dayWeather[index].timezone}`)

                    return (<WeatherCard
                        place={weather.name}
                        country={weather.country}
                        time={dt.toFormat('HH:mm')}
                        data={`${nowTime.getDate()}.${nowTime.getMonth()}.${nowTime.getFullYear()}`}
                        dataDay={days[nowTime.getDay()]}
                        temperature={`${weather.current.apparent_temperature}℃`}
                        img={Sun}
                        key={index} />)
                })}
            </section>
        </>
    )
}