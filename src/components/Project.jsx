import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function LogoSlider() {
  const slides = [
    { title: 'OutLoud', image: '/OutLoud.png', url:'https://outloud.global/'
    },
    { title: '360Hoops', image: '/360Hoops.png', url:'play360hoops.com' },
    { title: 'SharpHead', image: '/SharpHead.png', url:'https://sharphead.co/'},
     { title: '360Hoops', image: '/360Hoops.png', url:'play360hoops.com' },
    { title: 'NiloHealth', image: '/NiloHealth.png',url:'https://nilohealth.com/' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="project">
        <h2 style={{textAlign:"center", marginBottom:"30px"}}>My latest projects</h2>
        <div className='row-1 container'>
      <Slider {...settings}>
        {slides.map((item, idx) => (
          <div key={idx} className={`col _${idx}`}>
            <p><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a></p>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </Slider>
    </div>
    </section>
  );
}

export default LogoSlider;
