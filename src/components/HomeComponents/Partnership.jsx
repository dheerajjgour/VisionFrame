import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Partnership() {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    gsap.to(element, {
      backgroundPositionY: "20%", // Final position on scroll
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom", // when top of section hits bottom of viewport
        end: "bottom top", // when bottom of section hits top of viewport
        scrub: 1, // makes it scroll-linked
      },
    });

    // Optional cleanup (not strictly required here)
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="partnership">
        <div className="row-1 container">
          <div className="col-1">
            <h3>Why choose me</h3>
          </div>
          <div className="col-2">
            <p>
              Choose me for my extensive expertise and innovative approach,
              delivering personalized solutions that align with your unique
              needs. I am customer-focused, ensuring open communication and
              reliable timelines throughout the project. With meticulous
              attention to detail, I consistently deliver high-quality results
              on time and within your budget. My proven track record of
              successful projects and satisfied clients showcases my commitment
              to excellence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Partnership;
