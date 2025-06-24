import React from "react";

function Skills() {
    const content = [
  {
    img: "https://ashvinsharma.com/wp-content/uploads/2025/04/wordpress-logo.png",
    alt: "Wordpress",
    label: "Wordpress"
  },
  {
    img: "https://ashvinsharma.com/wp-content/uploads/2025/04/Group-48095498.png",
    alt: "Shopify",
    label: "Shopify"
  },
  {
    img: "	https://ashvinsharma.com/wp-content/uploads/2025/04/Figma-logo.png",
    alt: "Figma",
    label: "Figma"
  },
  {
    img: "https://ashvinsharma.com/wp-content/uploads/2025/04/ReactJS.png",
    alt: "React",
    label: "React"
  },
  {
    img: "https://ashvinsharma.com/wp-content/uploads/2025/04/Vector-3.png",
    alt: "HubSpot",
    label: "HubSpot"
  },
  {
    img: "https://ashvinsharma.com/wp-content/uploads/2025/04/Weblow.png",
    alt: "Webflow",
    label: "Webflow"
  },
  {
    img: "https://ashvinsharma.com/wp-content/uploads/2025/04/Prestashop.png",
    alt: "Prestashop",
    label: "Prestashop"
  },
    {
    img: "https://ashvinsharma.com/wp-content/uploads/2025/04/PHP.png",
    alt: "Php/SQL",
    label: "Php/SQL"
  },
  {
    img: "https://ashvinsharma.com/wp-content/uploads/2025/04/Adobe-logo-1.png",
    alt: "Photoshop",
    label: "Photoshop"
  },
  {
    img: "https://ashvinsharma.com/wp-content/uploads/2025/04/XMLID_1_.png",
    alt: "Laravel",
    label: "Laravel"
  },
  {
    img: "https://ashvinsharma.com/wp-content/uploads/2025/04/Adobe-logo.jpg",
    alt: "Adobe XD",
    label: "Adobe XD"
  },
  {
    img: "https://ashvinsharma.com/wp-content/uploads/2025/04/adobe-illustrator-logo.png",
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
