import React from "react";
import OwlCarousels from "../../components/Dasboard/OwlCarousel";
import '../../css/style.css';

function Carousels() {
  return (
    <section className="pt-5" id="testimonial">
      <h2 className="text-center my-2">Testimonial</h2>
      <p className="text-center my-3">Berbagai review positif dari para pelanggan kami</p>
      <OwlCarousels />
    </section>
  )
}

export default Carousels;