import React, {Component} from "react";
import "../../css/style.css";

const rateStyle = {
  width: "100px",
}

const cardStyle = {
  backgroundColor: "#F1F3FF",
  borderRadius: "10px",
  width: "650px",
  height: "230px",
  margin: "auto",
}

const photoStyle = {
  width: "70px",
  margin: "auto",
  marginTop: "50px",
}

class Testimonial extends Component {
  render () {
    return (
      <div className="card blue-1 mb-3" style={cardStyle}>
        <div className="row g-0">
          <div className="col-md-3">
            <img src={this.props.profil} className="img-fluid rounded-start" style={photoStyle} alt="..." />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <img src={this.props.rate} className="rate my-3" style={rateStyle} alt="" />
              <p>
                {this.props.comment}
              </p>
              <p className="bold-text">{this.props.name}</p>
            </div>
          </div>
        </div>
      </div>
    )
  } 
}

export default Testimonial;