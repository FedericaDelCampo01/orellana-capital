export function scrollToSection(sectionId: string, duration: number = 1000) {
  const element = document.getElementById(sectionId);
  
  if (element) {
    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Ensure progress does not exceed 1
      const ease = easeInOutQuad(progress); // Easing function
      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        // Use scrollIntoView at the end to ensure the element is fully in view
        element.scrollIntoView({ behavior: 'auto' });
      }
    };

    requestAnimationFrame(animation);
  }
}

// Easing function for smooth scrolling
const easeInOutQuad = (t: number) => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};