'use client';
import Image from 'next/image';
import bg from '@/public/bg.png';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll/modules';
import { useContext, useEffect } from 'react';
import { sectionContext } from '@/context/sectionContext';
import Typewriter from 'typewriter-effect';
import SLplaya from "@/public/SLplaya.png";
import { screenContext } from "@/context/screenContext";

interface HeroSectionProps {
  refHero: React.RefObject<HTMLElement>;
}


export const HeroSection: React.FC<HeroSectionProps> = ({ refHero }) => {
  const { setSection } = useContext(sectionContext);
  const isMobile = useContext(screenContext);

  useEffect(() => {
    setSection('home');
  }, []);

  return (
    <>
      <section
        ref={refHero}
        id='home'
        className='flex-1 my-auto md:pt-60 pt-20 pb-30'
      >
        <div className='flex flex-col md:w-2/3 h-full md:flex-row items-center md:justify-between md:mx-auto mx-6 md:items-center content-center'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className='leading-snug tracking-wide text-3xl md:mb-2 '
              style={{ fontSize: isMobile ? '2rem' : '3rem' }}
            >
              Seba y Lu
            </h1>

            <motion.h3
              className='leading-snug tracking-wide font-bold md:text-4xl text-4xl text-LM'
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, type: 'spring' }}
              style={{ fontSize: isMobile ? '2rem' : '2.5rem' }}
            >
              <Typewriter
                options={{ cursor: '|', delay: 75, loop: true }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1000)
                    .typeString('Nuestros Viajes')
                    .pauseFor(600)
                    .deleteAll(20)
                    .typeString('Recuerdos de Aventuras')
                    .pauseFor(600)
                    .pauseFor(600)
                    .start();
                }}
              />
            </motion.h3>

            <hr className='w-8 h-px md:my-10 my-6 bg-stone-300  dark:bg-stone-400 border-0' />
            <p className='relative md:mr-20 -z-10 md:pb-10 pb-8 md:text-lg text-xl'
              style={{ fontSize: isMobile ? '1.3rem' : '1.5rem' }}
            >
              Un viaje se vive 3 veces: cuando lo soñamos, cuando lo vivimos y cuando lo recordamos.
            </p>
            <Link
              to='about'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              className='cursor-pointer bg-white dark:bg-BGD text-black text-[1rem] tracking-wider border-solid border pb-2.5 pt-2 px-4 border-TX/50 dark:border-stone-300/30 transition duration-200 ease dark:text-stone-300/90
              hover:text-LM hover:border-LM dark:hover:text-LM dark:hover:border-LM'
            >
              VER VIAJES
            </Link>
          </motion.div>

          {/* imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className='md:mt-0 mt-14'
          >
            <Image
              width={isMobile ? 500 : 300}
              height={isMobile ? 500 : 300}
              src={SLplaya}
              alt='img'
              priority
              className='md:h-auto md:w-auto h-5/6 w-5/6 transform transition-transform duration-1000 hover:scale-110 md:mx-0 mx-auto md:mt-0 mt-4'
            />
          </motion.div>
        </div>
        <div className="w-full mt-20 md:mt-40">
          <Image
            src={bg}
            alt="bg"
            layout="responsive"
            width={1920}
            height={300}
            className="object-cover w-full h-[300px]"
          />
        </div>
      </section>
    </>
  );
};  
