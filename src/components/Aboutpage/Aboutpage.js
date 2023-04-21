import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'> I am a dedicated Computer Science major studying at Rutgers 
                        University. I am currently interested in exploring Full Stack Development, Artificial Intelligence, 
                        Machine Learning, and Data Science. Some relevant courses I have taken so far are Data Structures,
                        Computer Architecture, and Discrete Structures. In my leisure time, I pursue interests such as
                        studying languages, rock climbing, reading, and running. Some languages I am currently studying
                        are Japanese and Spanish.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>Java</li>
                                </Col>
                                <Col md={5}>
                                    <li>C</li>
                                    <li>Tableu</li>
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage