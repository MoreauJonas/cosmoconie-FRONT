import React from "react";

function Item({ nom, image, description, prix, tag }) {
  return (
    <div className="Item">
      <div className="ItemTitle">
        <h3>{nom}</h3>
      </div>

      <img
        className="ItemImage"
        src={require(`../assets/images/shop/${image}`)}
        alt={nom}
      />

      <div className="ItemDescription">
        <p>{description}</p>
        <p>Prix: {prix}</p>
        <p>Type d'objet: {tag}</p>
      </div>
    </div>
  );
}

export default Item;
