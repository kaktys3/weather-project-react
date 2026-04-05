import had from './Header.module.css'
import logo from '/src/img/logo.png'
import user from '/src/img/user.png'

export default function Header() {
    return (
        <>
            <header className='had.header'>
                <div className={had['header-box']}>
                    <img className='had.logo' src={logo} alt="" />
                    <div className={had['header-link-box']}>
                        <a className='had.link' href="">Who we are</a>
                        <a className='had.link' href="">Contacts</a>
                        <a className='had.link' href="">Menu</a>
                    </div>
                </div>
                <div className={had['user-box']}>
                    <button className='had.login'>Sign Up</button>
                    <img className={had['user-img']} src={user} alt="" />
                </div>
            </header>
        </>
    )
}