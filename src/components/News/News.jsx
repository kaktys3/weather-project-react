import news from './News.module.css'
import dogTwo from '/src/img/Dog-two.png'
import dog from '/src/img/Dog.png'
import cat from '/src/img/Cat.png'
import catTwo from '/src/img/Cat-two.png'

export default function News() {
    return (
        <>
            <section className={news.section}>
                <div>
                    <h5 className={news.title}>Interacting with our pets</h5>

                    <div className={news.container}>
                        <div className={news.card}>
                            <img className={news.image} src={cat} alt="" />
                            <p className={news.text}>Rescue pups pose as ghosts in festive photo shoot</p>
                        </div>

                        <div className={news.card}>
                            <img className={news.image} src={catTwo} alt="" />
                            <p className={news.text}>Cat interrupts morning coffee on sunny Washington morning</p>
                        </div>

                        <div className={news.card}>
                            <img className={news.image} src={dog} alt="" />
                            <p className={news.text}>New study finds dogs pay more attention to women</p>
                        </div>

                        <div className={news.card}>
                            <img className={news.image} src={dogTwo} alt="" />
                            <p className={news.text}>Petting dogs gives health benefit, even if they are not yours</p>
                        </div>
                    </div>

                    <button className={news.button}>See more</button>
                </div>
            </section>
        </>
    )
}