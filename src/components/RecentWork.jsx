import React from 'react'

function RecentWork() {
    const project = [
    { title: 'OutLoud', image: '/OutLoud.png', url:'https://outloud.global/'
    },
    { title: '360Hoops', image: '/360Hoops.png', url:'play360hoops.com' },
    { title: 'SharpHead', image: '/SharpHead.png', url:'https://sharphead.co/'},
    { title: 'NiloHealth', image: '/NiloHealth.png',url:'https://nilohealth.com/' },
  ];
  return (
  
    <section className="recent-work">
  <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Recent Work</h2>
  <div className="row-wrapper container">
    {project.map((project, idx) => (
      <div className={`row-${idx}`} key={idx}>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <img src={project.image} alt={project.title} />
        </a>
        <div className="title">{project.title}</div>
      </div>
    ))}
  </div>
</section>

  )
}

export default RecentWork
