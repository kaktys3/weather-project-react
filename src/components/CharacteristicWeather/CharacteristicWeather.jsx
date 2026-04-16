import ch from './CharacteristicWeather.module.css'
import temperature from '/src/img/temperature.png'
import pressure from '/src/img/pressure.png'
import visibility from '/src/img/visibility.png'
import wind from '/src/img/wind.png'
import windSpeed from '/src/img/wind-speed.png'
import { useContext } from 'react'
import { WeatherContect } from '../Context/WeatherContext'

export default function CharacteristicWeather({weather}) {
    const { nowWeather, newStatistic } = useContext(WeatherContect)
    const visibilityCharacteristic = () => {
        const km = nowWeather[0].current.visibility / 1000
        if (km >= 10) return "Excellent visibility";
        if (km >= 5) return "Good visibility";
        if (km >= 2) return "Moderate visibility";
        if (km >= 1) return "Poor visibility";
        return "Very poor visibility";
    }
    const pascalInfo = nowWeather.filter(e => e.name === newStatistic)

    console.log(pascalInfo)
    return (
        <section className={ch.sectionWeatherCharacteristic}>

            <div className={ch.feelsLikeCard}>
                <p className={ch.feelsLikeLabel}>Feels like</p>
                <h3 className={ch.feelsLikeValue}>{pascalInfo[0].current.apparent_temperature}℃</h3>
                <img className={ch.feelsLikeIcon} src={temperature} alt="" />
            </div>

            <div className={ch.tempRangeCard}>
                <p className={ch.minLabel}>Min ℃</p>
                <h3 className={ch.minValue}>{weather[0].daily.temperature_2m_min}℃</h3>
                <p className={ch.maxLabel}>Max ℃</p>
                <h3 className={ch.maxValue}>{weather[0].daily.temperature_2m_max}℃</h3>
            </div>

            <div className={ch.humidityCard}>
                <p className={ch.humidityLabel}>Humidity</p>
                <h3 className={ch.humidityValue}>{weather[0].daily.precipitation_probability_max}%</h3>
                <img className={ch.humidityIcon} src={wind} alt="" />
            </div>

            <div className={ch.pressureCard}>
                <p className={ch.pressureLabel}>Pressure</p>
                <h3 className={ch.pressureValue}>{pascalInfo[0].current.surface_pressure} Pa</h3>
                <img className={ch.pressureIcon} src={pressure} alt="" />
            </div>

            <div className={ch.windSpeedCard}>
                <p className={ch.windSpeedLabel}>Wind speed</p>
                <h3 className={ch.windSpeedValue}>{weather[0].daily.wind_speed_10m_max} m/s</h3>
                <img className={ch.windSpeedIcon} src={windSpeed} alt="" />
            </div>

            <div className={ch.visibilityCard}>
                <p className={ch.visibilityLabel}>Visibility</p>
                <h3 className={ch.visibilityValue}>{visibilityCharacteristic()}</h3>
                <img className={ch.visibilityIcon} src={visibility} alt="" />
            </div>

        </section>
    )
}