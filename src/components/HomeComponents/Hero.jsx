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
    const mm = ScrollTrigger.matchMedia(); // updated

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
            { scale: isDesktop ? 2.6 : 1.2 },
            {
              scale: isDesktop ? 0.7 : 0.5,
              y: isDesktop ? 50 : 90,
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                markers: false,
              },
              ease: "power2.out",
            },
          );
        }, heroRef);

        return () => ctx.revert();
      },
    );

    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      mm.revert();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <section ref={heroRef} className="hero" id="Home">
        <div className="row-2">
          <img
            ref={imgRef}
            src="/banner2.jpg"
            style={{ transformOrigin: "center center" }}
          ></img>
        </div>
        <div className="container row-1">
          <div className="wrapper">
            <h1 className="hero-title">ASHVIN SHARMA</h1>
            <div className="wrapper-2">
              <p className="hero-text">
                I design and develop modern, high-performance websites and web
                applications with a strong focus on user experience,
                responsiveness, and clean code. Passionate about creating
                visually engaging digital products that deliver real business
                value.
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
                <h2>Ashvin Sharma</h2>
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
      </section>
    </>
  );
};

export default Hero;
