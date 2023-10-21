import { ICarousel1 } from "./types";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

export const Carousel1 = ({ title, slides }: ICarousel1) => {
  const controls = useAnimation();
  const [numVisibleSlides, setNumVisibleSlides] = useState(3);

  const [currentStart, setCurrentStart] = useState(0);

  const slideRight = () => {
    if (currentStart < slides.length - numVisibleSlides) {
      controls
        .start({
          x: "-100%",
          transition: { duration: 0.5 },
        })
        .then(() => {
          setCurrentStart(currentStart + 1);
          controls.set({ x: "0%" });
        });
    }
  };

  const slideLeft = () => {
    if (currentStart > 0) {
      controls
        .start({
          x: "100%",
          transition: { duration: 0.5 },
        })
        .then(() => {
          setCurrentStart(currentStart - 1);
          controls.set({ x: "0%" });
        });
    }
  };

  const visibleSlides = slides.slice(
    currentStart,
    currentStart + numVisibleSlides
  );

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth <= 800) {
        setNumVisibleSlides(1);
      } else if (window.innerWidth <= 1024) {
        setNumVisibleSlides(2);
      } else {
        setNumVisibleSlides(3);
      }
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);

    return () => {
      window.removeEventListener("resize", updateVisibleSlides);
    };
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {title && (
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h2>
          )}
        </div>
        <div className="relative mt-20 w-full flex items-center">
          <button
            onClick={slideLeft}
            className="absolute left-0 sm:left-4 z-10 rotate-180 w-[20px]"
          >
            <img src="./arrow.svg" alt="arrow" />
          </button>

          <div className="flex w-full overflow-hidden flex justify-between gap-4 sm:mx-[100px]">
            <AnimatePresence>
              {visibleSlides.map((slide, idx) => (
                <motion.div className="w-full" key={idx} animate={controls}>
                  <article
                    key={slide?.id}
                    className="flex flex-col gap-6 items-center text-center"
                  >
                    <span className="font-bold text-xl text-gray-900">
                      {slide?.date}
                    </span>
                    <div className="flex items-center gap-4">
                      <img
                        className="h-14 w-14 object-contain"
                        src={slide?.homeTeamSrc}
                        alt={slide?.homeTeamName}
                      />
                      <span className="font-bold text-gray-900 text-3xl">
                        VS
                      </span>
                      <img
                        className="h-14 w-14 object-contain"
                        src={slide?.awayTeamSrc}
                        alt={slide?.awayTeamName}
                      />
                    </div>

                    {slide?.homeTeamScore && slide?.awayTeamScore && (
                      <div className="flex gap-2 font-bold text-gray-900 text-2xl">
                        <span>{slide?.homeTeamScore}</span>
                        <span>X</span>
                        <span>{slide?.awayTeamScore}</span>
                      </div>
                    )}

                    <div className="flex flex-col text-xs text-gray-900">
                      <div className="flex gap-2 justify-center font-bold text-2xl">
                        <span>{slide?.homeTeamName}</span>
                        <span>vs</span>
                        <span>{slide?.awayTeamName}</span>
                      </div>

                      <span>{slide?.locationName}</span>
                      <span>{slide?.locationAddress}</span>
                    </div>
                  </article>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button
            onClick={slideRight}
            className="absolute right-0 sm:right-4 z-10 w-[20px]"
          >
            <img src="./arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};
