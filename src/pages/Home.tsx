import '../styles/utility.css';
import '../styles/header.css';
import "../styles/hero.css";
import '../styles/button.css';
import '../styles/index.css';
import '../styles/footer.css'
import '../styles/carrosel.css'
import { useState, useEffect } from 'react';
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Close from "../assets/close.svg";
import Menu from "../assets/hamburger.svg";
import Button from '../components/Button.tsx';
import myLogo from "../assets/logo/logo4.png";
import Footer from '../components/Footer.tsx';
import TestimonialCarousel from '../components/TestimonialCarousel.tsx'
import Card from '../components/Card.tsx';

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

    return (
        <>
            <header className='container py-sm'>
                <nav className="flex items-center justify-between">
                    <img src={myLogo} alt="logo" className="logo" width={100} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
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
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solucao">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#depoimentos">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#precos">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contato">Contato</a>
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
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>
            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
                <div className="container content">
                    <p className="desktop-only">
                        Bem-vindo(a)
                    </p>
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


            <section id='hero'>
                <div className="container content">
                    <p className="desktop-only">
                        Soluções
                    </p>
                    <h2>
                        Sob medida para você
                    </h2>
                    <p>
                        Inovação é com a gente! O Verdex já conquistou diversos clientes, seja você mais um deles,
                        veja tudo que pode ganhar com nossos serviços.
                    </p>
                </div>
            </section>
            <section id="cards" className="cards-section py-lg">
                <div className="container grid center">
                    <Card 
                        title="Facilidade" 
                        description="Nosso sistema simplifica o acesso a dados climáticos, meteorológicos e fluviométricos das estações de produtores rurais, facilitando a visualização dessas informações de forma prática e acessível."
                    />
                    <Card 
                        title="Inovação" 
                        description="Com tecnologia satelital de ponta, o sistema traz inovação ao agronegócio, permitindo que os produtores recebam alertas em tempo real, otimizando suas decisões com base em dados precisos e integrados."
                    />
                    <Card 
                        title="Tempo" 
                        description="Agilidade é a chave: nosso sistema transmite dados atualizados rapidamente, permitindo que os produtores respondam de forma eficiente às mudanças climáticas e meteorológicas, economizando tempo precioso."
                    />
                </div>
            </section>

            <section id="cliente-importa" className="hero">
                <div className="container content">
                    <p className="desktop-only">Conselho de quem conheçe</p>
                    <h2>Cada cliente importa</h2>
                    <p>Inovação é com a gente! O Verdex já conquistou diversos clientes, seja você mais um deles.</p>
                    <TestimonialCarousel />
                </div>
            </section>

            <section id='hero'>
                <div className="container content">
                    <p className="desktop-only">
                        Preços e planos
                    </p>
                    <h2>
                        Nossos planos
                    </h2>
                    <p>
                        Inovação é com a gente! O Verdex já conquistou diversos clientes, seja você mais um deles,
                        veja tudo que pode ganhar com nossos serviços.
                    </p>
                </div>
            </section>
            <section id="pricing" className="pricing-section py-lg">
                <div className="container grid center">
                    <div className="card pricing-card">
                        <h3>Básico</h3>
                        <p>Baixe a ferramenta e comece a utilizar agora mesmo!</p>
                        <h2>Grátis</h2>
                        <Button text="Baixar agora" secondary/>
                        <hr className="card-separator" />
                        <ul>
                            <li>Com anúncios</li>
                            <li>Acesso a dados de até 2 estações</li>
                            <li>Receba alertas básicos</li>
                        </ul>
                    </div>
                    <div className="card pricing-card premium-card">
                        <h3>Premium</h3>
                        <p>Para quem deseja utilizar nossa ferramenta sem limitações!</p>
                        <h2>R$ 19,90/mês</h2>
                        <Button text="Experimente de graça"/>
                        <hr className="card-separator" />
                        <ul>
                            <li>Sem interrupção de anúncios</li>
                            <li>Acesso a dados ilimitados de estações</li>
                            <li>Receba alertas personalizados e detalhados</li>
                        </ul>
                    </div>
                    <div className="card pricing-card">
                        <h3>Empresarial</h3>
                        <p>Utilize nossa solução na sua empresa. Aprimore seu fluxo.</p>
                        <h2>Personalizado</h2>
                        <Button text="Baixar agora" secondary/>
                        <hr className="card-separator" />
                        <ul>
                            <li>Com anúncios</li>
                            <li>Acesso a dados de até 5 estações</li>
                            <li>Receba alertas para múltiplas equipes</li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}