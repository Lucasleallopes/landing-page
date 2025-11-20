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
import CardSoluction from '../components/CardSoluction.tsx';
import CardPricing from '../components/CardPricing.tsx';
import ContactForm from '../components/ContactForm.tsx';

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

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

    // URLs de autenticação
    const signupUrl = "https://verdex-f8d3b.firebaseapp.com/cadastro";
    const loginUrl = "https://verdex-f8d3b.firebaseapp.com/login";

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
                            {/* <li>
                                <a href="#depoimentos" onClick={(e) => handleScroll(e, "depoimentos")}>Depoimentos</a>
                            </li> */}
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
                            {/* Botão de login */}
                            <a className="reverse-color ml-lg" href={loginUrl}>Login</a>
                            {/* Botão de cadastro */}
                            <a href={signupUrl} className="ml-sm"><Button text="Cadastre-se" /></a>
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
                                        {/* <li>
                                            <a href="#depoimentos" onClick={(e) => handleScroll(e, "depoimentos")}>Depoimentos</a>
                                        </li> */}
                                        <li>
                                            <a href="#precos" onClick={(e) => handleScroll(e, "precos")}>Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contato" onClick={(e) => handleScroll(e, "contato")}>Contato</a>
                                        </li>
                                        {/* Botão de login (mobile) */}
                                        <li>
                                            <a className="reverse-color" href={loginUrl}>Login</a>
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
                        {/* Botão de cadastro (hero) */}
                        <a href={signupUrl}><Button text="Cadastre-se" /></a>
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
                    <p>Inovação é com a gente! O Verdex já conquistou diversas pessoas, seja você mais uma delas. Veja tudo que pode ganhar com nossos serviços.</p>
                </div>
            </section>
            <CardSoluction />

            {/* <section id="cliente-importa" className="hero">
                <div className="container content">
                    <p className="desktop-only">Conselho de quem conhece</p>
                    <h2>Cada cliente importa</h2>
                    <p id="depoimentos">Inovação é com a gente! O Verdex já conquistou diversos clientes, seja você mais um deles.</p>
                    <TestimonialCarousel />
                </div>
            </section> */}

            <section id='hero' className="pricing-hero">
                <div className="container content">
                    <p className="desktop-only">Preços e planos</p>
                    <h2>Nossos planos</h2>
                    <p id="precos">Inovação é com a gente! O Verdex já conquistou diversos clientes, seja você mais um deles. Veja tudo que pode ganhar com nossos serviços.</p>
                </div>
            </section>
            <CardPricing />
            
            <section id="hero" className="container content">
                <div id="contato">
                 <ContactForm />
                </div>
            </section>
        <Footer />
    </>
    );
}
