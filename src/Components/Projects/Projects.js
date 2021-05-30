import React, {useEffect } from 'react'
import camoPic from '../../images/CTC.png'
import fbccPic from '../../images/FBCC.png'
import gsPic from '../../images/gamestore.png'
import Aos from 'aos'
import 'aos/dist/aos.css';
import '../../App.css'
import Header from '../Header/Header'
import { Container, Image, Row, Col, Card } from 'react-bootstrap'

const Projects = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <Container className='projects' id='projects' style={{backgroundColor:'#eeeeee', color: '#252a34'}}>
        <Header />
        <h1 className='project-title' > Projects </h1>
          <Row>
            <Col md={6}>
                <a href='https://mikewhite628.github.io/weather-app/'><Image fluid src={camoPic} data-aos='fade-right' className='project-shadow'/></a>
            </Col>
            <Col>
                <Card data-aos='fade'>
                    <Card.Body>
                    <Card.Title>Camo To Code</Card.Title>
                    <Card.Text>A platform made for veterans that provides access to resources for learning how to code</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
          </Row>
                    
          <Row className='mt-5'>
              <Col Col md={6}>
                <a href='https://mikewhite628.github.io/landing-page/#/'><Image fluid src={fbccPic} data-aos='fade-right'className='project-shadow'/></a>
              </Col>
              <Col>
                <Card data-aos='fade'>
                    <Card.Body>
                        <Card.Title>
                          Fort Bend Carpet and Upholstery Care
                        </Card.Title>
                        <Card.Text>
                        A to-do list that uses local storage to save important task. Sub task can be added, marked complete, and removed to monitor progress. Made with pure Javascript
                        </Card.Text>
                    </Card.Body>
                </Card>
              </Col>
          </Row>

          <Row className='mt-5 mb-5'>
              <Col md={6}>
                <a href='https://shielded-brushlands-63167.herokuapp.com/inventory'><Image fluid src={gsPic} data-aos='fade-right' className='project-shadow'/></a>
              </Col>
              <Col Col md={6}>
              <Card data-aos='fade'>
                  <Card.Body>
                      <Card.Title>
                        The GameStore
                      </Card.Title>
                      <Card.Text>
                        Full Stack video game store inventory managment system. 
                      </Card.Text>
                  </Card.Body>
              </Card>
              </Col>
          </Row>
            </Container>

    )
}

export default Projects