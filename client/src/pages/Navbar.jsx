import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css";
import {
  Button,
  Navbar,
  Container,
  Offcanvas,
  Nav,
} from 'react-bootstrap';

export default () => {
  return (
      <Navbar expand="xl" className="fixed-top mb-3 blue-1">
        <Container fluid>
          <Navbar.Brand href="/" ><img className="logo ms-5" src="/img/logo.png" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                BCR
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#our-service" className="nav-link mx-2 text-black">Our Service</Nav.Link>
                <Nav.Link href="#why-us" className="nav-link mx-2 text-black">Why Us</Nav.Link>
                <Nav.Link href="#testimonial" className="nav-link mx-2 text-black">Testimonial</Nav.Link>
                <Nav.Link href="#faq" className="nav-link mx-2 text-black">FAQ</Nav.Link>
                <Button variant="outline-success" className="btn green-4 mx-2 text-black fw-bold text-white" href="/register">Register</Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
  )
}
