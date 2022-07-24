import React from "react";
import Header from "./components/Header";
import Testimonial from "./components/Testimonial";

export default function App() {
  return (
    <div className="container">
      <Header />

      <div className="testimonials">
        <Testimonial
          img="image-colton.jpg"
          name="Colton Smith"
          testimonial="“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”"
          class="col-1"
        />
        <Testimonial
          img="image-irene.jpg"
          name="Irene Roberts"
          testimonial="“ Customer service is excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”"
          class="col-2"
        />
        <Testimonial
          img="image-anne.jpg"
          name="Anne Wallace"
          testimonial="“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”"
          class="col-3"
        />
      </div>
    </div>
  );
}
