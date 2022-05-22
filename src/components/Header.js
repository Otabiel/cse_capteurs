import { useRouter } from "next/router";
import useSession from '../hooks/auth'
import Link from 'next/link'

import React, { useState, useEffect } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { session, loading } = useSession();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  }

  return (
    <div className={`header${sticky ? ' sticky' : ''}`}>
      <Navbar light expand="lg">
        <Container>
          <NavbarBrand href="/">
            <img src="/Logo.png" alt="" className="img-fluid mx-auto d-block"/>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#feature">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#service">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
              {!session ? (
                <NavItem>
                  <NavLink href="/signup">Sign up</NavLink>
                </NavItem>
              ) : (
                <a></a>
              )}
              {!session ? (
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
              ) : (
                <NavItem>
                  <NavLink href="/">Logout</NavLink>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
