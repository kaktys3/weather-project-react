import { useCallback, useState } from 'react'
import lg from './SignUp.module.css'
import { WeatherContect } from '../Context/WeatherContext.jsx'

export default function SignUp() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const {isModal, setModal} = useCallback(WeatherContect)

    return (
        <>
            <div className={lg['back-drop']}>
                <div className={lg.container}>
                    <h3 className={lg.title}>Sign up</h3>

                    <form className={lg.form} action="">
                        <label className={lg.label}>
                            <p className={lg.labelText}>Username</p>
                            <input className={lg.input} type="text" placeholder='Username' />
                        </label>

                        <label className={lg.label}>
                            <p className={lg.labelText}>E-Mail</p>
                            <input className={lg.input} type="text" placeholder='E-Mail' />
                        </label>

                        <label className={lg.label}>
                            <p className={lg.labelText}>Password</p>
                            <input className={lg.input} type="text" placeholder='Password' />
                        </label>

                        <button className={lg.button}>Sign up</button>
                    </form>

                    <p className={lg.footerText}>
                        Already have an account? <a className={lg.link} href="">Log In</a>
                    </p>
                </div>
            </div>
        </>
    )
}