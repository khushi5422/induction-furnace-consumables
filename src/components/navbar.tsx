import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Home from '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigationbar = () => {
  return (
    <>
      <Navbar className={`${Home.navbg}`} variant="dark" expand="lg">
        {/* fixed="top" */}
        <Container className="ps-0">
          <Navbar.Brand href="/" className={`${Home.navwid}`}>
            <img
              src="../../logo.svg"
              alt="Logo"
              className={`${Home.navlogo}`}
              loading="lazy"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-center">
            <Nav>
              <Nav.Link href="/" className="text-dark" >Home</Nav.Link>
              <Nav.Link href="/aboutus" className="text-dark">About</Nav.Link>
              <NavDropdown title="Products" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/gallery">Induction Furnace Assembly</NavDropdown.Item>
                <NavDropdown.Item href="/gallery">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contactus" className="text-dark" >Contact</Nav.Link>
              <Nav.Link href="/faq" className="text-dark" >FAQ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
