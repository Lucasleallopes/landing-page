import React from 'react';

interface TestimonialProps {
    image: string;
    name: string;
    position: string;
    stars: number;
    testimony: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ image, name, position, stars, testimony }) => {
    return (
        <div className="testimonial-card">
            <img src={image} alt={`${name}'s photo`} className="testimonial-image" />
            <p className="testimonial-text">"{testimony}"</p>
            <div className="testimonial-stars">
                {"★".repeat(stars)}
                {"☆".repeat(5 - stars)}
            </div>
            <h3>{name}</h3>
            <p className="testimonial-position">{position}</p>
        </div>
    );
};

export default TestimonialCard;
    