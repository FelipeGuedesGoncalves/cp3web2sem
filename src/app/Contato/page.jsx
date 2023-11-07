'use client'

import React, { useState } from 'react';
import './Contato.scss';

export default function ContateNosForm() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        assunto: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { nome, email, assunto } = formData;

        // Simplesmente exibindo os dados no console para este exemplo.
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Assunto:', assunto);

        // Limpar o formulário após o envio.
        setFormData({
            nome: '',
            email: '',
            assunto: '',
        });
    };

    return (
        <main id='main'>
            <div className="contato-form">
                <h2>Entre em Contato</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nome" className="label">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleInputChange}
                            required
                            className="input"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="label">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="input"
                        />
                    </div>
                    <div>
                        <label htmlFor="assunto" className="label">Assunto:</label>
                        <textarea
                            id="assunto"
                            name="assunto"
                            value={formData.assunto}
                            onChange={handleInputChange}
                            required
                            className="textarea"
                        />
                    </div>
                    <button type="submit" className="submit-button">Enviar Mensagem</button>
                </form>
            </div>
        </main>
    );
}
