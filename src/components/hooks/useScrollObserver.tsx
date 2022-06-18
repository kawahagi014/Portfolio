import { useEffect, useRef, useState } from 'react';

export const useScrollObserver = () => {
  const [intersecting, setIntersecting] = useState<string>();
  const fullpageRef = useRef<HTMLDivElement | null>(null);

  const doWhenIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIntersecting(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observerRoot = fullpageRef.current;
    const sections = fullpageRef.current?.childNodes as NodeListOf<HTMLElement>;
    const options = {
      root: observerRoot,
      rootMargin: '-50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(doWhenIntersect, options);
    sections?.forEach((section) => {
      observer.observe(section);
    });
  }, []);
  return { intersecting, fullpageRef };
};
