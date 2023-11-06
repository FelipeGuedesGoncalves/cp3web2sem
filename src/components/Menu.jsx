import Link from "next/link";
import'../app/globals.scss';
import { Oswald } from "next/font/google"
const oswald = Oswald({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600']
})

export default function Menu(){

    return(
        <nav className={oswald.className}>
            <Link href='/' ><img className="logoNav" src="geekoLogo.png" alt="" /></Link>
            <Link href='/' >Página Inicial</Link>
            <Link href='/DC' >DC Comics</Link>
            <Link href='/Produtos'>Produtos</Link>
        </nav>
        
    )
}