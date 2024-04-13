import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import { HashLink } from 'react-router-hash-link';



function NavBar() {
  return (
    <Navbar expand="lg" className="navv">
      <Container>
        <Navbar.Brand href="#home">Stay home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3 ">
            <Nav.Link  className="navlinkk"  href="#home">Home</Nav.Link>
            <Nav.Link  className="navlinkk"  href="#Services">Services</Nav.Link>
            <Nav.Link  className="navlinkk"  href="#Listing">Listing</Nav.Link>
            <Nav.Link  className="navlinkk"  href="#About">About</Nav.Link>
            <Nav.Link  className="navlinkk"  href="#Agent">Agent</Nav.Link>
            <Nav.Link  className="navlinkk"  href="#Contact">Contact</Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar