import { ICarousel2 } from "./types";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Carousel2 = ({ carouselSlides }: ICarousel2) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative w-full h-[525px] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={carouselSlides[currentSlide].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${carouselSlides[currentSlide].imageUrl})`,
          }}
        >
          <div className="p-8 h-full flex flex-col justify-center">
            <h2 className="text-black text-4xl font-bold">
              {carouselSlides[currentSlide].title}
            </h2>
            <p className="text-black">
              {carouselSlides[currentSlide].subtitle}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-1 space-x-2">
        {carouselSlides.map((_, idx) => (
          <button
            aria-label="dot button"
            key={idx}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? "bg-red-500" : "bg-white"
            }`}
            onClick={() => setCurrentSlide(idx)}
          ></button>
        ))}
      </div>
    </div>
  );
};
