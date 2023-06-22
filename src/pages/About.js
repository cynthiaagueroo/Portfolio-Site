import '../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../pages/style.css';


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
  
function About() {
  return (
    <div>
      <Header />
      <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        {/* About Me heading */}
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        {/* About Me details */}
                        <p className='aboutdetails'> I am a dedicated Computer Science major studying at Rutgers 
                        University. I am currently interested in exploring Full Stack Development, Artificial Intelligence, 
                        Machine Learning, and Data Science. Some relevant courses I have taken so far are Data Structures,
                        Computer Architecture, and Discrete Structures. In my leisure time, I pursue interests such as
                        studying languages, rock climbing, reading, and running. Some languages I am currently studying
                        are Japanese and Spanish.
                        </p>
                        {/* List of skills */}
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                {/* First column of skills */}
                                <Col md={7}>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>Java</li>
                                </Col>
                                {/* Second column of skills */}
                                <Col md={5}>
                                    <li>C</li>
                                    <li>Tableau</li>
                                    <li>Git/Github</li>
                                    <li>Verilog</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    {/* Image column */}
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default About