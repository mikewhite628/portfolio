import React from 'react'
import Skills from './Skills'
import Tools from './Tools'
import ghPic from '../../images/github.png'
import ytPic from '../../images/youtube.png'
import twitterPic from '../../images/twitter.png'
import { Container, Row, Col, Card} from 'react-bootstrap'



const About = () => {

    return ( 
        <Container fluid className='about mt-5' id='about' style={{ backgroundColor: '#eeeeee', color: '#252a34'}}>
          <Row className='justify-content-center'>
            <Col md={6}>
              <Card className='project-shadow'>
              <Card.Header className='title-center-text blue-background'> Who is <span className='pink-text'>Michael?</span> </Card.Header>
              <Card.Body>
                I'm all about simple design and simple solutions.
              </Card.Body> 
              <Card.Body>
              As a US Marine Corps Veteran I've learned to use 
              collaboration, cooperation, and my own personal development as tools to ensure success.
              </Card.Body>
              <Card.Body>
              Thanks to my background in administrative and logistics work, I have unique perspective to the overall scope when approaching projects.
              </Card.Body>   
              <Card.Body>
              If we can think it, we can build it!
              </Card.Body>           

              </Card>
            </Col>
            <Col md={6}>
              <Skills />
            </Col>
          </Row>
          <Row className='justify-content-center mt-5'>
            <Col md='auto' xs='auto'>
                <a href='https://twitter.com/Th3MichaelWhite'><img src={twitterPic} className='social-icon project-shadow' /></a>
                <a href='https://github.com/mikewhite628'><img src={ghPic} className='social-icon' /></a>
                <a href='https://www.youtube.com/channel/UCPyST5UFOezhL7cErL0Zysw'><img src={ytPic} className='social-icon' /></a>
            </Col>
          </Row>
          <Row className='justify-content-center mt-5 mb-5'>
            <Col md='auto' xs='auto'>
              <Tools />
            </Col>
          </Row>
            

            
        </Container>
    )
}

export default About