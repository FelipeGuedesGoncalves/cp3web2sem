import './Home.scss'
import Link from 'next/link'

export default function Home() {
    return (
        <main id='mainHome'>
            <section className="anuncios">
                <Link className='link' href="/produtos/4">
                    <section className="anuncioh">
                        <article className="promocao">
                            <section className="box">
                                <article className="desconto">
                                    <h1 className="numero">30</h1>
                                    <article className="simbols">
                                        <p className="simbol">%</p>
                                        <p className="simbol">OFF</p>
                                    </article>
                                </article>
                                <h4 className="oldPrice">R$ 12.500,00</h4>
                                <h2 className="newPrice">R$ 9.000,00</h2>
                            </section>
                        </article>
                        <div className="celular">
                            <img className="purple" src='/purple-ribbon.png' alt="" />
                            <h1 className="productName">Iphone 14 PRO MAX</h1>
                            <img className="iphone" src='/iphone14promax.png' alt="" />
                        </div>
                    </section>
                </Link>

                <Link className='link' href="/produtos/5">
                    <section className="anuncioh">
                        <article className="promocao">
                            <section className="box">
                                <article className="desconto">
                                    <h1 className="numero">25</h1>
                                    <article className="simbols">
                                        <p className="simbol">%</p>
                                        <p className="simbol">OFF</p>
                                    </article>
                                </article>
                                <h4 className="oldPrice">R$ 1600,00</h4>
                                <h2 className="newPrice">R$ 1200,00</h2>
                            </section>
                        </article>
                        <div className="celular">
                            <img className="purple" src='/purple-ribbon.png' alt="" />
                            <h1 className="productName">Airpods PRO</h1>
                            <img className="iphone" src='/airpod.png' alt="" />
                        </div>
                    </section>
                </Link>
            </section>
        </main>
    );
}