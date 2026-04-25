import { useContext, useState } from 'react'
import we from './WeekStatistik.module.css'
import { WeatherContect } from '../Context/WeatherContext'
import { format, parseISO } from 'date-fns';
import { enUS } from 'date-fns/locale';

export const getFormattedDate = (dateString) => {
    const date = parseISO(dateString);

    return {
        fullDate: format(date, 'eeee, MMMM do', { locale: enUS }),
        weekday: format(date, 'eeee', { locale: enUS }),
        monthDay: format(date, 'MMMM do', { locale: enUS })
    };
};


const WeekPartWeather = ({ min, day, max, weatherStatus}) => {

    return (
        <div className={we.dayCard}>
            <h4 className={we.dayDate}>{day}</h4>
            <div className={we.dayInfo}>
                <span>{weatherStatus.icon}</span>
                <p className={we.dayTemp}>{Math.round(max)} / {Math.round(min)}℃</p>
            </div>
            <p className={we.dayStatus}>{weatherStatus.label}</p>
        </div>
    )
}

export default function WeekStatistik() {
    const { weekWeather, weekStatistic } = useContext(WeatherContect)
    const weatherInterpretation = {
        0: { label: "Sunny", icon: "☀️" },
        1: { label: "Mainly Clear", icon: "🌤️" },
        2: { label: "Partly Cloudy", icon: "⛅" },
        3: { label: "Overcast", icon: "☁️" },
        45: { label: "Foggy", icon: "🌫️" },
        48: { label: "Rime Fog", icon: "🌫️" },
        51: { label: "Light Drizzle", icon: "🌦️" },
        61: { label: "Rainy", icon: "🌧️" },
        63: { label: "Moderate Rain", icon: "🌧️" },
        65: { label: "Heavy Rain", icon: "🌧️" },
        71: { label: "Slight Snow", icon: "❄️" },
        73: { label: "Snowy", icon: "❄️" },
        75: { label: "Snowstorm", icon: "🌨️" },
        80: { label: "Rain Showers", icon: "🌦️" },
        95: { label: "Thunderstorm", icon: "⛈️" }
    };
    const cityWeek = weekWeather.filter(e => e.name === weekStatistic)

    return (
        <>
            <section className={we.weekSection}>
                <h5 className={we.weekTitle}>7-day forecast</h5>
                <div>
                    {cityWeek.length && cityWeek[0].daily.temperature_2m_min.map((weather, index) => {
                        const info = getFormattedDate(weekWeather[0].daily.time[index]);
                        const code = weekWeather[0].daily.weather_code[index];
                        const interpretation = weatherInterpretation[code]

                        return (
                            <WeekPartWeather
                                min={weather}
                                max={weekWeather[0].daily.temperature_2m_max[index]}
                                day={`${info.fullDate.slice(0, 3)}, ${info.monthDay}`}
                                weatherStatus={interpretation}
                                key={index}
                            />
                        )
                    })}
                </div>
            </section>
        </>
    )
}