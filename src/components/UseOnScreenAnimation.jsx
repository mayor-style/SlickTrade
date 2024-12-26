import { useEffect } from "react";

const useOnScreenAnimation = (hiddenClass, showClass) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(showClass);
          // Optionally disconnect observer after triggering
          observer.unobserve(entry.target);
        }
      });
    });

    const hiddenElements = document.querySelectorAll(`.${hiddenClass}`);
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, [hiddenClass, showClass]);
};

export default useOnScreenAnimation;
