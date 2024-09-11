// import React, { useRef, useState } from 'react';
// import TestimonialCard from '../components/TestimonialCard.tsx';

// const testimonials = [
//     {
//         image: 'https://via.placeholder.com/150',
//         name: 'Mr Beast',
//         position: 'CEO do Yotube',
//         stars: 5,
//         testimony: 'A solução da Verdex transformou nossa forma de monitorar as condições ambientais!',
//     },
//     {
//         image: 'https://via.placeholder.com/150',
//         name: 'Billy Bruto',
//         position: 'Diretora de Operações na The Boys',
//         stars: 4,
//         testimony: 'Excelente plataforma, agora estamos sempre atualizados sobre o clima.',
//     },
//     {
//         image: 'https://via.placeholder.com/150',
//         name: 'Manoel Gomes',
//         position: 'Gerente de Fazenda Z',
//         stars: 5,
//         testimony: 'Ferramenta indispensável para quem trabalha com áreas rurais.',
//     }   
// ];

// const TestimonialCarousel: React.FC = () => {
//     const carouselRef = useRef<HTMLDivElement>(null);
//     const [isDragging, setIsDragging] = useState(false);
//     const [startPosition, setStartPosition] = useState(0);
//     const [scrollLeft, setScrollLeft] = useState(0);

//     const handleMouseDown = (e: React.MouseEvent) => {
//         setIsDragging(true);
//         setStartPosition(e.pageX - carouselRef.current!.offsetLeft);
//         setScrollLeft(carouselRef.current!.scrollLeft);
//     };

//     const handleMouseLeave = () => {
//         setIsDragging(false);
//     };

//     const handleMouseUp = () => {
//         setIsDragging(false);
//     };

//     const handleMouseMove = (e: React.MouseEvent) => {
//         if (!isDragging) return;
//         e.preventDefault();
//         const x = e.pageX - carouselRef.current!.offsetLeft;
//         const walk = (x - startPosition) * 1; // Velocidade de arraste
//         carouselRef.current!.scrollLeft = scrollLeft - walk;
//     };

//     return (
//         <div 
//             className="testimonial-carousel"
//             ref={carouselRef}
//             onMouseDown={handleMouseDown}
//             onMouseLeave={handleMouseLeave}
//             onMouseUp={handleMouseUp}
//             onMouseMove={handleMouseMove}
//         >
//             {testimonials.map((testimonial, index) => (
//                 <TestimonialCard key={index} {...testimonial} />
//             ))}
//         </div>
//     );
// };

// export default TestimonialCarousel;



import React, { useRef, useState } from 'react';
import TestimonialCard from '../components/TestimonialCard.tsx';    
import BillyBrutoImagem from '../assets/images/billy.jpg';
import MrBeastImagem from '../assets/images/mrbeast.jpg'; 
import CjImagem from '../assets/images/cj.jpg'  
const testimonials = [
    {
        image: MrBeastImagem,
        name: 'Mr Beast',
        position: 'CEO do Yotube',
        stars: 5,
        testimony: 'A solução da Verdex transformou nossa forma de monitorar as condições ambientais para os meus videos',
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
    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartPosition(e.pageX - carouselRef.current!.offsetLeft);
        setScrollLeft(carouselRef.current!.scrollLeft);
    };

    const handleMouseLeaveOrUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const x = e.pageX - carouselRef.current!.offsetLeft;
        const walk = (x - startPosition) * 1.5; // Ajusta a velocidade de arraste
        carouselRef.current!.scrollLeft = scrollLeft - walk;
    };

    return (
        <div
            className="testimonial-carousel"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
        >
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
            ))}
        </div>
    );
};

export default TestimonialCarousel;
