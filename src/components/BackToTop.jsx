import React, { useEffect, useRef, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

function BackToTop() {
  const [visible, setVisible] = useState(false);
  const animationRef = useRef(null);

  // SHOW / HIDE BUTTON

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // STOP CUSTOM SCROLL

  const stopScroll = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  // STOP IF USER INTERACTS

  useEffect(() => {
    const stop = () => {
      stopScroll();
    };

    window.addEventListener("wheel", stop, {
      passive: true,
    });

    window.addEventListener("touchstart", stop, {
      passive: true,
    });

    window.addEventListener("pointerdown", stop);

    window.addEventListener("keydown", stop);

    return () => {
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
      window.removeEventListener("pointerdown", stop);
      window.removeEventListener("keydown", stop);
    };
  }, []);

  // CUSTOM SCROLL TO TOP

  const scrollToTop = () => {
    stopScroll();

    const start = window.scrollY;
    const startTime = performance.now();

    // Speed control
    const duration = 900;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      // Ease-out cubic
      const ease =
        1 - Math.pow(1 - progress, 3);

      const currentPosition =
        start * (1 - ease);

      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        animationRef.current =
          requestAnimationFrame(animate);
      } else {
        animationRef.current = null;
      }
    };

    animationRef.current =
      requestAnimationFrame(animate);
  };

  // CLEANUP

  useEffect(() => {
    return () => {
      stopScroll();
    };
  }, []);

  // UI

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed
        bottom-6
        right-6
        z-50

        flex
        h-12
        w-12
        items-center
        justify-center

        border
        border-black/25
        bg-white
        text-black

        transition-all
        duration-500
        ease-out

        hover:-translate-y-1
        hover:border-black/60

        dark:border-white/25
        dark:bg-black
        dark:text-white
        dark:hover:border-white/60

        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
        }
      `}
    >
      <FiArrowUp
        className="
          h-5
          w-5
          transition-transform
          duration-300
          group-hover:-translate-y-0.5
        "
      />
    </button>
  );
}

export default BackToTop;