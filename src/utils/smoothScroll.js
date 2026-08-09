let animationFrame = null;

export const scrollToSection = (sectionId, duration = 1800) => {
  const section = document.getElementById(sectionId);

  if (!section) return;

  cancelAnimationFrame(animationFrame);

  const start = window.scrollY;
  const target = section.getBoundingClientRect().top + window.scrollY;
  const distance = target - start;

  let startTime = null;

  const stopScroll = () => {
    cancelAnimationFrame(animationFrame);

    window.removeEventListener("wheel", stopScroll);
    window.removeEventListener("touchstart", stopScroll);
    window.removeEventListener("keydown", stopScroll);
  };

  window.addEventListener("wheel", stopScroll, { passive: true });
  window.addEventListener("touchstart", stopScroll, { passive: true });
  window.addEventListener("keydown", stopScroll);

  const animateScroll = (currentTime) => {
    if (!startTime) startTime = currentTime;

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const easedProgress =
      progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    window.scrollTo(
      0,
      start + distance * easedProgress
    );

    if (progress < 1) {
      animationFrame = requestAnimationFrame(animateScroll);
    } else {
      window.removeEventListener("wheel", stopScroll);
      window.removeEventListener("touchstart", stopScroll);
      window.removeEventListener("keydown", stopScroll);
    }
  };

  animationFrame = requestAnimationFrame(animateScroll);
};