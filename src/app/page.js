import './Home.scss'
import { Oswald } from "next/font/google"
const oswald = Oswald({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600']
})


export default function Home() {
    return (
        <main id='mainHome'>

            <div className={oswald.className}>
                <h1 className='titulo'>PÁGINA INICIAL</h1>
            </div>

            <section className="anuncios">
                <section className="anuncioh">
                    <article className="promocao">
                        <div className={oswald.className}>
                            <section className="box">
                                <article className="desconto">
                                    <div id='oswald1' className={oswald.className}>
                                        <h1 className="numero">49</h1>
                                        <article className="simbols">
                                            <p className="simbol">%</p>
                                            <p className="simbol">OFF</p>
                                        </article>
                                    </div>
                                </article>
                                <h4 className="oldPrice">R$ 1.300,00</h4>
                                <h2 className="newPrice">R$ 670,00</h2>
                            </section>
                        </div>
                    </article>
                    <div className="item">
                        <img className="purple" src='/purple-ribbon.png' alt="" />
                        <div className={oswald.className}>
                            <h1 className="productName">Zoro Action Figure</h1>
                        </div>
                        <img className="produto" src='/zoroActionFig.png' alt="" />
                    </div>
                </section>


                <section className="anuncioh">
                    <article className="promocao">
                        <div className={oswald.className}>
                            <section className="box">
                                <article className="desconto">
                                    <div id='oswald2' className={oswald.className}>
                                        <h1 className="numero">25</h1>
                                        <article className="simbols">
                                            <p className="simbol">%</p>
                                            <p className="simbol">OFF</p>
                                        </article>
                                    </div>
                                </article>
                                <h4 className="oldPrice">R$ 200,00</h4>
                                <h2 className="newPrice">R$ 150,00</h2>
                            </section>
                        </div>
                    </article>
                    <div className="item">
                        <img className="purple" src='/purple-ribbon.png' alt="" />
                        <div className={oswald.className}>
                            <h1 className="productName">Plushie Naruto</h1>
                        </div>
                        <img className="produto" src='/plushieNaruto.png' alt="" />
                    </div>
                </section>
            </section>
        </main>
    );
}