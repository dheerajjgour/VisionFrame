import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import CountUp from "../CountUp";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Features() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to("#animated-textpath", {
      attr: { startOffset: "45%" },
      scrollTrigger: {
        trigger: ".features",
        start: "top 55%",
        end: "bottom bottom",
        scrub: 2,
      },
    });
  }, []);
  return (
    <>
      <section className="features">
        <div className="row-1 container">
          <div className="wrapper col-1">
            <div className="gif-wrapper">
              <img src="/Mask-group.png"></img>
            </div>
            <div class="curved-text-wrapper">
              <svg
                viewBox="0 0 600 300"
                class="curved-text-svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="curve"
                  d="M-20 841 V311  C-20 139.792 110.315 1 301 1 C491.685 1 610 139.782 615 311  V841

"
                  fill="none"
                />

                <text font-size="90px" fill="#fff">
                  <textPath
                    id="animated-textpath"
                    href="#curve"
                    startOffset="60%"
                    text-anchor="middle"
                  >
                    GET TO KNOW ME
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
          <div className="col-2">
            <div className="wrapper-1">
              <div className="a-1">
                <CountUp end={120} suffix="+" />
                <div className="info">Satisfied clients</div>
              </div>
              <div className="a-2">
                <CountUp end={1800} suffix="+" />
                <div className="info">Projects completed</div>
              </div>
              <div className="a-3">
                <CountUp end={13} suffix="+"/>
                <div className="info">Years of experience</div>
              </div>
              <div className="a-4">
                <CountUp end={4300} suffix="+" />
                <div className="info">Hours of work</div>
              </div>
            </div>
            <div className="wrapper-2">
              <p>
                I’m a full stack developer specializing in modern
                JavaScript, and responsive web design. I enjoy transforming
                ideas into interactive, scalable, and performance-optimized web
                experiences. Over the years, I’ve worked on business websites,
                e-commerce platforms, landing pages, and interactive UI
                projects. My focus is always on usability, speed, and clean
                design. I believe great websites are not just functional — they
                should feel smooth, intuitive, and memorable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
