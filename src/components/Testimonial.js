import React from "react";

export default function Testimonial(props) {
  return (
    <div className={`testimonial-container ${props.class}`}>
      <div className="author-container">
        <img className="avatar" src={`/images/${props.img}`} alt="" />
        <div className="author-info">
          <span className="author-name">{props.name}</span>
          <span className="author-title">Verified Buyer</span>
        </div>
      </div>

      <p className="testimonial-text">{props.testimonial}</p>
    </div>
  );
}
