import { useState } from 'react';
import '../styles/index.css';

export default function ContactForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleMail = () => {
        setStatus('');
        fetch('https://formsubmit.co/ajax/verdexmonitoramento@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                email,
                message,
                _subject: 'Novo contato via landing page',
                _captcha: 'false',
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    return response
                        .json()
                        .catch(() => ({}))
                        .then((data) => {
                            const errorMessage = typeof data?.message === 'string'
                                ? data.message
                                : 'Erro ao enviar o email.';
                            throw new Error(errorMessage);
                        });
                }
                return response.json();
            })
            .then(() => {
                setStatus('Email enviado com sucesso!');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                setStatus(error.message || 'Erro ao enviar o email.');
                console.error('Erro:', error);
            });
    };

    return (
        <div className="container content">
            <p className="desktop-only">Envie sua dúvida</p>
                <h2>Entre em Contato</h2>
                    <p>
                        Entre em contato, estamos dispostos a tirar qualquer dúvida, 
                        seja um orçamento, uma dúvida técnica de algum de nossos produtos. 
                        Estamos à disposição para responder.😎
                    </p>
            <form onSubmit={(e) => { e.preventDefault(); handleMail(); }}>
                <div>
                    <label htmlFor="email">Seu melhor email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Enviar Email</button>
            </form>
            {status && (
                <p className={status.includes('sucesso') ? 'success-message' : 'error-message'}>
                    {status}
                </p>
            )}
        </div>
    );
}
