import './Sobre.scss'
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

export default function Home() {
    return (
        <main id='mainHome'>
            <div className={oswald.className}>
                <h1 className='titulo'>SOBRE NÓS</h1>
            </div>

            <div id="Integrantes" className={league.className}>
                <div className="pessoa">
                    <img className='profilePic' src="default-profile-pic.png" alt="" />
                    <div className="center">
                        <h1 className='nomeRM'>Felipe Guedes Gonçalves - RM: 550906</h1>
                    </div>
                </div>
                <div className="pessoa">
                    <img className='profilePic' src="default-profile-pic.png" alt="" />
                    <div className="center">
                        <h1 className='nomeRM'>Guilherme Rodrigues de Castro - RM: 99624</h1>
                    </div>
                </div>
                <div className="pessoa">
                    <img className='profilePic' src="default-profile-pic.png" alt="" />
                    <div className="center">
                        <h1 className='nomeRM'>Luiz Fellipe Soares de Sousa Lucena - RM: 551365</h1>
                    </div>
                </div>
            </div>
        </main>
    );
}