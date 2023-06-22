import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap';
import Typewriter from "typewriter-effect";
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

// Typewriter component for text animation
function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Rutgers University",
          "Computer Science Major",
          "Artificial Intelligence Track",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

// Header component with navigation
function Header() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  // Event handler for scroll
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  // Add scroll event listener
  window.addEventListener('scroll', scrollHandler);

  return (
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
        <Nav.Item>
            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}> Home </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}> About </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {/* <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}> Projects </Nav.Link> */}
          </Nav.Item> 
          <Nav.Item>
            <Nav.Link as={Link} to="/contact" onClick={() => updateExpanded(false)}> Contact </Nav.Link>
          </Nav.Item>
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

// Home component
function Home() {
  return (
    <div>
      <Header />
      <div className='homepagebackground'>
        <Container>
          <Row>
            <Col md={7}>
              <h2 className='headtext'>Hello ! <span className='wave'>👋🏼</span></h2>
              <h2 className='nametext'>I'm Cynthia Agüero</h2>
              <span></span>
              <Text />
              <button onClick={() => { window.open("https://github.com/cynthiaaguero"); }} className='socailmediabtn'>
                <AiFillGithub className='icon' />
              </button>
              <button onClick={() => { window.open("https://www.linkedin.com/in/cynthiaaguero/"); }} className='socailmediabtn'>
                <FaLinkedinIn className='icon' />
              </button>
            </Col>
            <Col md={5}>
              <div className="imagedeveloper"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
