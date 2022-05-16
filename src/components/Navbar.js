import React from 'react'
import { useRouter } from "next/router";
import Link from 'next/link'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap';
import { Container, Col, Row, Form } from "react-bootstrap";

const CustomNavbar = () => {

  const router = useRouter();

  const handleClick = (e, path) => {


    if (path === "/login") {
      router.push(path);
    }
    if (path === "/signup") {
      router.push(path);
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={(e) => handleClick(e, "/login")} href="">Login</Nav.Link>
            <Nav.Link onClick={(e) => handleClick(e, "/signup")} href="">Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
