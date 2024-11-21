import { useState } from 'react';
import '../styles/index.css';

export default function ContactForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleMail = () => {
        setStatus('');
        fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA0NDY4NDkzNzUyODM0NzU3MjMxIiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJscmxsb3Blc0BtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJuTnJxeENjNVI1bUZ6TmtiRVJhMjNRIiwibmJmIjoxNzMyMTUxMzkwLCJpYXQiOjE3MzIxNTE2OTAsImV4cCI6MTczMjE1NTI5MCwianRpIjoiMjVhNTViODU4Y2Y2MWZiNmE2MWY2MTUxMzVmNmFhNmRlNDg5NzBjZSJ9.iBp2H_ESMGmjQPwX1lf8xhyLpuXcib00PTWwYfPY9tZQ0-wU-ZZ3wJ2B9ZRKGMI5l5SbEWUtpVY7vVl58GGUCGlfA9ThpS5vf3QG404Kt65Qjd8wUwYleIJhxCqen3xlFv5AIcvSJ27fgy1mYLPArfhHz3us7AWKpLk1FUw3oSuS9zx5hvJQptE8YKBpPCExxl3H3R0n_DVHePzY51BumRlVEQn_QuVV1uI96RknPr6LD1Rd1u_7sVpb6nZ3ZRzPGxIgbIkqICSyQn486MgYLPW2Cd-_Gt2kGYY7hjIfypWNZerL5KtCrlJKslPmc52ztOJYlJJWhsKtMyu9MTNX2g',
            },
            body: JSON.stringify({
                email,
                message,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    return response.text().then((text) => {
                        throw new Error(text);
                    });
                }
                return response.text();
            })
            .then((_data) => {
                setStatus('Email enviado com sucesso!');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                setStatus('Erro ao enviar o email.');
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