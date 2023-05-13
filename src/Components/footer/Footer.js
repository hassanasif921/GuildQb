import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import Icons from "../../Assets/logo.png";
const Footer = () => {
  return (
    <Container fluid className='bggr' style={{paddingBottom:'50px'}}>
      

  <Container style={{marginBottom:'0px',marginTop:'50px',border:'1px solid' , borderColor:'#249CFC',borderRadius:'71px'}}>
    <Link to={'/aboutus'}><span className='footertext'>© Copyright 2023 GuildQB. All rights reserved</span></Link>
  </Container>
  <div style={{marginBottom:'50px',marginTop:'0px'}}>
   
  </div>
  </Container>
  )
}

export default Footer