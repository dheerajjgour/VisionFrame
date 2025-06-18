import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Partnership() {
gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    gsap.to(element, {
      backgroundPositionY: '20%', // Final position on scroll
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom', // when top of section hits bottom of viewport
        end: 'bottom top',   // when bottom of section hits top of viewport
        scrub: 1,         // makes it scroll-linked
      },
    });

    // Optional cleanup (not strictly required here)
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

    return (
        <>

            <section ref={sectionRef} className='partnership'>
                <div className='row-1 container'>
                    <div className='col-1'><h3>Lorem ipsum dolor sit</h3></div>
                    <div className='col-2'><p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Partnership
