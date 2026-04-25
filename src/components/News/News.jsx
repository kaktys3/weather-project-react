import news from './News.module.css'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { WeatherContect } from '../Context/WeatherContext'

const NewsInfo = ({ info }) => {

    return (
        <>
            <div className={news.card}>
                <img className={news.image} src={info.image} alt="" />
                <p className={news.text}>{info.title}</p>
            </div>
        </>
    )
}

export default function News() {
    const { dayStatistic} = useContext(WeatherContect)
    const [newsApiData, setNewsApiData] = useState()

    useEffect(() => {
        const newsApi = async () => {
            const url = await axios.get(`https://api.currentsapi.services/v1/search?keywords=${dayStatistic ? dayStatistic : 'Kyiv'}&language=en&page_size=4&apiKey=uL8XYE8Lu7-Wv4mUsDz6IcP4tqL7IkbGnIRWdcl8tySb26uv`)
            setNewsApiData(url.data.news)
        }

        newsApi()
    }, [dayStatistic])

    return (
        <>
            <section className={news.section}>
                <div>
                    <h5 className={news.title}>Interacting with our pets</h5>
                    <div className={news.container}>
                        {newsApiData && newsApiData.map((data) => (
                            <NewsInfo info={data} key={data.id}/>
                        ))}
                    </div>
                    <button className={news.button}>See more</button>
                </div>
            </section>
        </>
    )
}