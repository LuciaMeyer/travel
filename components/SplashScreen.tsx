'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import logo_screen from "@/public/logo_screen.png";


export const SplashScreen = () => {

const [showSplash, setShowSplash] = useState(true);

useEffect(() => {
    setTimeout(() => {
    setShowSplash(false);
    }, 1800);
}, []);

const show = {
    transition: { duration: 1 },
    opacity: 1,
    scale: 1,
  };

  const hide = {
    transition: { duration: 0.5 },
    opacity: 0,
    scale: 1,
  };

  return (
    <main>
      <div
        className='flex items-center justify-center h-screen bg-LM'
      >
        <motion.div
          className='-mt-24 md:my-auto invert'
          initial={{ opacity: 0, scale: 0 }}
          animate={showSplash ? show : hide}
        > 
          <Image
            src={logo_screen}
            alt='LM'
            width={200}
            height={200}
            priority
          />
        </motion.div>
      </div>
    </main>
  );
};
