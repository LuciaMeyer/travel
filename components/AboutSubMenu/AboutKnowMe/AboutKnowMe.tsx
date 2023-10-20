"use client";
import Image from "next/image";
import { img } from "../../../public/images";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-scroll/modules";
import { AboutKnowMeContent1 } from "./AboutKnowMeContent1";
import { AboutKnowMeContent2 } from "./AboutKnowMeContent2";
import { screenContext } from "@/context/screenContext";

export const AboutKnowMe = () => {
  const [showDiv, setShowDiv] = useState(false);
  const isMobile = useContext(screenContext);

  // const images = [img.aux1, img.aux2, img.aux3];

  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, []);

  const handleShowDiv = () => {
    setShowDiv(!showDiv);
  };

  return (
    <>
      <div className="flex md:hidden justify-center">
        <Image width={400} height={400} src={img.auxlu} alt="img" priority />
      </div>
      <div
        className="
        bg-white dark:bg-BGD
        text-justify md:text-justify text-lg
        md:w-1/2 mt-2 md:mt-auto
        flex flex-col md:flex-row mx-auto "
      >
        {!isMobile && !showDiv ? (
          <AboutKnowMeContent1 handleShowDiv={handleShowDiv} />
        ) : !isMobile && showDiv ? (
          <AboutKnowMeContent2 handleShowDiv={handleShowDiv} />
        ) : isMobile ? (
          <>
            <AboutKnowMeContent1 handleShowDiv={handleShowDiv} />
            <AboutKnowMeContent2 handleShowDiv={handleShowDiv} />
          </>
        ) : (
          <></>
        )}
        <div className="md:flex hidden mt-8 ml-7 md:w-1/2">
          <Image
            width={600}
            height={600}
            src={img.aux1}
            alt="Img"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};