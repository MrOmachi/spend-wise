import React from "react";

function FeaturedCard({ data }) {
  const { img, txt, link, icon } = data;
  return (
    <div className="featuredCard">
      <div className="leftCol">
        <img src={icon} alt="card-icon" style={{ width: 45, height: "auto" }} />
        <p className="cardsTxt">{txt.text}</p>
        <a href={link.ref} className="cardsLink">
          {link.txt} <link.icon />
        </a>
      </div>
      <img src={img.src} alt="featured-code-image" className="featuredRight" />
    </div>
  );
}

export default FeaturedCard;
