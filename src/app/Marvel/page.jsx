import "./Marvel.scss"
import { Oswald } from "next/font/google"
const oswald = Oswald({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600']
})
import { League_Spartan } from "next/font/google"
const league = League_Spartan({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700']
})

export default function Marvel() {
    return (
        <main id='mainHome'>
            <div className={oswald.className}>
                <h1 className='titulo'>PRODUTOS MARVEL</h1>
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
                                <h4 className="oldPrice">R$ 2.000,00</h4>
                                <h2 className="newPrice">R$ 1.600,00</h2>
                            </section>
                        </div>
                    </article>
                    <div className="item">
                        <img className="purple" src='/purple-ribbon.png' alt="" />
                        <div className={oswald.className}>
                            <h1 className="productName">Hulk Action Figure</h1>
                        </div>
                        <img className="produto" src='/hulkActionFig.png' alt="" />
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
                                <h4 className="oldPrice">R$ 50,00</h4>
                                <h2 className="newPrice">R$ 37,50</h2>
                            </section>
                        </div>
                    </article>
                    <div className="item">
                        <img className="purple" src='/purple-ribbon.png' alt="" />
                        <div className={oswald.className}>
                            <h1 className="productName">Superior Iron-Man HQ</h1>
                        </div>
                        <img className="produto" src='/hqMarvel.png' alt="" />
                    </div>
                </section>
            </section>

            <table id="tabela" className={league.className}>
                <h2 id="subtitulo" className={league.className}>EM BREVE!</h2>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="product-row">
                        <td>Action Figure</td>
                        <td>Action Figure do Homem de Ferro</td>
                        <td>R$ 159.99</td>
                    </tr>
                    <tr className="product-row">
                        <td>Camiseta</td>
                        <td>Camiseta dos Vingadores</td>
                        <td>R$ 49.99</td>
                    </tr>
                    <tr className="product-row">
                        <td>Camiseta</td>
                        <td>Camiseta do Homem-Aranha</td>
                        <td>R$ 39.99</td>
                    </tr>
                    <tr className="product-row">
                        <td>Chaveiro</td>
                        <td>Chaveiro do Capitão América</td>
                        <td>R$ 9.99</td>
                    </tr>
                    <tr className="product-row">
                        <td>Revista em Quadrinhos</td>
                        <td>Edição especial da Guerra Civil</td>
                        <td>R$ 19.99</td>
                    </tr>
                </tbody>
            </table>
        </main>
    );
};
