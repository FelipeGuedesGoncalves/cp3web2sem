import './dc.scss'
import { Oswald } from "next/font/google"
const oswald = Oswald({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600']
})


export default function Home() {
    return (
        <main id='mainHome'>

            <div className={oswald.className}>
                <h1 className='titulo'>PRODUTOS DC</h1>
            </div>

            <section className="anuncios">
                <section className="anuncioh">
                    <article className="promocao">
                        <div className={oswald.className}>
                            <section className="box">
                                <article className="desconto">
                                    <div id='oswald1' className={oswald.className}>
                                        <h1 className="numero">20</h1>
                                        <article className="simbols">
                                            <p className="simbol">%</p>
                                            <p className="simbol">OFF</p>
                                        </article>
                                    </div>
                                </article>
                                <h4 className="oldPrice">R$ 1.000,00</h4>
                                <h2 className="newPrice">R$ 800,00</h2>
                            </section>
                        </div>
                    </article>
                    <div className="item">
                        <img className="purple" src='/purple-ribbon.png' alt="" />
                        <div className={oswald.className}>
                            <h1 className="productName">Coringa Action Figure</h1>
                        </div>
                        <img className="produto" src='/coringaActionFig.png' alt="" />
                    </div>
                </section>


                <section className="anuncioh">
                    <article className="promocao">
                        <div className={oswald.className}>
                            <section className="box">
                                <article className="desconto">
                                    <div id='oswald2' className={oswald.className}>
                                        <h1 className="numero">15</h1>
                                        <article className="simbols">
                                            <p className="simbol">%</p>
                                            <p className="simbol">OFF</p>
                                        </article>
                                    </div>
                                </article>
                                <h4 className="oldPrice">R$ 1.200,00</h4>
                                <h2 className="newPrice">R$ 1.020,00</h2>
                            </section>
                        </div>
                    </article>
                    <div className="item">
                        <img className="purple" src='/purple-ribbon.png' alt="" />
                        <div className={oswald.className}>
                            <h1 className="productName">Batman Action Figure</h1>
                        </div>
                        <img className="produto" src='/batmanActionFig.png' alt="" />
                    </div>
                </section>

                <section className="anuncioh">
                    <article className="promocao">
                        <div className={oswald.className}>
                            <section className="box">
                                <article className="desconto">
                                    <div id='oswald1' className={oswald.className}>
                                        <h1 className="numero">25</h1>
                                        <article className="simbols">
                                            <p className="simbol">%</p>
                                            <p className="simbol">OFF</p>
                                        </article>
                                    </div>
                                </article>
                                <h4 className="oldPrice">R$ 900,00</h4>
                                <h2 className="newPrice">R$ 675,00</h2>
                            </section>
                        </div>
                    </article>
                    <div className="item">
                        <img className="purple" src='/purple-ribbon.png' alt="" />
                        <div className={oswald.className}>
                            <h1 className="productName">Superman Action Figure</h1>
                        </div>
                        <img className="produto" src='/supermanActionFig.png' alt="" />
                    </div>
                </section>


                <section className="anuncioh">
                    <article className="promocao">
                        <div className={oswald.className}>
                            <section className="box">
                                <article className="desconto">
                                    <div id='oswald2' className={oswald.className}>
                                        <h1 className="numero">10</h1>
                                        <article className="simbols">
                                            <p className="simbol">%</p>
                                            <p className="simbol">OFF</p>
                                        </article>
                                    </div>
                                </article>
                                <h4 className="oldPrice">R$ 30,00</h4>
                                <h2 className="newPrice">R$ 27,00</h2>
                            </section>
                        </div>
                    </article>
                    <div className="item">
                        <img className="purple" src='/purple-ribbon.png' alt="" />
                        <div className={oswald.className}>
                            <h1 className="productName">"Aliança Fragmentada"</h1>
                        </div>
                        <img className="produto" src='/comicLanterna.png' alt="" />
                    </div>
                </section>
            </section>
        </main>
    );
}