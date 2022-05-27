import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/style.css";
import { Accordion } from "react-bootstrap";

class AccordionComponent extends Component {
  render() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{this.props.header}</Accordion.Header>
        <Accordion.Body>{this.props.body}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )}
}

export default AccordionComponent;