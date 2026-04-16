import { useEffect, useContext, useState } from 'react'
import wh from './Weather.module.css'
import { WeatherContect } from '../Context/WeatherContext'
import Sun from '/src/img/Sun.png'
import { IoReload } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const WeatherCard = ({ place, country, time, data, dataDay, temperature, img, }) => {
    const { setDelet, setStatistic } = useContext(WeatherContect)

    const delet = () => {
        setDelet(place)
        setStatistic('')
    }

    return (
        <>
            <div className={wh['weather-card']}>
                <div className={wh['country-box']}>
                    <p>{place}</p>
                    <p>{country}</p>
                </div>
                <h3>{time}</h3>
                <div className={wh['statistick-consol-box']}>
                    <button className={wh['hour-weather']}>Hourly forecast</button>
                    <button className={wh['week-weather']}>Weekly forecast</button>
                </div>
                <p className={wh.data}>{data} | {dataDay}</p>
                <img src={img} alt="" />
                <h2>{temperature}</h2>
                <div className={wh['card-console']}>
                    <div className={wh['right-consol-box']}>
                        <button className={wh.reboot}><IoReload className={wh['reboot-icon']} /></button>
                        <button className={wh.like}><FaRegHeart className={wh['like-icon']} /></button>
                    </div>
                    <div className={wh['left-consol-box']}>
                        <button className={wh.statistick} onClick={() => setStatistic(place)}>See more</button>
                        <button className={wh.delet} onClick={() => delet()}><MdDeleteOutline className={wh['delet-icon']} /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function Weather() {
    const [nowTime, setTime] = useState(new Date())
    const { nowWeather} = useContext(WeatherContect)
    const days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
    const fixTime = () => {
        if(nowTime.getMinutes() < 10) {
            return 0
        } else {
            return 
        }
    }

    return (
        <>
            <section className={wh.weather}>
                {nowWeather && nowWeather.map((weather, index) => (
                    <WeatherCard place={weather.name} country={weather.country} time={`${nowTime.getHours()}:${fixTime(), nowTime.getMinutes()}`} data={`${nowTime.getDate()}.${nowTime.getMonth()}.${nowTime.getFullYear()}`} dataDay={days[nowTime.getDay()]} temperature={`${weather.current.apparent_temperature}℃`} img={Sun} key={index} />
                ))}
            </section>
        </>
    )
}