import React from 'react'
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import fin from '@/public/fin.jpg';
import fin_a from '@/public/fin_a.jpg';

import { useContext } from 'react';
import { screenContext } from "@/context/screenContext";


export const ClosingMessage: any = ({ refEnd }:any) => {

  const isMobile = useContext(screenContext);

  return (
    <div
      ref={refEnd}
      id='end'
      style={{ fontSize: '1.5rem' }}
      className='leading-snug tracking-wide text-LM text-center font-bold'>
    <div className='mb-10'>
      <span className='text-center mt-4'
        style={{ fontSize: '1.5rem' }}
      >
        continuará...
      </span>
    </div>
    <div style={{ fontSize: isMobile ? '2rem' : '3rem' }}>
      <Typewriter
        options={{ cursor: '|', delay: 75, loop: true }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(1000)
            .typeString('Esto recién empieza!').pauseFor(2000)
            .deleteChars(22)
            .start();
        }}
      />

    </div>
    <div className="w-full mt-28 mb-10">
      <Image
        src={isMobile ? fin_a : fin}
        alt="bg"
        layout="responsive"
        width={1920}
        height={300}
        className="object-cover w-full h-[300px]"
      />
    </div>
  </div>
  )
}
