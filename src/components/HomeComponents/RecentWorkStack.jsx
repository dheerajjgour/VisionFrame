import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function RecentWorkStack() {
  const gridRef = useRef(null);

  const projects = [
    { title: "Velnik", cat: "Global Consumer Care", img: "projects/velnik-homepage.png", url: "https://velnik.com/", size: "large" },
    { title: "Babelois", cat: "Premium Branding", img: "projects/babelois-homepage.webp", url: "https://babelois.in/", size: "small" },
    { title: "Kaveri", cat: "E-Commerce", img: "projects/Kaveri.png", url: "https://kaverimehendi.in/", size: "small" },
    { title: "Elois", cat: "Web Development", img: "projects/elois-homepage.png", url: "https://elois.in/", size: "medium" },
    { title: "Nutrigain", cat: "Health & Tech", img: "projects/Nutrigain.png", url: "http://nutrigain.in/", size: "medium" },
  ];

  useEffect(() => {
    const cards = gsap.utils.toArray(".rw-card");

    // Clear any initial JS-applied transforms to prevent conflicts
    gsap.set(cards, { clearProps: "all" });

    // Entry Animation: Staggered "Pop and Rotate"
    gsap.fromTo(cards, 
      { 
        opacity: 0, 
        y: 100, 
        rotateX: -20, 
        scale: 0.8 
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        duration: 1.2,
        stagger: {
          each: 0.15,
          from: "start"
        },
        ease: "expo.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        }
      }
    );

    // Hover Effect: Magnetic Tilt logic
    cards.forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;

        gsap.to(card, {
          rotateY: x * 15,
          rotateX: -y * 15,
          transformPerspective: 1000,
          duration: 0.4,
          ease: "power2.out"
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.6,
          ease: "elastic.out(1, 0.3)"
        });
      });
    });
  }, []);

  return (
    <>


      <section className="recent-work-stack">
        <div className="container">
        <h2 className="section-title">Recent Work</h2>
        <div className="rw-bento-grid" ref={gridRef}>
          {projects.map((p, i) => (
            <a key={i} href={p.url} className={`rw-card ${p.size}`}>
              <div className="rw-img-layer">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="rw-text-layer">
                {/* <span>{p.cat}</span> */}
                <h3>{p.title}</h3>
              </div>
            </a>
          ))}
        </div>
        </div>
      </section>
    </>
  );
}

export default RecentWorkStack;