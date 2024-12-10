import React from "react";

const Card = ({ children, cardClass }) => {
  return (
    <div className={`${cardClass}`}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
