import { useContext, useEffect, useState } from 'react'
import lg from './SignUp.module.css'
import { WeatherContect } from '../Context/WeatherContext.jsx'

export default function SignUp() {
    const [isHiden, setHiden] = useState(false)
    const [userData, setUserData] = useState({ name: '', email: '', password: ''})
    const { isModal, setModal, isLogin, setLogin } = useContext(WeatherContect)

    useEffect(() => {
        setHiden(isModal && !isLogin)
    }, [isModal, isLogin])

    const handelCheng = (e) => {
        const { name, value } = e.target

        setUserData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handelSubmit = (e) => {
        e.preventDefault()

        localStorage.setItem('user', JSON.stringify(userData))
        setLogin(userData)
        setModal(false)
    }

    return (
        <>
            {isHiden && <div className={lg['back-drop']} onClick={() => setModal(false)}></div>}
            {isHiden && <div className={lg.container}>
                <h3 className={lg.title}>Sign up</h3>

                <form className={lg.form} action="" onSubmit={handelSubmit}>
                    <label className={lg.label}>
                        <p className={lg.labelText}>Username</p>
                        <input className={lg.input} name='name' type="text" placeholder='Username' onChange={handelCheng} />
                    </label>

                    <label className={lg.label}>
                        <p className={lg.labelText}>E-Mail</p>
                        <input className={lg.input} name='email' type="text" placeholder='E-Mail' onChange={handelCheng} />
                    </label>

                    <label className={lg.label}>
                        <p className={lg.labelText}>Password</p>
                        <input className={lg.input} name='password' type="text" placeholder='Password' onChange={handelCheng} />
                    </label>

                    <button className={lg.button}>Sign up</button>
                </form>

                <p className={lg.footerText}>
                    Already have an account? <a className={lg.link} href="">Log In</a>
                </p>
            </div>
            }
        </>
    )
}