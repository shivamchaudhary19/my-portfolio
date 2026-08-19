import React, { useEffect, useRef } from "react";

function CursorFlow({ children }) {
  const mainGlowRef = useRef(null);
  const trailGlowRef = useRef(null);

  const mouse = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const mainPosition = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const trailPosition = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    // Disable on touch devices / phones
    const isTouchDevice = window.matchMedia(
      "(hover: none)"
    ).matches;

    if (isTouchDevice) return;

    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
      { passive: true }
    );

    let animationFrame;

    const animate = () => {
      // Main glow
      mainPosition.current.x +=
        (mouse.current.x - mainPosition.current.x) * 0.14;

      mainPosition.current.y +=
        (mouse.current.y - mainPosition.current.y) * 0.14;

      // Outer trailing glow
      trailPosition.current.x +=
        (mouse.current.x - trailPosition.current.x) * 0.06;

      trailPosition.current.y +=
        (mouse.current.y - trailPosition.current.y) * 0.06;

      if (mainGlowRef.current) {
        mainGlowRef.current.style.transform = `
          translate3d(
            ${mainPosition.current.x}px,
            ${mainPosition.current.y}px,
            0
          )
          translate(-50%, -50%)
        `;
      }

      if (trailGlowRef.current) {
        trailGlowRef.current.style.transform = `
          translate3d(
            ${trailPosition.current.x}px,
            ${trailPosition.current.y}px,
            0
          )
          translate(-50%, -50%)
        `;
      }

      animationFrame =
        requestAnimationFrame(animate);
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="relative">
      {children}

      {/* OUTER TRAILING BLACK GLOW */}

      <div
        ref={trailGlowRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9990]

          hidden
          h-56
          w-56

          rounded-full
          bg-black
          dark:bg-white
          opacity-[0.1]
          blur-3xl

          md:block
        "
      />

      {/* MAIN BLACK GLOW */}

      <div
        ref={mainGlowRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9991]

          hidden
          h-32
          w-32

          rounded-full
          bg-black
          dark:bg-white
          opacity-[0.15]
          blur-2xl

          md:block
        "
      />
    </div>
  );
}

export default CursorFlow;