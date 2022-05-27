import React from "react";
import "../../css/style.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import Testimonial from "./TestimonialComponent";
import DataTesti from "../../data/testimonial.json";

function OwlCarousels() {
  return (
    <OwlCarousel
      className="owl-theme"
      loop={true}
      margin={32}
      autoHeight={true}
      nav={true}
      center={true}
      dots={false}
      navText={[
        "<img src='/img/Left_button.png' style='width: 32px; margin-right: 10px;'>",
        "<img src='/img/Right_button.png' style='width: 32px'>",
      ]}
      responsive={{
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 2,
        },
      }}
    >

      {DataTesti.map((item) => {
        return (
          <Testimonial
            profil={item.profil}
            rate={item.rate}
            comment={item.comment}
            name={item.name}
          />
        )
      })}

    </OwlCarousel>
  )
}

export default OwlCarousels;