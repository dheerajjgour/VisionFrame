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
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { scale: 3 }, // Initial width
        {
          scale: 1,
          y: 50,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
          ease: "power2.out",
        }
      );
    }, heroRef); // Scope the GSAP context to .hero for cleanup

    return () => ctx.revert(); // Remove animations when component unmounts
  }, []);

  return (
    <>
      <div ref={heroRef} className="hero">
        <div className="row-2">
          <img
            ref={imgRef}
            src="/photo-1748795303121-02b90e036dec.avif"
            style={{ transformOrigin: "center center" }}
          ></img>
        </div>
        <div className="container row-1">
          <div className="wrapper">
            <h1 className="hero-title">lorem ipsum dolor</h1>
            <div className="wrapper-2">
              <p className="hero-text">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Spinner text="Lorem"/>
            </div>
          </div>
        </div>

        <div className="row-3">
          <div className="wrapper">
            <div className="marquee _1">
              <div className="text">
                <h2>lorem ipsum dolor</h2>
                <h2 className="fill">lorem ipsum dolor</h2>
                <h2>lorem ipsum dolor</h2>
                <h2 className="fill">lorem ipsum dolor</h2>
              </div>
            </div>

            <div className="marquee _2">
              <div className="text">
                <h2>lorem ipsum dolor</h2>
                <h2 className="fill">lorem ipsum dolor</h2>
                <h2>lorem ipsum dolor</h2>
                <h2 className="fill">lorem ipsum dolor</h2>
              </div>
            </div>

            <div className="marquee _3">
              <div className="text">
                <h2>lorem ipsum dolor</h2>
                <h2 className="fill">lorem ipsum dolor</h2>
                <h2>lorem ipsum dolor</h2>
                <h2 className="fill">lorem ipsum dolor</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
