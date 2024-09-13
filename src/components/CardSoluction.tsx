import React from 'react';
import Card from '../components/Card';

const CardSoluction: React.FC = () => {
  return (
    <section id="cards" className="cards-section py-lg">
      <div className="container grid center">
        <Card 
          title="Facilidade" 
          description="Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage." 
        />
        <Card 
          title="Inovação" 
          description="Nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage." 
        />
        <Card 
          title="Tempo" 
          description="Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage." 
        />
      </div>
    </section>
  );
};

export default CardSoluction;
