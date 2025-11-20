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
    const contentRef = useRef<HTMLDivElement>(null);
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    useEffect(() => {
        const carousel = carouselRef.current;
        const content = contentRef.current;
        if (!carousel || !content) return;

        const getLoopWidth = () => content.scrollWidth / 2;

        let loopWidth = getLoopWidth();
        let offset = 0;
        const scrollSpeed = 3; // pixels per frame
        let animationFrameId: number | null = null;

        const step = () => {
            if (loopWidth <= 0) {
                animationFrameId = requestAnimationFrame(step);
                return;
            }

            offset += scrollSpeed;
            if (offset >= loopWidth) {
                offset -= loopWidth;
            }

            content.style.transform = `translateX(-${offset}px)`;
            animationFrameId = requestAnimationFrame(step);
        };

        const startScroll = () => {
            if (animationFrameId !== null) return;
            animationFrameId = requestAnimationFrame(step);
        };

        const stopScroll = () => {
            if (animationFrameId === null) return;
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        };

        const handleResize = () => {
            loopWidth = getLoopWidth();
            if (loopWidth > 0) {
                offset = offset % loopWidth;
            }
        };

        startScroll();

        carousel.addEventListener('mouseenter', stopScroll);
        carousel.addEventListener('mouseleave', startScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            stopScroll();
            carousel.removeEventListener('mouseenter', stopScroll);
            carousel.removeEventListener('mouseleave', startScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="testimonial-carousel" ref={carouselRef}>
            <div className="scrolling-content" ref={contentRef}>
                {duplicatedTestimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel;
