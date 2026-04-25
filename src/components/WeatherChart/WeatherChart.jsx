import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
} from 'chart.js'
import { useContext, useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { WeatherContect } from '../Context/WeatherContext'
import axios from 'axios'

import chart from './WeatherChart.module.css'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip
)

export default function WeatherChart() {
    const { dayWeather, dayStatistic } = useContext(WeatherContect)
    const [chartDataApi, setChartDataApi] = useState(null)

    useEffect(() => {
        // Додаємо перевірку, щоб не було помилок при першому рендері
        if (!dayStatistic || !dayWeather || dayWeather.length === 0) return;

        const fetchChartData = async () => {
            try {
                const coord = dayWeather.find(e => e.name === dayStatistic);
                if (coord) {
                    const response = await axios.get(
                        `https://api.open-meteo.com/v1/forecast?latitude=${coord.lat}&longitude=${coord.lon}&hourly=temperature_2m&forecast_days=2`
                    );
                    // Зберігаємо саме об'єкт hourly
                    setChartDataApi(response.data.hourly);
                }
            } catch (error) {
                console.error("Помилка при завантаженні графіку:", error);
            }
        };

        fetchChartData();
    }, [dayStatistic, dayWeather]);

    // Перевірка на наявність даних перед створенням об'єкту графіка
    if (!chartDataApi) return <div>Завантаження графіка...</div>;

    const chartData = {
        labels: chartDataApi.time.map(t => t.split('T')[1]), // Беремо тільки час (години)
        datasets: [
            {
                label: 'Температура',
                data: chartDataApi.temperature_2m, // Це вже масив чисел
                borderColor: '#f97316',
                backgroundColor: 'rgba(249, 115, 22, 0.2)',
                tension: 0.4,
                pointRadius: 2,
            },
        ],
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            x: {
                grid: { color: 'rgba(0,0,0,0.05)' },
                ticks: { maxTicksLimit: 12 } // Щоб не "засмічувати" вісь X
            },
            y: {
                grid: { color: 'rgba(0,0,0,0.05)' },
            },
        },
    }

    return (
        <div className={chart.chartBox}>
            <Line data={chartData} options={options} />
        </div>
    )
}