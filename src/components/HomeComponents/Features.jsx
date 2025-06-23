import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
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

              <text font-size="70px" fill="#fff">
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
          <p>
            Lorem ipsum dolor sit amet consectetur. Quam adipiscing feugiat odio
            sed diam. Venenatis mauris bibendum mi lectus sodales in massa neque
            vulputate. Iaculis dui ac sed amet maecenas nibh non. Sit tincidunt
            luctus nulla nibh feugiat. At. Lorem ipsum dolor sit amet
            consectetur. Quam adipiscing feugiat odio sed diam. Venenatis mauris
            bibendum mi lectus sodales in massa neque vulputate. Iaculis dui ac
            sed amet maecenas nibh non. Sit tincidunt luctus nulla nibh feugiat.
          </p>
        </div>
        </div>
      </section>
    </>
  );
}

export default Features;
