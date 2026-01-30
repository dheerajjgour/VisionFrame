import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function RecentWork() {
  const project = [
    { title: "Velnik", image: "projects/velnik-homepage.png", url: "https://velnik.com/" },
    { title: "Babelois", image: "projects/babelois-homepage.webp", url: "https://babelois.in/" },
    { title: "Kaveri Mehendi", image: "projects/Kaveri.png", url: "https://kaverimehendi.in/" },
    { title: "Elois", image: "projects/elois-homepage.png", url: "https://elois.in/" },
    { title: "Nutrigain", image: "projects/Nutrigain.png", url: "http://nutrigain.in/" },
  ];
useEffect(() => {
  gsap.utils.toArray(".project-card").forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        x: index % 2 === 0 ? -120 : 120,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out", 
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      }
    );
  });
}, []);


  return (
    <section className="recent-work" id="Project">
      <h2 className="section-title">Recent Work</h2>

      <div className="row-wrapper container">
        {project.map((item, idx) => (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-card ${idx % 2 === 0 ? "left" : "right"}`}
            key={idx}
          >
            <div className="image-wrap">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="project-info">
              <h3>{item.title}</h3>
              <span className="view-project">View Project →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default RecentWork;
