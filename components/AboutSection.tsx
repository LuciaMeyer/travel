'use client';
import { SlideUp } from '@/components';
import Image from 'next/image';
import { useEffect } from 'react';
import { img } from '../public/images';
import { motion } from 'framer-motion';

interface AboutSectionProps {
  refAbout: React.RefObject<HTMLElement>;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ refAbout }) => {

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const data: any = [
    {
      date: "mayo 2024",
      trip: "Playa del Carmen",
      detail: "México",
      src: img.playaBlur
    },
    {
      date: "julio 2024",
      trip: "Bodega BordeRío",
      detail: "Victoria",
      src: img.victoriaBlur
    },
    {
      date: "septiembre 2024",
      trip: "Esteros del Iberá",
      detail: "Corrientes",
      src: img.iberaBlur
    },
    {
      date: "noviembre 2024",
      trip: "Buenos Aires",
      detail: "Capital",
      src: img.bsasBlur
    },
  ];

  return (
    <section
      ref={refAbout}
      id='about'
      className='flex-1 relative overflow-hidden md:mx-auto mx-6 h-full mt-10'
    >
    {data.map((item: any, index: number) => (
      <div key={index}>
        <SlideUp offset='-300px 0px -300px 0px' >
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            id={`trip-${index}`}
            className="flex flex-col justify-center md:mb-40 mb-20 mt-10"
          >
            <div className="flex flex-col justify-center mb-9 bg-white dark:bg-BGD">
              <span className="md:text-center" style={{ fontSize: '1rem' }}>{ item.date }</span>
              <h2 className="md:text-center font-bold text-LM" style={{ fontSize: '2rem' }}>{ item.trip }</h2>
              <h3 className="md:text-center" style={{ fontSize: '1.5rem' }}>{ item.detail }</h3>
            </div>
            <div className="relative mx-auto mb-4 md:mb-0 w-fit">
              <video
                width="350"
                height="315"
                controls
                className="border border-neutral-300 dark:border-neutral-700"
              >
                <source src={item.src} type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
                <span className="text-white text-2xl font-bold bg-black/20 px-2 py-2 rounded">
                  PRIVATE
                </span>
              </div>
            </div>
          </motion.section> 
        </SlideUp>
      </div>
    ))}
    </section>
  );
};
