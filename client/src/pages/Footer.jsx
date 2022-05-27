import React from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <div className="container footer pt-5">
      <div className="row">
        <div className="col-lg-4">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className="col-lg-2">
          <p><a href="#our-service" className="footer-menu">Our Service</a></p>
          <p><a href="#why-us" className="footer-menu">Why Us</a></p>
          <p><a href="#testimonial" className="footer-menu">Testimonial</a></p>
          <p><a href="#faq" className="footer-menu">FAQ</a></p>
        </div>
        <div className="col-lg-3 pb-2">
          <p>Connect with us</p>
          <a href="#"><img src="/img/icon_facebook.png" className="sosmed me-2" alt="" /></a>
          <a href="#"><img src="/img/icon_instagram.png" className="sosmed me-2" alt="" /></a>
          <a href="#"><img src="/img/icon_twitter.png" className="sosmed me-2" alt="" /></a>
          <a href="#"><img src="/img/icon_mail.png" className="sosmed me-2" alt="" /></a>
          <a href="#"><img src="/img/icon_twitch.png" className="sosmed me-2" alt="" /></a>
        </div>
        <div className="col-lg-3 pb-3">
          <p>Copyright Binar 2022</p>
          <a href=""><img className="logo" src="/img/logo.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer;