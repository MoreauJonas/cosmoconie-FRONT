import React from "react";
import "../assets/styles/components/_item.scss";

function Item({ nom, image, description, prix, tag }) {
  return (
    <div className="Item">
      <div className="ItemTitle">
        <h3>{nom}</h3>
      </div>
      <div className="ItemImage">
        <img src={require(`../assets/images/shop/${image}`)} alt={nom} />
      </div>
      <div className="ItemDescription">
        <p>{description}</p>
        <p>{prix}</p>
        <p>Type d'objet: {tag}</p>
      </div>
    </div>
  );
}

export default Item;
