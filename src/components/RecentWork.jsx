import React from 'react'

function RecentWork() {
    const project = [
    { title: 'Velnik', image: 'projects/velnik-homepage.png', url:'https://velnik.com/'},
    { title: 'Babelois', image: 'projects/babelois-homepage.webp', url:'https://babelois.in/' },
     { title: 'Kaveri Mehendi', image: 'projects/Kaveri.png', url:'https://kaverimehendi.in/' },
    { title: 'Elois', image: 'projects/elois-homepage.png',url:'https://elois.in/' },
    { title: 'Nutrigain', image: 'projects/Nutrigain.png',url:'http://nutrigain.in/' },
  ];
  return (
    <section className="recent-work" id='Project'>
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
