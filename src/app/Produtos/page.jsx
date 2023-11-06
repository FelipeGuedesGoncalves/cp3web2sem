// Produtos.jsx
import "./Produtos.scss";
import { listaProdutos } from '../DetalhesProduto/listaProdutos';

export default function Produtos() {
  return (
    <main>
      <ul>
        {listaProdutos.map((produto) => (
          <li key={produto.id}>
            <a>
              <div className="anuncio1 detAnun1">
                <div className='moldura1'>
                  <img className='imgAnuncio1' src={produto.foto} alt={produto.nome} />
                </div>

                <article className='dadosProduto1'>
                  <h1 className='nomeProduto1'>{produto.nome}</h1>
                  <p className='preco1'>R$ 1{produto.preco.toFixed(2)}</p>
                </article>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
