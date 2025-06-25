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
              y: isDesktop ? 50 : 0,
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
            <h1 className="hero-title">ASHVIN SHARMA</h1>
            <div className="wrapper-2">
              <p className="hero-text">
                In a sea of talent, my dedication to excellence, creativity, and
                client-focused mindset stand out, making me the ideal choice for
                bringing your vision to life. Let's embark on a transformative
                journey together!"
              </p>
              <Spinner text="Contact" color={"#fff"} />
            </div>
          </div>
        </div>

        <div className="row-3">
          <div className="wrapper">
            <div className="marquee _1">
              <div className="text">
                <h2>Ashvin Sharma</h2>
                <h2 className="fill">Ashvin Sharma</h2>
                <h2>Ashwin Sharma</h2>
                <h2 className="fill">Ashvin Sharma</h2>
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
