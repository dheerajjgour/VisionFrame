import React from 'react'
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
      <section className='features'>
        <div className='container'>
          <div className='wrapper'>
            <div className='gif-wrapper' >
              <img src='/lightspeed-10958_256.gif'></img>
            </div>
            <div class="curved-text-wrapper">
              <svg viewBox="0 0 600 300" class="curved-text-svg" xmlns="http://www.w3.org/2000/svg">

                <path id="curve" d="M-20 841 V311  C-20 139.792 110.315 1 301 1 C491.685 1 610 139.782 615 311  V841

" fill="none" />


                <text font-size="70px" fill="#fff">
                  <textPath id="animated-textpath" href="#curve" startOffset="60%" text-anchor="middle">
                   CUSTOMER TESTIMORNIAL
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
