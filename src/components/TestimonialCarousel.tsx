import React, { useRef, useEffect } from 'react';
import TestimonialCard from '../components/TestimonialCard.tsx';
import BillyBrutoImagem from '../assets/images/billy.jpg';
import MrBeastImagem from '../assets/images/mrbeast.jpg';
import CjImagem from '../assets/images/cj.jpg';

const testimonials = [
    {
        image: MrBeastImagem,
        name: 'Mr Beast',
        position: 'CEO do Youtube',
        stars: 5,
        testimony: 'A solução da Verdex transformou nossa forma de monitorar as condições ambientais para os meus vídeos.',
    },
    {
        image: BillyBrutoImagem,
        name: 'Billy Bruto',
        position: 'Diretora de Operações na The Boys',
        stars: 4,
        testimony: 'Excelente plataforma, agora estamos sempre atualizados sobre o clima.',
    },
    {
        image: CjImagem,
        name: 'Carl Johnson',
        position: 'Freelancer',
        stars: 5,
        testimony: 'Ferramenta indispensável para quem trabalha nas ruas e nas áreas rurais.',
    },
];

const TestimonialCarousel: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const carousel = carouselRef.current;

        if (!carousel) return;

        let animationFrameId: number;
        const scrollSpeed = 0.5;

        const scroll = () => {
            if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
                carousel.scrollLeft = carousel.scrollLeft - carousel.scrollWidth / 2;
            }
            carousel.scrollLeft += scrollSpeed;
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        const handleMouseEnter = () => cancelAnimationFrame(animationFrameId);
        const handleMouseLeave = () => {
            animationFrameId = requestAnimationFrame(scroll);
        };

        carousel.addEventListener('mouseenter', handleMouseEnter);
        carousel.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationFrameId);
            carousel.removeEventListener('mouseenter', handleMouseEnter);
            carousel.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="testimonial-carousel" ref={carouselRef}>
            <div className="scrolling-content">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel;
