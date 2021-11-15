import React from "react";
import "./Card.css";

const Card = ({ src, title, description, price, onClick }) => {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card_info"></div>
      <h2>{title}</h2>
      <h4>{description}</h4>
      <h3>{price}</h3>
      <div onClick={onClick}></div>
    </div>
  );
};

export default Card;
