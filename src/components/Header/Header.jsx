import { useContext, useEffect, useState } from 'react'
import { WeatherContect } from '../Context/WeatherContext.jsx'
import had from './Header.module.css'
import logo from '/src/img/logo.png'
import user from '/src/img/user.png'

export default function Header() {
    const { setModal, isLogin, setLogin  } = useContext(WeatherContect)
    const hundelLogout = () => {
        localStorage.removeItem('user')
        setLogin('')
    }

    return (
        <>
            <header className={had.header}>
                <div className={had['header-box']}>
                    <img className={had.logo} src={logo} alt="" />
                    <div className={had['header-link-box']}>
                        <a className={had.link} href="">Who we are</a>
                        <a className={had.link} href="">Contacts</a>
                        <a className={had.link} href="">Menu</a>
                    </div>
                </div>
                <div className={had['user-box']}>
                    {isLogin && <button onClick={() => hundelLogout()} className={had.login}>Log out</button>}
                    <button onClick={() => setModal(true)} className={had.login}>{isLogin ? isLogin.name : 'Sign Up'}</button>
                    <img className={had['user-img']} src={user} alt="" />
                </div>
            </header>
        </>
    )
}