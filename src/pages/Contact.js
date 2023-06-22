import React, { useState } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../pages/style.css';
import { Container } from 'react-bootstrap';

function Header() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  return (
    // Navigation Bar component
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? 'sticky' : 'navbar'}
    >
      <Navbar.Brand className='logotext' as={Link} to='/'>
        <div className='logo'></div>
      </Navbar.Brand>

      <Navbar.Toggle
        className='navbar-toggler'
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : 'expanded');
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>

      <Navbar.Collapse id="responsive-navbar-nav" className='responsive-navbar'>
        <Nav className="ms-auto" defaultActiveKey="#home">
          {/* Navigation links */}
          <Nav.Item>
            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}> Home </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}> About </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}> Projects </Nav.Link>
          </Nav.Item> */}
          <Nav.Item>
            <Nav.Link as={Link} to="/contact" onClick={() => updateExpanded(false)}> Contact </Nav.Link>
          </Nav.Item>
          {/* Resume button */}
          <Button
            onClick={() => {
              window.open('https://drive.google.com/file/d/1fH0jaD1uRP9Q9mdSaxMmeSoCfMVh02_u/view?usp=sharing');
            }}
            className='resumebtn'
          >
            <span>Resume</span>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function Contact() {
  return (
    <div>
      {/* Header component */}
      <Header />
      <div className='contactbackground'>
        <Container>
          {/* Contact heading */}
          <h2 className='contacthead'>Contact me</h2>
          {/* Contact information */}
          <p className='contactpara'> I’m currently searching for internship opportunities. <br /> If you would like to be in touch, my inbox is always open! :]</p>
          {/* Contact button */}
          <button
            className='contactbtn'
            onClick={() => {
              window.open('https://mail.google.com/mail/?view=cm&fs=1&to=cynthiaaguero02@gmail.com');
            }}
          >
            Press me!
          </button>
          <span></span>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
