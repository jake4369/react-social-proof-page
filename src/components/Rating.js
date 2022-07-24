import React from "react";

export default function Rating(props) {
  return (
    <div className={`rating-container ${props.class}`}>
      <div className="star-container">
        <img src="/images/icon-star.svg" />
        <img src="/images/icon-star.svg" />
        <img src="/images/icon-star.svg" />
        <img src="/images/icon-star.svg" />
        <img src="/images/icon-star.svg" />
      </div>
      <span className="rating-text">{props.rating}</span>
    </div>
  );
}
