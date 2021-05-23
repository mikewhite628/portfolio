import React, {useEffect } from 'react'
import weatherPic from '../../images/weather-app.png'
import todoPic from '../../images/todo.png'
import cvPic from '../../images/cv.png'
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
                <a href='https://mikewhite628.github.io/weather-app/'><Image fluid src={weatherPic} data-aos='fade-right' className='project-shadow'/></a>
            </Col>
            <Col>
                <Card data-aos='fade'>
                    <Card.Body>
                    <Card.Title>Weather Checker</Card.Title>
                    <Card.Text>Used a weather api to create a simple weather app that can be used to display any cities current weather conditions. Made with Pure Javascript</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
          </Row>
                    
          <Row className='mt-5'>
              <Col Col md={6}>
                <a href='https://mikewhite628.github.io/to-do-list//'><Image fluid src={todoPic} data-aos='fade-right'className='project-shadow'/></a>
              </Col>
              <Col>
                <Card data-aos='fade'>
                    <Card.Body>
                        <Card.Title>
                          To-Do List
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
                <a href='https://mikewhite628.github.io/cv-project//'><Image fluid src={cvPic} data-aos='fade-right' className='project-shadow'/></a>
              </Col>
              <Col Col md={6}>
              <Card data-aos='fade'>
                  <Card.Body>
                      <Card.Title>
                        CV
                      </Card.Title>
                      <Card.Text>
                        Used React to create a resume that the user can that users can update with their own information
                      </Card.Text>
                  </Card.Body>
              </Card>
              </Col>
          </Row>
            </Container>

    )
}

export default Projects