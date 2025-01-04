'use client';
import { AboutSection, HeroSection, ClosingMessage } from '@/components';
import React, { useContext } from 'react';
import { sectionContext } from '@/context/sectionContext';


export default function Home() {

  const objetcContext = useContext(sectionContext);
  const { refHero, refAbout, refEnd, useIsInViewport  } = objetcContext.sectionsRef;
  const setSection = objetcContext.setSection;


  const hero = useIsInViewport(refHero);
  const about = useIsInViewport(refAbout);
  const end = useIsInViewport(refEnd)

  !!hero && setSection('home')
  !!about && setSection('about')
  !!end && setSection('end')

  return (
    <main>
      <HeroSection refHero={refHero} />
      <AboutSection refAbout={refAbout} />
      <ClosingMessage refEnd={refEnd} />
    </main>
  );
}
