import { useEffect } from "react";

const useOnScreenAnimation = (
    hiddenClass,
    showClass,
    options = { root: null, rootMargin: "0px", threshold: 0.1 }
  ) => {
    useEffect(() => {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(showClass);
            observer.unobserve(entry.target); // Stops observing once animation is triggered
          }
        });
      }, options);
  
      const hiddenElements = document.querySelectorAll(`.${hiddenClass}`);
      hiddenElements.forEach((el) => observer.observe(el));
  
      return () => observer.disconnect();
    }, [hiddenClass, showClass, options]);
  };
  
  export default useOnScreenAnimation;