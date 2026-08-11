import React from 'react'
import Me from "../assets/Me.png";
import { scrollToSection } from '../utils/smoothScroll';
import { useEffect, useRef } from "react";


function Hero() {

  const heroRef = useRef(null);
const heroContentRef = useRef(null);


//Scroll triggered animation 

useEffect(() => {
  const handleScroll = () => {
    const hero = heroRef.current;
    const content = heroContentRef.current;

    if (!hero || !content) return;

    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight;

    const progress = Math.min(
      Math.max(scrollY / heroHeight, 0),
      1
    );

    const scale = 1 - progress * 0.06;
    const translateY = -progress * 40;

    content.style.transform = `
      translateY(${translateY}px)
      scale(${scale})
    `;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    
    <section
      ref={heroRef}
      id="home"
      className="relative h-[calc(100vh-4rem)] overflow-hidden bg-black text-white"
    >

      <div
        ref={heroContentRef}
        className="h-full w-full"
      >
        <h1
          className="
            absolute
            top-[8%]
            left-1/2
            z-10
            -translate-x-1/2
            font-display
            tracking-widest
            whitespace-nowrap
            text-[clamp(8rem,23vw,24rem)]
            font-black
            leading-none
            
          "
        >
          SHIVAM
        </h1>


        <img
          src= {Me}
          alt="Shivam Chaudhary"
          className="
            absolute
            bottom-0
            left-[70%]
            z-20

            h-full
            w-auto
            max-w-none
            -translate-x-1/2

            object-contain
            object-bottom
          "
        />

        <h2
          className="
            absolute
            left-[10%]
            top-[48%]
            z-30
            font-display
            whitespace-nowrap
            text-[clamp(3rem,7vw,8rem)]
            font-black
            leading-none
            tracking-[0.04em]

            text-white
          "
        >
          CHAUDHARY
        </h2>

        <div
          className="
            absolute
            bottom-[10%]
            left-[10%]
            z-30

            max-w-xl
          "
        >
          <h3
            className="
              text-xl
              font-bold
              tracking-wide
            "
          >
            MAKE. BREAK. IMPROVE.
          </h3>

          <p
            className="
              mt-4
              max-w-lg
              text-lg
              leading-relaxed
              text-white/80
            "
          >
            Turning ideas into interfaces people want to use.
          </p>


          <button
            onClick={() => scrollToSection("projects")}
            className="
              group
              mt-4
              max-w-lg
              text-lg
              leading-relaxed
              text-white
              flex
              items-center
            "
          >
            <span className='mr-2'>[ </span>
            <span className="relative block h-7 overflow-hidden">

              <span
                className="
                  block
                  transition-transform
                  duration-200
                  group-hover:translate-y-full
                "
              >
                VIEW MY WORK 
              </span>

              <span
                className="
                  absolute
                  left-0
                  bottom-full
                  block
                  transition-transform
                  duration-200
                  group-hover:translate-y-full
                "
              >
                VIEW MY WORK 
              </span>

            </span>
            <span className='ml-2'> ]</span>
          </button>
        </div>


        <button
          onClick={() => scrollToSection("footer")}
          className="
            absolute
            bottom-6
            right-8
            z-30
            hidden
            flex-col
            items-center
            gap-2
            animate-pulse
            [animation-duration:3s]
            text-xs
            tracking-[0.2em]
            text-white
            md:flex
          "
        >
          <span>SCROLL</span>

          <span className="text-lg">
            ↓
          </span>
        </button>

        </div>
      </section>
  );
}

export default Hero;