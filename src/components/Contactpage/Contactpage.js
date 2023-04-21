import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'

function Contactpage() {
  return (
    <div className='contactbackground'>
      <Container>
        <h2 className='contacthead'>Contact me</h2>
        <p className='contactpara'> I’m currently searching for internship opportunities. 
          <br /> If you would like to be in touch, my inbox is always open! ':]'
        </p>
        <button
          className='contactbtn'
          onClick={() => {
            window.open("https://mail.google.com/mail/?view=cm&fs=1&to=cynthiaaguero02@gmail.com");
          }}
        >Press me !</button>
        <span></span>

      </Container>
    </div>
  )
}

export default Contactpage