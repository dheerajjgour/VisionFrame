import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import 'swiper/css'; // Core Swiper CSS
import 'swiper/css/free-mode'; // If you're using extra modules

function Testimonial() {
  const sliderRef = useRef(null);
const testimonials = [
  {
    name: "Max Smith",
    text: "Absolutely thrilled with the service! Their professionalism and expertise were evident throughout the entire process.",
    position:"CEO",
  },
  {
    name: "Yulia Brockdorf",
    text: "I believed Mr.Sharma is a capable designer and can deliver excellent results.",
    position:" ",
  },
  {
    name: "Wali Hassan Jafferi",
    text: "Ashvin Delivered good work on his WP development project and I enjoyed working with him.",
    position:"Ropstam Solutions Inc.",
  },
  {
    name: "Todd Smedley",
    text: "He was great, He worked fast and did everything he could make sure we were satisfied.",
    position:"T-shirt Kings",
  },
  
];

useEffect(() => {
  if (!sliderRef.current) return;

const swiper = new Swiper(sliderRef.current, {
  modules: [Navigation],

  grabCursor: true,
  watchSlidesProgress: true,
  loop: true,
  centeredSlides: true,
  initialSlide: 0,

  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },

  // ✅ RESPONSIVE SETTINGS
  breakpoints: {
    // Mobile
    0: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },

    // Tablet
    640: {
      slidesPerView: 2,
      spaceBetween: 16,
    },

    // Desktop
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  on: {
    progress(swiperInstance) {
      const total = swiperInstance.slides.length;

      swiperInstance.slides.forEach(slide => {
        const progress = slide.progress;
        const absProgress = Math.abs(progress);

        let scaleFactor = 1;
        if (absProgress > 1) scaleFactor = 0.3 * (absProgress - 1) + 1;

        const offsetX = `${progress * scaleFactor * 50}%`;

        // 🔥 Reduce scaling effect on mobile
        const scale =
          window.innerWidth < 640
            ? 1 - 0.1 * absProgress
            : 1 - 0.2 * absProgress;

        const zIndex = total - Math.abs(Math.round(progress));
        const opacity = absProgress > 3 ? 0 : 1;

        slide.style.transform = `translateX(${offsetX}) scale(${scale})`;
        slide.style.zIndex = zIndex;
        slide.style.opacity = opacity;

        slide.querySelectorAll(".item-content").forEach(el => {
          el.style.opacity = `${1 - absProgress / 3}`;
        });
      });
    },

    setTransition(swiperInstance, duration) {
      swiperInstance.slides.forEach(slide => {
        slide.style.transitionDuration = `${duration}ms`;
        slide.querySelectorAll(".item-content").forEach(el => {
          el.style.transitionDuration = `${duration}ms`;
        });
      });
    }
  }
});




  
  return () => {
    swiper.destroy(true, true);
  };
}, []);


  return (
  <section className="testimonial" style={{textAlign:"center"}}>
    <div className='row-1 container'>
    <h2 style={{textAlign:"center", marginBottom:"50px"}}>What Clients Say About My Work</h2>
    <div className="carousel-slider swiper" ref={sliderRef}>
      <div className="swiper-wrapper">
        {testimonials.map((item, idx) => (
          <div className="swiper-slide" key={idx}>
            <div className="item-content">
                <p className='text'>{item.text}</p>
              <p className='name'>{item.name}</p>
              <p className='position'>{item.position}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-button-prev custom-prev"></div>
  <div className="swiper-button-next custom-next"></div>
    </div>
    </div>
  </section>
);

}

export default Testimonial;
