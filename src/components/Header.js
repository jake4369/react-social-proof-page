import React from "react";
import Rating from "./Rating";

export default function Header() {
  return (
    <header>
      <div className="header-text">
        <h1>10,000+ of our users love our products.</h1>

        <p className="header-p">
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </div>

      <div className="ratings">
        <Rating rating="Rated 5 Stars in Reviews" class="rating-1" />
        <Rating rating="Rated 5 Stars in Report Guru" class="rating-2" />
        <Rating rating="Rated 5 Stars in BestTech" class="rating-3" />
      </div>
    </header>
  );
}
