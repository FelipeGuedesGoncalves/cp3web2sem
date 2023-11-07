'use client'

import React, { useState } from 'react';
import './Contato.scss';
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

export default function ContateNosForm() {


    const handleSubmit = () => {
        window.alert('Mensagem enviada com sucesso!');
    };

    return (
        <main id='main'>
            <div className="cardRedes">
                <img className='joker' src="/jokerGeeko.png" alt="" />

                <section id='linhas' className={league.className}>
                    <h1 className='acesse'>ACESSE NOSSAS REDES!</h1>
                    <div className="linha">
                        <img className='icon' src="/tiktokIcon.png" alt="" />
                        <h3>@GeekoOfficial</h3>
                    </div>
                    <div className="linha">
                        <img className='icon' src="/faceIcon.png" alt="" />
                        <h3>Geek-o Official</h3>
                    </div>
                    <div className="linha">
                        <img className='icon' src="/instaIcon.png" alt="" />
                        <h3>@GeekoOfficial</h3>
                    </div>
                </section>
            </div>
            <h1 id='ou' className={league.className}>OU SE PREFERIR MANDE UMA MENSAGEM PARA NÓS POR AQUI MESMO ↓</h1>

            <div className="contato-form">
                <h2 className={league.className}>Entre em Contato</h2>
                <form>
                    <div>
                        <label htmlFor="nome" className={league.className}>Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            required
                            className="input"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className={league.className}>Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="input"
                        />
                    </div>
                    <div>
                        <label htmlFor="assunto" className={league.className}>Assunto:</label>
                        <textarea
                            id="assunto"
                            name="assunto"
                            required
                            className="textarea"
                        />
                    </div>
                    <button onClick={handleSubmit} type="submit" className="submit-button">Enviar Mensagem</button>
                </form>
            </div>
        </main>
    );
}
