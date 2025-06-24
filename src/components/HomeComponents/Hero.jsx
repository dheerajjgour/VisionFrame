import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spinner from "../Spinner";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const heroRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 769px)",
        isMobile: "(max-width: 768px)",
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;

        const ctx = gsap.context(() => {
          gsap.fromTo(
            imgRef.current,
            { scale: isDesktop ? 3 : 1.2 },
            {
              scale: isDesktop ? 1 : 0.6,
              y: isDesktop ? 50 : 50,
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
              },
              ease: "power2.out",
            }
          );
        }, heroRef);

        return () => ctx.revert(); // Cleanup
      }
    );

    return () => mm.revert(); // Remove matchMedia listeners on unmount
  }, []);

  return (
    <>
      <div ref={heroRef} className="hero" id="Home">
        <div className="row-2">
          <img
            ref={imgRef}
            src="/sky.png"
            style={{ transformOrigin: "center center" }}
          ></img>
        </div>
        <div className="container row-1">
          <div className="wrapper">
            <h1 className="hero-title">ASHWIN SHARMA</h1>
            <div className="wrapper-2">
              <p className="hero-text">
                Choose me for my extensive expertise and innovative approach,
                delivering personalized solutions that align with your unique
                needs. I am customer-focused, ensuring open communication and
                reliable timelines throughout the project. With meticulous
                attention to detail, I consistently deliver high-quality results
                on time and within your budget. My proven track record of
                successful projects and satisfied clients showcases my
                commitment to excellence.
              </p>
              <Spinner text="Lorem" />
            </div>
          </div>
        </div>

        <div className="row-3">
          <div className="wrapper">
            <div className="marquee _1">
              <div className="text">
                <h2>Ashwin Sharma</h2>
                <h2 className="fill">Ashwin Sharma</h2>
                <h2>Ashwin Sharma</h2>
                <h2 className="fill">Ashwin Sharma</h2>
              </div>
            </div>

            <div className="marquee _2">
              <div className="text">
                <h2>Ashwin Sharma</h2>
                <h2 className="fill">FullStack Developer</h2>
                <h2>FullStack Developer</h2>
                <h2 className="fill">FullStack Developer</h2>
              </div>
            </div>

            <div className="marquee _3">
              <div className="text">
                <h2>JMBLISS IT SOLUTIONS</h2>
                <h2 className="fill">CEO</h2>
                <h2>JMBLISS IT SOLUTIONS</h2>
                <h2 className="fill">CEO</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
