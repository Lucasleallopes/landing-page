import '../styles/utility.css';
import '../styles/header.css';
import "../styles/hero.css";
import '../styles/button.css';
import '../styles/index.css';
import '../styles/footer.css'
import '../styles/carrosel.css'
import { useState } from 'react';
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Close from "../assets/close.svg";
import Menu from "../assets/hamburger.svg";
import Button from '../components/Button.tsx';
import myLogo from "../assets/logo/logo2.svg";
import Footer from '../components/Footer.tsx';
import TestimonialCarousel from '../components/TestimonialCarousel.tsx'

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <>
            <header className='container py-sm'>
                <nav className="flex items-center justify-between">
                    <img src={myLogo} alt="logo" className="logo" width={185} />
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
                    <div className="card">
                        <h3>Facilidade</h3>
                        <p>Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage.</p>
                    </div>
                    <div className="card">
                        <h3>Inovação</h3>
                        <p>Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage.</p>
                    </div>
                    <div className="card">
                        
                        <h3>Tempo</h3>
                        <p>Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage.</p>
                    </div>
                </div>
            </section>

            {/* <section id="cliente-importa" className="hero">
            <div className="container content">
                <p className="desktop-only">
                        Conselho de quem conheçe
                </p>
                <h2>
                    Cada cliente importa
                </h2>
                <p>
                    Inovação é com a gente! O Verdex já conquistou diversos clientes, seja você mais um deles, 
                    veja tudo que pode ganhar com nossos serviços. 
                </p>
            </div>
            </section> */}

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

            {/* <section id='hero'>
            <div className="container content">
                <p className="desktop-only">
                       Receba as melhores novidades
                </p>
                <h2>
                   Junte-se a nós
                </h2>
                <p>
                    Inovação é com a gente! O Verdex já conquistou diversos clientes, seja você mais um deles, 
                    veja tudo que pode ganhar com nossos serviços. 
                </p>
            </div>
            </section> */}
        <Footer />            
        </>
    )
}