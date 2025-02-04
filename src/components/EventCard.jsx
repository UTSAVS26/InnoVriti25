"use client"

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useState, useRef } from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const eventImages = {
  1: "/images/1.jpg",
  2: "/images/2.jpg",
  3: "/images/3.jpg",
  4: "/images/4.jpg",
  5: "/images/5.jpg",
  6: "/images/6.jpg",
  7: "/images/7.jpg",
  8: "/images/8.jpg",
  9: "/images/9.jpg",
};

const EventCard = ({ event }) => {
  const eventImage = eventImages[event.img];
  const controls = useAnimation();
  const cardRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimation = async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = window.innerWidth / 2 - rect.left - rect.width / 2;
    const centerY = window.innerHeight / 2 - rect.top - rect.height / 2;

    await controls.start({
      x: centerX,
      y: centerY,
      transition: { duration: 0.5, ease: "easeInOut" }
    });

    await controls.start({
      scale: Math.max(window.innerWidth / rect.width, window.innerHeight / rect.height),
      transition: { duration: 2.0, ease: "easeInOut" }
    });

    window.location.href = event.link;
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative flex w-80 lg:w-[50vh] h-[72vh] flex-col rounded-3xl bg-black bg-opacity-65
      text-white transition-all duration-300 ml-4 mb-[-4] items-center justify-between p-6
      overflow-hidden "
      animate={controls}
      style={{ originZ: 0.5 }}
      whileHover={{ scale: 1.1, zIndex: 10 }}  // Increase zIndex on hover
      transition={{ duration: 0.3 }}
    >
      {/* Content Container */}
      <motion.div
        animate={{
          opacity: isAnimating ? 0 : 1,
          transition: { duration: 1.2 }
        }}
        className="w-full h-full flex flex-col"
      >
        {/* Image Section */}
        <motion.div
          className="relative w-full h-48 flex justify-center items-center rounded-3xl shadow-lg overflow-hidden"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={eventImage}
            alt={event.title}
            className="w-full h-full object-cover rounded-3xl"
            width={360}
            height={192}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div className="flex flex-col text-center flex-grow px-4 mt-14">
          <motion.h5 
            className={`${orbitron.className} text-2xl md:text-3xl font-bold text-white tracking-wide mb-3`}
          >
            {event.title}
          </motion.h5>
          <p className="text-lg font-light">{event.shortDescription}</p>
        </motion.div>

        {/* Button Section with Glow Effect */}
        <div className="mt-auto w-full">
          <div className="relative group">
            <motion.button 
              onClick={handleAnimation}
              disabled={isAnimating}
              className="relative inline-block p-px font-semibold leading-6 text-white
              bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-all 
                duration-500 ease-in-out hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed w-full"
            >
              {/* Glow Effect */}
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"></span>
              
              {/* White Glow Border */}
              <span className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/40 transition-all duration-500"></span>
              
              <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                <div className="relative z-10 flex items-center justify-center space-x-2">
                  <span className="transition-all duration-500 group-hover:translate-x-1">
                    {isAnimating ? "Entering..." : "Read More"}
                  </span>
                  <svg
                    className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                    aria-hidden="true"
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path
                      clipRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EventCard;