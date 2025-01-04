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
      src: img.playa
    },
    {
      date: "julio 2024",
      trip: "Bodega BordeRío",
      detail: "Victoria",
      src: img.victoria
    },
    {
      date: "septiembre 2024",
      trip: "Esteros del Iberá",
      detail: "Corrientes",
      src: img.ibera
    },
    {
      date: "noviembre 2024",
      trip: "Buenos Aires",
      detail: "Capital",
      src: img.bsas
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
            <div className="mx-auto mb-4 md:mb-0">
              <video
                width="350"
                height="315"
                controls
                className="border border-neutral-300 dark:border-neutral-700"
              >
                <source src={item.src} type="video/mp4" />
              </video>
            </div>
          </motion.section> 
        </SlideUp>
      </div>
    ))}
    </section>
  );
};
