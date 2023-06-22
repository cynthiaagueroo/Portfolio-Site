import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Card from "react-bootstrap/Card";



function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button className="viewbtn" variant="primary" href={props.ghLink} target="_blank">
          View
        </Button>
        {"\n"}
        {"\n"}


        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >

            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
              
                // imgPath={useradminpanel}
                isBlog={false}
                title="N/A"
                description="N/A"
                ghLink="https://rahul-dashboard-pannel.netlify.app"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                // imgPath={olximage}
                isBlog={false}
                title="N/A"
                description="N/A"
                ghLink="https://olx-clone-rahul.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                // imgPath={netfliximage}
                isBlog={false}
                title="N/A"
                description="N/A"
                ghLink="https://react-rahul-netflix-clone.netlify.app/"
              />
            </Col> 

            <Col md={4} className="project-card">
              <ProjectCard
                // imgPath={gridlinesbuilders}
                isBlog={false}
                title="N/A"
                description="N/A"
                ghLink="https://gridlinesbuilders.in/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                // imgPath={charlespizza}
                isBlog={false}
                title="N/A"
                description="N/A"
                ghLink="https://rahulvijay81.github.io/Pizzastore-bootstrap/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                // imgPath={todolist}
                isBlog={false}
                title="N/A"
                description="N/A"
                ghLink="https://todolist-rahul81.netlify.app/"

              />
            </Col>
  
          </Row>
        </Container>
      </Container>
    </div>
  )
}


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
            <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}> Projects </Nav.Link>
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

function Project() {
  return (
    <div>
      <Header />
      <Projectlist />
    </div>
  )
}

export default Project