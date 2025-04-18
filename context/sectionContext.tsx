"use client";
import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useRef,
} from "react";

export const sectionContext = createContext<any>(null);

export const SectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  function useIsInViewport(ref: any) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    if (typeof IntersectionObserver !== "undefined") {
      const observer = useMemo(
        () =>
          new IntersectionObserver(([entry]) =>
            setIsIntersecting(entry.isIntersecting)
          ),
        []
      );

      useEffect(() => {
        observer.observe(ref.current);

        return () => {
          observer.disconnect();
        };
      }, [ref, observer]);
    }

    return isIntersecting;
  }

  const refHero = useRef<HTMLDivElement | null>(null);
  const refAbout = useRef<HTMLDivElement | null>(null);
  const refEnd = useRef<HTMLDivElement | null>(null);


  const sectionsRef = {
    refHero,
    refAbout,
    refEnd,
    useIsInViewport,
  };

  const [section, setSection] = useState("home");

  return (
    <sectionContext.Provider value={{ sectionsRef, section, setSection }}>
      {children}
    </sectionContext.Provider>
  );
};
