import ft from './Footer.module.css'
import logo from '/src/img/logo.png'
import watsap from '/src/img/whatsapp.png'
import instagram from '/src/img/instagram.png'
import fasebook from '/src/img/fasebook.png'

export default function Footer() {
    return (
        <>
            <footer className={ft.footer}>
                <img className={ft.logo} src={logo} alt="" />

                <div className={ft.addressBlock}>
                    <p className={ft.title}>Address</p>
                    <p className={ft.text}>
                        Svobody str. 35
                        Kyiv
                        Ukraine
                    </p>
                </div>

                <div className={ft.contactBlock}>
                    <p className={ft.title}>Contact us</p>

                    <div className={ft.socials}>
                        <button className={ft.button}>
                            <img className={ft.icon} src={instagram} alt="" />
                        </button>

                        <button className={ft.button}>
                            <img className={ft.icon} src={fasebook} alt="" />
                        </button>

                        <button className={ft.button}>
                            <img className={ft.icon} src={watsap} alt="" />
                        </button>
                    </div>
                </div>
            </footer>
        </>
    )
}