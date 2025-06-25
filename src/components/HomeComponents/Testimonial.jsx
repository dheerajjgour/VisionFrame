import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
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
    grabCursor: true,
    watchSlidesProgress: true,
    loop: true,
    slidesPerView: 3, // FIXED: 3 visible slides
    centeredSlides: true,
    spaceBetween: 20,
    initialSlide: 0,
    on: {
      progress(swiperInstance) {
        const total = swiperInstance.slides.length;
        for (let i = 0; i < total; i++) {
          const slide = swiperInstance.slides[i];
          const progress = slide.progress;
          const absProgress = Math.abs(progress);

          let scaleFactor = 1;
          if (absProgress > 1) scaleFactor = 0.3 * (absProgress - 1) + 1;

          const offsetX = `${progress * scaleFactor * 50}%`;
          const scale = 1 - 0.2 * absProgress;
          const zIndex = total - Math.abs(Math.round(progress));
          const opacity = absProgress > 3 ? 0 : 1;

          slide.style.transform = `translateX(${offsetX}) scale(${scale})`;
          slide.style.zIndex = zIndex;
          slide.style.opacity = opacity;

          const content = slide.querySelectorAll(".item-content");
          content.forEach(el => {
            el.style.opacity = `${1 - absProgress / 3}`;
          });
        }
      },
      setTransition(swiperInstance, duration) {
        swiperInstance.slides.forEach(slide => {
          slide.style.transitionDuration = `${duration}ms`;
          const content = slide.querySelectorAll(".item-content");
          content.forEach(el => {
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
    <h2 style={{textAlign:"center", marginBottom:"50px"}}>People talk about me</h2>
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
    </div>
    </div>
  </section>
);

}

export default Testimonial;
