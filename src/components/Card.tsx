import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="card solution-card">
      {icon && <div className="card-icon">{icon}</div>}
      <div className="card-text">
        <h3>{title}</h3>
        <span className="card-divider" />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
