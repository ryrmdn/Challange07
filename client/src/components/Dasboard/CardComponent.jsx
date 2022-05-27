import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/style.css";
import { Card } from "react-bootstrap";

class CardComponent extends Component {
  render() {
    return (
      <Card className="card-why-us" style={{ width: '16rem' }}>
        <Card.Body>
          <img className="icon mx-2 my-3" src={this.props.image} alt="" />
          <Card.Title className="fw-bold p-2">{this.props.title}</Card.Title>
          <Card.Text>{this.props.body}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default CardComponent;