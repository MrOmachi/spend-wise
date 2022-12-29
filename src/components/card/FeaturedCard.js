import React from "react";

function FeaturedCard({ data }) {
  const { img, txt, link, styles, leftCol, icon } = data;
  return (
    <div style={styles}>
      <div style={leftCol}>
        <img src={icon} alt="card-icon" style={{ width: 45, height: "auto" }} />
        <span style={txt.styles}>{txt.text}</span>
        <a href={link.ref} style={link.styles}>
          {link.txt} <link.icon />
        </a>
      </div>
      <img src={img.src} alt="featured-code-image" style={img.styles} />
    </div>
  );
}

export default FeaturedCard;
