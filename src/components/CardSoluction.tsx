import React from 'react';
import Card from '../components/Card';

const getIconForCard = (title: string, description: string) => {
  const content = `${title} ${description}`.toLowerCase();

  if (content.includes('inovação') || content.includes('inovacao')) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8 14a4 4 0 0 1 8 0c0 1.3-.5 2.4-1.5 3.3-.6.6-.5 1.6-.5 1.6H10s.1-1-.5-1.6A4.8 4.8 0 0 1 8 14Z" />
        <path d="M12 2v2" />
        <path d="m4.9 5.1 1.4 1.4" />
        <path d="M2 12h2" />
        <path d="m19.1 5.1-1.4 1.4" />
        <path d="M22 12h-2" />
      </svg>
    );
  }

  if (content.includes('facilidade') || content.includes('interface')) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x={3} y={3} width={18} height={18} rx={3} />
        <path d="M7 7h4v4H7z" />
        <path d="M7 15h4" />
        <path d="M15 15h2" />
        <path d="M15 11h4" />
      </svg>
    );
  }

  if (content.includes('tempo') || content.includes('alerta')) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx={12} cy={12} r={8} />
        <path d="M12 8v4l3 2" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.9 4.9 1.4 1.4" />
        <path d="m17.7 17.7 1.4 1.4" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx={12} cy={12} r={9} />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
};

const cardData = [
  {
    title: 'Inovação',
    description:
      'Disponibilizar um serviço de coleta de dados mais barato e acessível',
  },
  {
    title: 'Facilidade',
    description:
      'Interface intuitiva, mapa interativo, filtros e busca por estação.',
  },
  {
    title: 'Tempo',
    description:
      'Disponibilizar dados para tomadas de decisões rápidas além de mandar alertas personalizados.',
  },
];

const CardSoluction: React.FC = () => {
  return (
    <section id="cards" className="cards-section py-lg">
      <div className="container grid center">
        {cardData.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            icon={getIconForCard(card.title, card.description)}
          />
        ))}
      </div>
    </section>
  );
};

export default CardSoluction;
