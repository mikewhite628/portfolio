import React from 'react'
import Header from '../Header/Header'
import Skills from './Skills'
import Tools from './Tools'
import ghPic from '../../images/github.png'
import ytPic from '../../images/youtube.png'
import twitterPic from '../../images/twitter.png'
import { Container, Row, Col, Card} from 'react-bootstrap'



const About = () => {

    return ( 
        <Container fluid className='about mt-5' id='about' style={{ backgroundColor: '#eeeeee', color: '#252a34'}}>
          <Row>
            <Col md={6}>
              <Card style={{ backgroundColor: '#eeeeee', border:'none'}}>
              <h1> About </h1>
              I'm a self taught developer who loves simple, effective design.            
              </Card>
            </Col>
            <Col md={6}>
              <Skills />
            </Col>
          </Row>
          <Row className='justify-content-center mt-5'>
            <Col md='auto' xs='auto'>
                <a href='https://twitter.com/Th3MichaelWhite'><img src={twitterPic} className='social-icon' /></a>
                <a href='https://github.com/mikewhite628'><img src={ghPic} className='social-icon' /></a>
                <a href='https://www.youtube.com/channel/UCPyST5UFOezhL7cErL0Zysw'><img src={ytPic} className='social-icon' /></a>
            </Col>
          </Row>
          <Row className='justify-content-center mt-5'>
            <Col md='auto' xs='auto'>
              <Tools />
            </Col>
          </Row>
            

            
        </Container>
    )
}

export default About