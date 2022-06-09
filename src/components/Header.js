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

  const handleOnClick = async (data) => {
    try {
      console.log("Bouffon");
      localStorage.removeItem("token");
    } catch (e) {
      console.log(e);
    }
  };

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
                <NavLink href="/">Accueil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#feature">Capteurs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#service">Services</NavLink>
              </NavItem>
              {!session ? (
                <NavItem>
                  <NavLink href="/signup">S&#39;enregistrer</NavLink>
                </NavItem>
              ) : (
                <NavItem>
                  <NavLink href="/profile">Profile</NavLink>
                </NavItem>
              )}
              {!session ? (
                <NavItem>
                  <NavLink href="/login">S&#39;identifier</NavLink>
                </NavItem>
              ) : (
                <NavItem>
                  <NavLink href="/"><span onClick={handleOnClick} className="text-danger">Se déconnecter</span></NavLink>
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
