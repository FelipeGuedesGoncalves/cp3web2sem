// Produtos.jsx
import "./Produtos.scss";
import { listaProdutos } from '../DetalhesProduto/listaProdutos';
import { League_Spartan } from "next/font/google"
const league = League_Spartan({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700']
})
import { Oswald } from "next/font/google"
const oswald = Oswald({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600']
})

export default function Produtos() {
  return (
    <main>
      <div className={oswald.className}>
        <h1 className='titulo'>SEÇÃO ANIME</h1>
      </div>
      <ul>
        {listaProdutos.map((produto) => (
          <li className={league.className} key={produto.id}>
            <a>
              <div className="anuncio1 detAnun1">
                <div className='moldura1'>
                  <img className='imgAnuncio1' src={produto.foto} alt={produto.nome} />
                </div>

                <article className='dadosProduto1'>
                  <h1 className='nomeProduto1'>{produto.nome}</h1>
                  <p className="oldPrice">{produto.oldpreco}</p>
                  <p className='preco1'>R$ {produto.preco.toFixed(2)}</p>
                </article>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
