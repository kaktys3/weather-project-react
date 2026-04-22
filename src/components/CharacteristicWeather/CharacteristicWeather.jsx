import ch from './CharacteristicWeather.module.css'
import temperature from '/src/img/temperature.png'
import pressure from '/src/img/pressure.png'
import visibility from '/src/img/visibility.png'
import wind from '/src/img/wind.png'
import windSpeed from '/src/img/wind-speed.png'
import { useContext } from 'react'
import { WeatherContect } from '../Context/WeatherContext'

export default function CharacteristicWeather({weather}) {
    const { nowWeather, dayStatistic } = useContext(WeatherContect)
    const visibilityCharacteristic = () => {
        const km = nowWeather[0].current.visibility / 10000
        if (km >= 10) return "Clear";
        if (km >= 5) return "Good";
        if (km >= 2) return "Fair";
        if (km >= 1) return "Hazy";
        return "Foggy";
    }
    const pascalInfo = nowWeather.filter(e => e.name === dayStatistic)

    return (
        <section className={ch.sectionWeatherCharacteristic}>

            <div className={ch.feelsLikeCard}>
                <p className={ch.text}>Feels like</p>
                <h3 className={ch.title}>{pascalInfo[0].current.apparent_temperature}℃</h3>
                <img className={ch.feelsLikeIcon} src={temperature} alt="" />
            </div>

            <div className={ch.tempRangeCard}>
                <p className={ch.text}>Min ℃</p>
                <h3 className={ch.title}>{weather[0].daily.temperature_2m_min}℃</h3>
                <p className={ch.text}>Max ℃</p>
                <h3 className={ch.titleMaxTemperatura}>{weather[0].daily.temperature_2m_max}℃</h3>
            </div>

            <div className={ch.humidityCard}>
                <p className={ch.text}>Humidity</p>
                <h3 className={ch.title}>{weather[0].daily.precipitation_probability_max}%</h3>
                <img className={ch.humidityIcon} src={wind} alt="" />
            </div>

            <div className={ch.pressureCard}>
                <p className={ch.text}>Pressure</p>
                <h3 className={ch.title}>{pascalInfo[0].current.surface_pressure} Pa</h3>
                <img className={ch.pressureIcon} src={pressure} alt="" />
            </div>

            <div className={ch.windSpeedCard}>
                <p className={ch.text}>Wind speed</p>
                <h3 className={ch.title}>{weather[0].daily.wind_speed_10m_max} m/s</h3>
                <img className={ch.windSpeedIcon} src={windSpeed} alt="" />
            </div>

            <div className={ch.visibilityCard}>
                <p className={ch.text}>Visibility</p>
                <h3 className={ch.title}>{visibilityCharacteristic()}</h3>
                <img className={ch.visibilityIcon} src={visibility} alt="" />
            </div>

        </section>
    )
}