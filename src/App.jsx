import './App.css'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import SignUp from './components/Login/SignUp.jsx'
import News from './components/News/News.jsx'
import Weather from './components/Weather/Weather.jsx'

function App() {

  return (
    <>
     <Header/>
     <Hero/>
     <Weather/>
     <News/>
     <Footer/>
     <SignUp/>
    </>
  )
}

export default App
