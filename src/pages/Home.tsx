import '../styles/utility.css';
import '../styles/header.css';
import "../styles/hero.css";
import '../styles/button.css';
import '../styles/index.css';
import '../styles/footer.css';
import '../styles/carrosel.css';
import { useState, useEffect } from 'react';
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Close from "../assets/close.svg";
import Menu from "../assets/hamburger.svg";
import Button from '../components/Button.tsx';
import myLogo from "../assets/logo/logo4.png";
import Footer from '../components/Footer.tsx';
import TestimonialCarousel from '../components/TestimonialCarousel.tsx';
import CardSoluction from '../components/CardSoluction.tsx';
import CardPricing from '../components/CardPricing.tsx';

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (showMobileMenu) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [showMobileMenu]);

    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        event.preventDefault();

        if (showMobileMenu) {
            setShowMobileMenu(false);
        }

        setTimeout(() => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }
        }, 100);
    };

    const handleMail = () => {
        setStatus('');
    
        // Defina a URL base da API com base no ambiente
        const apiUrl =
            window.location.hostname === 'localhost'
                ? '/api' // Para ambiente de desenvolvimento
                : 'https://southamerica-east1-projeto-lambda-email.cloudfunctions.net/projeto-arch-4'; // Para produção
    
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA0NDY4NDkzNzUyODM0NzU3MjMxIiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJscmxsb3Blc0BtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJQdEdvSl9mZzZ1RXZVRFJVY3EyZmdnIiwibmJmIjoxNzMyMTQwNDMyLCJpYXQiOjE3MzIxNDA3MzIsImV4cCI6MTczMjE0NDMzMiwianRpIjoiZTZiZTMxYzBhZjc4MDNhYmIwOTcyYTFhMzg5ODg4ZThlMzYyNGNlZiJ9.ZQbnn2iYR62LptT0biGhccMEhL6pdllueHjNfLSjPPRgPFSjBwuTbMYkahe4pPBuOu68LNjUwQ5gTLfdS3xGxexZvxSRWiiPQL_mUsUP89uLgPMT-GsBmYC-AEOJatoG7-DcHWbYD5VB0gXz-ZRFyXLU77u23GLh7kEsC8S81pbtds4jkmBmMw6SORkIzra0dUPINUnVnkfbnUUcDHnR320GrozMxvoZ-LdgYCHzgdT9SS4dmiiX_WWOlTLq_4xCd3mQ3K4nEJ1hFOJTHxY2o59X8ak02me74d7Kzn5XNNsG-NeBkM5TIlZnQazIeskM-4zSYSb41bMvlq8KYbB5SQ',
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
        <>
            <header className='container py-sm'>
                <nav className="flex items-center justify-between">
                    <img src={myLogo} alt="logo" className="logo" width={100} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#hero" onClick={(e) => handleScroll(e, "hero")}>Home</a>
                            </li>
                            <li>
                                <a href="#solucao" onClick={(e) => handleScroll(e, "solucao")}>Soluções</a>
                            </li>
                            <li>
                                <a href="#depoimentos" onClick={(e) => handleScroll(e, "depoimentos")}>Depoimentos</a>
                            </li>
                            <li>
                                <a href="#precos" onClick={(e) => handleScroll(e, "precos")}>Preços</a>
                            </li>
                            <li>
                                <a href="#contato" onClick={(e) => handleScroll(e, "contato")}>Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ? (
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#hero" onClick={(e) => handleScroll(e, "hero")}>Home</a>
                                        </li>
                                        <li>
                                            <a href="#solucao" onClick={(e) => handleScroll(e, "solucao")}>Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#depoimentos" onClick={(e) => handleScroll(e, "depoimentos")}>Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#precos" onClick={(e) => handleScroll(e, "precos")}>Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contato" onClick={(e) => handleScroll(e, "contato")}>Contato</a>
                                        </li>
                                        <li>
                                            <a className="reverse-color" href="#">Login</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        )}
                    </div>
                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retângulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retângulo dois tela inicial" />
                <div className="container content">
                    <p className="desktop-only">Bem-vindo(a)</p>
                    <h1>Monitoramento ambiental avançado para áreas rurais</h1>
                    <p>Mantenha-se informado sobre as condições climáticas e níveis fluviométricos com precisão em tempo real. Nossa solução foi projetada para garantir que você esteja sempre preparado para qualquer mudança ambiental, ajudando a proteger suas operações e propriedades rurais 🌱</p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <section id="hero">
                <div id="solucao" className="container content">
                    <p className="desktop-only">Soluções</p>
                    <h2>Sob medida para você</h2>
                    <p>Inovação é com a gente! O Verdex já conquistou diversos clientes, seja você mais um deles. Veja tudo que pode ganhar com nossos serviços.</p>
                </div>
            </section>
            <CardSoluction />

            <section id="cliente-importa" className="hero">
                <div className="container content">
                    <p className="desktop-only">Conselho de quem conhece</p>
                    <h2>Cada cliente importa</h2>
                    <p id="depoimentos">Inovação é com a gente! O Verdex já conquistou diversos clientes, seja você mais um deles.</p>
                    <TestimonialCarousel />
                </div>
            </section>

            <section id='hero'>
                <div className="container content">
                    <p className="desktop-only">Preços e planos</p>
                    <h2>Nossos planos</h2>
                    <p id="precos">Inovação é com a gente! O Verdex já conquistou diversos clientes, seja você mais um deles. Veja tudo que pode ganhar com nossos serviços.</p>
                </div>
            </section>
            <CardPricing />
            
            <section id="hero">
                <div id="contato" className="container content">
                    <p className="desktop-only">Envie sua dúvida</p>
                    <h2>Entre em Contato</h2>
                    <p>
                        Entre em contato, estamos dispostos a tirar qualquer dúvida, 
                        seja um orçamento, uma dúvida técnica de algum de nossos produtos. 
                        Estamos à disposição para responder.😎
                    </p>

                    <form onSubmit={(e) => {e.preventDefault(); handleMail();}}>
                        <div>
                            <label htmlFor="email">Seu melhor email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Mensagem</label>
                            <textarea
                                id="message"
                                name="message"
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
            </section>
        <Footer />
    </>
    );
}
