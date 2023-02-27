import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
        <Navbar.Brand href="/">
          <a href="/" className="name-logo"><h2 className='name-gradient' >
            CHHATRESH KHATRI
          </h2></a>
          </Navbar.Brand>
            
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active navbar-link' : 'navbar-link')}>Home</NavLink>
              <NavLink to="about" className={({ isActive }) => (isActive ? 'active navbar-link' : 'navbar-link')}>About</NavLink>
              <NavLink to="projects" className={({ isActive }) => (isActive ? 'active navbar-link' : 'navbar-link')}>Projects</NavLink>
              {/* <NavLink to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</NavLink>
              <NavLink to="about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</NavLink>
              <NavLink to="projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavBar;