// components/Footer.tsx
import '../styles/footer.css';
import myLogo from "../assets/logo/logo4.png";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-logo">
                    <img src={myLogo} alt="LogoMarca"/>
                </div>
                <div className="footer-links">
                    <div>
                        <h4>Redes Sociais</h4>
                        <ul>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">FaceBook</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Empresa</h4>
                        <ul>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Faça parte do time</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Funcionalidades</h4>
                        <ul>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Análise de dados</a></li>
                            <li><a href="#">Boot discord</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Recursos</h4>
                        <ul>
                            <li><a href="#">IOS & Android</a></li>
                            <li><a href="#">Teste a Demo</a></li>
                            <li><a href="#">Clientes</a></li>
                            <li><a href="#">API</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Feito com amor na aula de Programação Web  ©2024 Lucas L. Lopes - Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
