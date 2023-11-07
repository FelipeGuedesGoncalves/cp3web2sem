import Link from "next/link";
import'../app/globals.scss';
import { League_Spartan } from "next/font/google"
const league = League_Spartan({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600','700']
})

export default function Menu(){

    return(
        <nav className={league.className}>
            <Link href='/' ><img className="logoNav" src="geekoLogo.png" alt="" /></Link>
            <Link href='/' >Página Inicial</Link>
            <Link href='/DC' >DC Comics</Link>
            <Link href='/Produtos'>Seção Anime</Link>
            <Link href='/Sobre'>Sobre Nós</Link>
        </nav>
        
    )
}