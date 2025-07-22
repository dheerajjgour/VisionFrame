import React from "react";

function Skills() {
    const content = [
  {
    img: "/skills-img/wordpress-logo.png",
    alt: "Wordpress",
    label: "Wordpress"
  },
  {
    img: "/skills-img/Group-48095498.png",
    alt: "Shopify",
    label: "Shopify"
  },
  {
    img: "/skills-img/Figma-logo.png",
    alt: "Figma",
    label: "Figma"
  },
  {
    img: "/skills-img/ReactJS.png",
    alt: "React",
    label: "React"
  },
  {
    img: "/skills-img/Vector-3.png",
    alt: "HubSpot",
    label: "HubSpot"
  },
  {
    img: "/skills-img/Weblow.png",
    alt: "Webflow",
    label: "Webflow"
  },
  {
    img: "/skills-img/Prestashop.png",
    alt: "Prestashop",
    label: "Prestashop"
  },
    {
    img: "/skills-img/PHP.png",
    alt: "Php/SQL",
    label: "Php/SQL"
  },
  {
    img: "/skills-img/Adobe-logo.jpg",
    alt: "Photoshop",
    label: "Photoshop"
  },
  {
    img: "/skills-img/XMLID_1_.png",
    alt: "Laravel",
    label: "Laravel"
  },
  {
    img: "/skills-img/Adobe-logo-1.png",
    alt: "Adobe XD",
    label: "Adobe XD"
  },
  {
    img: "/skills-img/adobe-illustrator-logo.png",
    alt: "Illustrator",
    label: "Illustrator"
  },
];

  return (
    
    <section className="skills">
      <div className="wrapper container">
        <h2 style={{textAlign:"center", marginBottom:"30px"}}>Skills</h2>
        <div className="row-1">
            {content.map((data,index)=>(
            <div className="img-wrap" key={index}>
                <img src={data.img} alt={data.alt}/>
                <div className="text">{data.label}</div>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
