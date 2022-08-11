import "../assets/styles/components/_event.scss";

import React from "react";

function Event({ nom, image, description, date, tag, lieu }) {
  return (
    <>
      <div className="component-event">
        <div>
          <img src={require(`../assets/images/events/${image}`)} alt={nom} />
          <p className="tag">{tag}</p>
        </div>
        <div>
          <h3>{nom}</h3>
          <p>{description}</p>
          <p>{date}</p>
          <p>{lieu}</p>
        </div>
      </div>
    </>
  );
}

export default Event;
