import hr from './Hero.module.css'
import search from '/src/img/search-img.png'
import line from '/src/img/Line.png'
import { useContext, useState } from 'react'
import { WeatherContect } from '../Context/WeatherContext.jsx'

export default function Hero() {
    const [searchCity, setSearchCity] = useState('')
    const { setNewCity, nowWeather } = useContext(WeatherContect)

    const blockSubmit = nowWeather.filter(e => e.name === searchCity)
    const hundelSubmit = (e) => {
        e.preventDefault()

        if (blockSubmit.length === 0) {
            setNewCity(searchCity)
        }
    }

    return (
        <>
            <section className={hr.hero}>
                <h1 className={hr.title}>Weather dashboard</h1>
                <div className={hr['content-box']}>
                    <p className={hr['text-weather-personal']}>Create your personal list of favorite cities and always be aware of the weather.</p>
                    <img src={line} alt="" />
                    <p className={hr['text-data']}>October 2023 Friday, 13th</p>
                </div>
                <form className={hr['search-box']} onSubmit={hundelSubmit}>
                    <input onChange={(e) => setSearchCity(e.target.value)} className={hr['serch-input']} type="text" placeholder="Search location..." />
                    <button className={hr['search-button']} type='submit'><img src={search} alt="" /></button>
                </form>
            </section>
        </>
    )
}