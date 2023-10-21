"use client";
import Image from "next/image";
import { img } from "../public/images";
import { Link } from "react-scroll/modules";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import { sectionContext } from "../context/sectionContext";

interface IconsProps {
  section: string;
  setSection: Function;
}

// export const Icons: React.FC<IconsProps> = ({ section, setSection }) => {

export const Icons: React.FC<IconsProps> = () => {
  const objetcContext = useContext(sectionContext);
  const section = objetcContext.section;
  const setSection = objetcContext.setSection;
  const [endPage, setEndPage] = useState(false);
  const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
  // const scrollY = window.scrollY

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const pageHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const threshold = 100;
        if (scrollY + windowHeight >= pageHeight - threshold) {
          console.log("final de la página");
          setEndPage(true);
        } else setEndPage(false);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    !!endPage && setSection("");
  }, [endPage]);

  const handleClick = (current: string) => {
    const sections = [
      "home",
      "about",
      "projects",
      "resources",
      "contact",
      "home",
    ];
    const index = sections.indexOf(current);
    setSection(sections[index + 1] || "home");
  };

  return (
    <motion.div
      className="z-50 fixed bottom-0 flex w-full justify-center
    bg-white dark:bg-BGD md:bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <div className="flex flex-col md:fixed md:left-12 md:bottom-24 bottom-12">
        <div className="md:w-6 w-36 mx-auto dark:opacity-60 md:block flex flex-row my-2 md:my-0 items-center">
          <a
            href="https://www.linkedin.com/in/lucia-meyer-65633a143/"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              width="50"
              height="50"
              className="md:mb-4 md:px-0 px-2 opacity-40 dark:invert dark:opacity-100 transform transition-transform duration-300 hover:scale-75"
              src={img.in}
              alt="img"
              priority
            />
          </a>
          <a
            href="https://github.com/LuciaMeyer"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              width="50"
              height="50"
              className="md:mb-4 md:px-0 px-2 opacity-40 dark:invert dark:opacity-100 transform transition-transform duration-300 hover:scale-75"
              src={img.gh}
              alt="img"
              priority
            />
          </a>
          <a
            href="mailto:luciameyer1603@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              width="50"
              height="50"
              className="md:mb-4 md:px-0 px-2 opacity-40 dark:invert dark:opacity-100 transform transition-transform duration-300 hover:scale-75"
              src={img.mail}
              alt="img"
              priority
            />
          </a>
          <a
            href="https://www.instagram.com/luciameyer_/"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              width="50"
              height="50"
              className="md:px-0 px-2 opacity-40 dark:invert dark:opacity-100 transform transition-transform duration-300 hover:scale-75"
              src={img.ig}
              alt="img"
              priority
            />
          </a>
        </div>
      </div>

      <hr className="md:flex hidden fixed bottom-6 left-0.5 h-[1.5px] w-28 rotate-90 bg-stone-400 dark:bg-TX" />

      <div
        className={`md:w-10 w-12 fixed md:bottom-16 bottom-12 md:right-12 right-4  
         transform transition-transform duration-300 md:hover:scale-75
          ${section === "contact" && "rotate-180"}
          ${!!endPage ? "rotate-180" : "rotate-0"}
          `}
      >
        <Link
          to={
            section === "home"
              ? "about"
              : section === "about"
              ? "projects"
              : section === "projects"
              ? "resources"
              : section === "resources"
              ? "contact"
              : "home"
          }
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          onClick={() => handleClick(section)}
          className="cursor-pointer"
        >
          <Image width="50" height="50" src={img.fl_am} alt="img" priority />
        </Link>
      </div>
    </motion.div>
  );
};
