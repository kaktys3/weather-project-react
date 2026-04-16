import { useContext } from 'react'
import './App.css'
import CharacteristicWeather from './components/CharacteristicWeather/CharacteristicWeather.jsx'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import SignUp from './components/Login/SignUp.jsx'
import News from './components/News/News.jsx'
import Weather from './components/Weather/Weather.jsx'
import { WeatherContect } from './components/Context/WeatherContext.jsx'
import WeekStatistik from './components/WeekStatistik/WeekStatistik.jsx'
import Slider from './components/Slider/Slider.jsx'

function App() {
  const { dayWeather, newStatistic } = useContext(WeatherContect)
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Weather />
        {newStatistic && <CharacteristicWeather weather={dayWeather.filter(e => e.name === newStatistic)} />}
        {newStatistic && <WeekStatistik />}
        <News />
      </main>
      <Footer />
      <SignUp />
      <Slider/>
    </>
  )
}

export default App
