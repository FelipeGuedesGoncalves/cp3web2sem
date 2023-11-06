import Link from "next/link";
import'../app/globals.scss';

export default function Menu(){

    return(
        <nav>
            <Link href='/' ><img className="logoNav" src="iDealLogoText.png" alt="" /></Link>
            <Link href='/' >Página Inicial</Link>
            <Link href='/Produtos'>Produtos</Link>
        </nav>
    )
}