import React from "react";
import Me from "../assets/Me.png";
import { scrollToSection } from "../utils/smoothScroll";
import { useEffect, useRef } from "react";

function Hero() {
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);

  // Scroll triggered animation
  useEffect(() => {
    const handleScroll = () => {
      const hero = heroRef.current;
      const content = heroContentRef.current;

      if (!hero || !content) return;

      const isMobile = window.innerWidth < 768;

      const scrollY = window.scrollY;
      const heroHeight = hero.offsetHeight;

      const progress = Math.min(
        Math.max(scrollY / heroHeight, 0),
        1
      );

      // Subtler effect on mobile so the hero doesn't visually collapse while scrolling
      const scale = isMobile
        ? 1 - progress * 0.015
        : 1 - progress * 0.06;

      const translateY = isMobile
        ? -progress * 10
        : -progress * 40;

      content.style.transform = `
        translateY(${translateY}px)
        scale(${scale})
      `;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="
        relative
        min-h-[calc(100vh-4rem)]
        md:h-[calc(100vh-4rem)]
        overflow-hidden

        bg-white
        text-black

        dark:bg-black
        dark:text-white
      "
    >

      <div
        ref={heroContentRef}
        className="
          flex
          relative
          flex-col
          items-start
          gap-10
          px-6
          py-14
          w-full

          md:block
          md:h-full
          md:w-full
          md:px-0
          md:py-0
          md:gap-0
        "
      >

        {/* SHIVAM */}

        <h1
          className="
            order-1

            md:absolute
            md:top-[8%]
            md:left-1/2
            md:-translate-x-1/2

            z-10

            font-display
            tracking-[0.05em]
            md:tracking-widest

            whitespace-nowrap

            text-[clamp(5rem,27vw,7rem)]
            md:text-[clamp(8rem,23vw,24rem)]

            font-black
            leading-none

            text-transparent

            [-webkit-text-stroke:1.5px_black]
            dark:[-webkit-text-stroke:1.5px_white]

            md:text-black
            md:[-webkit-text-stroke:0px_transparent]

            dark:md:text-white
          "
        >
          SHIVAM
        </h1>


        {/* IMAGE WRAPPER */}

        <div
          className="
            order-2
            relative
            z-20

            w-full

            md:static
            md:order-none
            md:w-auto
            md:z-40
          "
        >

          {/* MOBILE IMAGE */}

          <div
            className="
              relative
              left-1/2
              w-[112vw]
              -translate-x-1/2

              md:hidden
            "
          >

            <img
              src={Me}
              alt="Shivam Chaudhary"
              className="
                block
                w-full
                max-w-none
                object-contain
                object-bottom
              "
            />

            {/* DARK FADE */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                z-30
                h-[42%]

                bg-gradient-to-t
                from-black
                via-black/80
                to-transparent
              "
            />

          </div>


          {/* DESKTOP IMAGE */}

          <img
            src={Me}
            alt="Shivam Chaudhary"
            className="
              hidden

              md:absolute
              md:bottom-0
              md:left-[70%]
              md:top-auto
              md:block

              md:h-full
              md:w-auto
              md:max-w-none

              md:-translate-x-1/2

              md:object-bottom

              md:z-40
            "
          />

        </div>


        {/* CHAUDHARY */}

        <h2
          className="
            hidden

            md:block
            md:absolute
            md:left-[10%]
            md:top-[48%]

            z-30

            font-display
            whitespace-nowrap

            text-[clamp(3rem,7vw,8rem)]

            font-black
            leading-none
            tracking-[0.04em]

            text-black

            dark:text-white
          "
        >
          CHAUDHARY
        </h2>


        {/* INTRO CONTENT */}

        <div
          className="
            order-3

            md:absolute
            md:bottom-[10%]
            md:left-[10%]

            z-30

            w-full
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

              text-black/80

              dark:text-white/80
            "
          >
            Turning ideas into interfaces people want to use.
          </p>


          {/* VIEW MY WORK */}

          <button
            onClick={() => scrollToSection("projects")}
            className="
              group
              mt-4
              max-w-lg
              text-lg
              leading-relaxed
              flex
              items-center

              text-black

              dark:text-white
            "
          >

            <span className="mr-2">
              [
            </span>


            <span
              className="
                relative
                block
                h-7
                overflow-hidden
              "
            >

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


            <span className="ml-2">
              ]
            </span>

          </button>

        </div>

        {/* SCROLL BUTTON */}

        <button
          onClick={() => scrollToSection("contact")}
          aria-label="Scroll to Contact section"
          className="
            absolute
            bottom-6
            right-5

            z-[60]

            flex
            flex-col
            items-center
            gap-2

            animate-pulse
            [animation-duration:3s]

            text-[10px]
            tracking-[0.2em]

            text-black

            transition-colors
            duration-300

            hover:text-black/60

            dark:text-white
            dark:hover:text-white/60

            sm:right-8
            md:bottom-6
            md:text-xs
          "
        >
          <span>
            SCROLL
          </span>

          <span
            className="
              text-lg
              transition-transform
              duration-300
              group-hover:translate-y-1
            "
          >
            ↓
          </span>
        </button>

      </div>
    </section>
  );
}

export default Hero;