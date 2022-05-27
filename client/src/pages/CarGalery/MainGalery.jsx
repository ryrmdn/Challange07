import React from "react";
import "../../css/style.css";
import Home from "../HomeNoBtn";
import CardFilter from "./CardFilter";
import CardCar from "../../components/CarGalery/CardCar";

function MainGalery() {
  return (
    <>
      <Home />
      <CardFilter />
      <CardCar />
    </>
  )
}

export default MainGalery;