import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./style.css";
import Accordion from '../../components/Dasboard/AccordionComponent';
import AccordionList from '../../data/accordion.json';

function Accordions() {
  return (
    <section className="container pt-5 pb-5" id="faq">
      <div className="row my-3">
        <div className="col-lg-5">
          <h2>Frequently Asked Question</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="col-lg-7">
          <div className="accordion" id="accordionExample">
            {AccordionList.map((item) => {
              return <Accordion key={item.id} header={item.header} body={item.body} />;
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Accordions;