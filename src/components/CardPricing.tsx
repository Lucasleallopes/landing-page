import React from 'react';
import Button from '../components/Button';

const CardPricing: React.FC = () => {
  return (
    <section id="precos" className="pricing-section py-lg">
      <div className="container grid center">
        <div className="card pricing-card">
          <h3>Básico</h3>
          <p>Baixe a ferramenta e comece a utilizar agora mesmo!</p>
          <h2>Grátis</h2>
          <Button text="Baixar agora" secondary />
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
          <h2>R$ 69,90/mês</h2>
          <Button text="Experimente de graça" />
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
          <Button text="Baixar agora" secondary />
          <hr className="card-separator" />
          <ul>
            <li>Sem Anúncios</li>
            <li>Acesso a dados de estações personalizados</li>
            <li>Receba alertas para múltiplas equipes</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CardPricing;
