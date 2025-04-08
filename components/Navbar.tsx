"use client";
import { ParticlesComponents } from "@/components";
import Image from "next/image";
import { useContext, useState } from "react";
import { Link as LinkR } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { img } from "@/public/images";
import logo from "@/public/logo_t.png";
import { CiDark } from "react-icons/ci";
import { CiBrightnessDown } from "react-icons/ci";
import { motion } from "framer-motion";
import { screenContext } from "@/context/screenContext";
import { sectionContext } from "@/context/sectionContext";
import { usePathname } from "next/navigation";
import Link from 'next/link'


export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [showParticles, setShowParticles] = useState(true);
  const isMobile = useContext(screenContext);
  const objetcContext = useContext(sectionContext);
  const section = objetcContext.section;
  const setSection = objetcContext.setSection;
  const pathname = usePathname();

  const hanldeLogoClick = () => {
    window.scrollTo(0, 0);
    setSection("home");
  };

  return (
    <>
      {showParticles && (
        <div className="-z-50 absolute h-96">
          <ParticlesComponents />
        </div>
      )}
      <header className="w-full mx-auto fixed top-0 z-30 md:shadow-2xl md:shadow-neutral-200 dark:shadow-neutral-900 dark:bg-BGD/50">
        <div className="flex items-center justify-between backdrop-blur-md ">
          {/* LOGO */}
          {pathname === "/" ? (
            <>
              {isMobile && (section === "home" || section === "") ? (
                <div className="h-14"></div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={
                    isMobile ? { duration: 1 } : { duration: 1, delay: 2 }
                  }
                  className="flex md:ml-8 ml-4 cursor-pointer md:h-auto h-14"
                >
                  <LinkR
                    to="home"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onClick={hanldeLogoClick}
                  >
                    <Image
                      className="md:my-4 md:mt-4 mt-2 md:w-full hover:scale-90 transform transition-all duration-300"
                      src={logo}
                      alt="LM"
                      width={50}
                      height={50}
                      priority
                    />
                  </LinkR>
                </motion.div>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={
                isMobile ? { duration: 1 } : { duration: 1, delay: 2 }
              }
              className="md:h-auto h-14"
            >
              <Link href='/'>
                <div className="flex md:ml-8 ml-4 cursor-pointer">
                  <Image
                    className="md:my-4 md:mt-4 mt-2 md:w-full hover:scale-90 transform transition-all duration-300"
                    src={img.LMb}
                    alt="LM"
                    width={50}
                    height={50}
                    priority
                  />
                </div>
              </Link>
            </motion.div>
          )}
          <motion.div
            className="relative cursor-pointer md:px-6 pr-2 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <div className="flex items-center justify-between transition-all">
              {/* FONDO */}
              <div className="flex relative transition-transform duration-500 hover:scale-90">
                <button
                  onClick={() => setShowParticles(!showParticles)}
                  className="bg-inherit text-LM text-lg tracking-widest"
                  style={{ fontWeight: 800 }}
                >
                  {`${!showParticles ? "VER FONDO" : "SIN FONDO"}`}
                </button>
              </div>
              {/* SOL Y LUNA */}
              <div className="flex mr-2 relative items-center justify-center rounded-full w-[40px] h-[40px] transition-transform duration-500 hover:scale-90 ">
                {theme === "dark" ? (
                  <button
                    onClick={() => setTheme("light")}
                    className="bg-inherit text-LM"
                  >
                    <CiBrightnessDown size={22} />
                  </button>
                ) : (
                  <button
                    onClick={() => setTheme("dark")}
                    className="bg-inherit text-LM"
                  >
                    <CiDark size={22} />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </header>
    </>
  );
};
