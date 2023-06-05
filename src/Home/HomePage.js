import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './HomePage.css'
import Type from './Type'
import homePic from '../assets/home-main.svg'

function HomePage() {
  return (
     <Container fluid>
        <Row>
            <Col lg={6} className="intro-col">
                <h1 className='intro-size'>Hi There! <span className='wave' role="img" aria-labelledby="wave">👋🏻</span></h1>
                <h1 className='intro-size2'>
                I'M <span style={{color:'#BC61F5'}}>Siddharth Kandwal.</span> 
                </h1>
                <h2 className='intro-size intro-size3' style={{marginTop:40,color:'#BC61F5'}}>Open Source Contributor</h2>
            </Col>
            <Col lg={6} md={12} style={{marginTop:100}}>
                <div className='home-main-svg'>
                    <img src={homePic} className='img-fluid img-set' alt="home-pic"/>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default HomePage