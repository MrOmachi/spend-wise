import React from "react";

function Card({ data }) {
  const { img, txt, link } = data;
  return (
    <div className="cardsContainer">
      <img src={img} alt="card-icon" />
      <span className="cardsTxt">{txt.text}</span>
      <a href={link.ref} className="cardsLink">
        {link.txt} <link.icon />
      </a>
    </div>
  );
}

export default Card;
