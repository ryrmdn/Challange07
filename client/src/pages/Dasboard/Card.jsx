import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.css';
import Card from '../../components/Dasboard/CardComponent';
import WhyUs from '../../data/whyUs.json';

function Cards() {
  return (
    <section id="why-us" className="card-why-us pt-5 pb-3">
      <div className="container my-3">
        <h2 className="why-us-text">Why Us?</h2>
        <p className="why-us-text">Mengapa harus pilih Binar Car Rental?</p>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {Object.keys(WhyUs).map((item, i) => {
            return (
            <div className="col" key={i}>
            <Card image={WhyUs[item].image} title={WhyUs[item].title} body={WhyUs[item].body} />
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Cards;