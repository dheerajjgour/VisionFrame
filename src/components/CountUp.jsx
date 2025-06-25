import React, { useEffect, useRef, useState } from 'react';

function CountUp({ end, suffix = '' }) {
  const ref = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const minDuration = 1; // seconds
          const maxDuration = 1;
          const duration = end > 1000 ? minDuration : maxDuration;
          const increment = end / (duration * 60);

          const step = () => {
            start += increment;
            if (start < end) {
              ref.current.innerText = Math.floor(start) + suffix;
              requestAnimationFrame(step);
            } else {
              ref.current.innerText = end + suffix;
            }
          };

          step();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, [end, suffix, hasAnimated]);

  return <div className="num" ref={ref}>0{suffix}</div>;
}

export default CountUp;
