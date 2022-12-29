import React from "react";

function Card({ data }) {
  const { img, txt, link, styles } = data;
  return (
    <div style={styles}>
      <img src={img} alt="card-icon" style={{width: 45, height: 'auto'}} />
      <span style={txt.styles}>{txt.text}</span>
      <a href={link.ref} style={link.styles}>
        {link.txt} <link.icon />
      </a>
    </div>
  );
}

export default Card;
