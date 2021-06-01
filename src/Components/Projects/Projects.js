import React, {useEffect } from 'react'
import camoPic from '../../images/CTC.png'
import fbccPic from '../../images/FBCC.png'
import gsPic from '../../images/gamestore.png'
import Aos from 'aos'
import 'aos/dist/aos.css';
import '../../App.css'
import Header from '../Header/Header'
import { Container, Image, Row, Col, Card, ListGroup } from 'react-bootstrap'

const Projects = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <Container className='projects' id='projects' style={{backgroundColor:'#eeeeee', color: '#252a34'}}>
        <Header />
        <h1 className='project-title'> Projects </h1>
          <Row>
            <Col md={6} className='mb-3'>
                <a href='https://mikewhite628.github.io/CamoToCode/'><Image fluid src={camoPic} data-aos='fade-right' className='project-shadow'/></a>
            </Col>
            <Col>
                <Card data-aos='fade' className='project-shadow'>
                  <Card.Header className='title-center-text blue-background'>Camo To Code</Card.Header>
                    <Card.Body>
                    <Card.Title>An Educational Tool For Veterans</Card.Title>
                    <Card.Text> Camo To Code is a platform made for veterans that provides access to resources for self education in web development and programming.</Card.Text>
                    </Card.Body>
                    <Card.Body>
                    <ListGroup as="ul">
                      <ListGroup.Item as="li" active className='pink-background'>
                        Whats under the hood?
                      </ListGroup.Item>
                      <ListGroup.Item className='grow' as="li">React</ListGroup.Item>
                      <ListGroup.Item className='grow' as="li">Javascript</ListGroup.Item>
                      <ListGroup.Item className='grow' as="li">Bootstrap</ListGroup.Item>
                    </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
          </Row>
                    
          <Row className='mt-5'>
              <Col Col md={6} className='mb-3'>
                <a href='https://mikewhite628.github.io/landing-page/#/'><Image fluid src={fbccPic} data-aos='fade-right'className='project-shadow'/></a>
              </Col>
              <Col>
                <Card data-aos='fade' className='project-shadow'>
                  <Card.Header className='title-center-text blue-background'>Fort Bend Carpet and Upholstery Care</Card.Header>
                    <Card.Body>
                        <Card.Title>
                          A Landing Page For A Small Company
                        </Card.Title>
                        <Card.Text>
                        A landing page for Fort Bend Carpet and Upholstery Care. Includes a form for potential leads to submit personal information.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                    <ListGroup as="ul">
                      <ListGroup.Item as="li" active className='pink-background'>
                        Whats under the hood?
                      </ListGroup.Item>
                      <ListGroup.Item className='grow' as="li">React</ListGroup.Item>
                      <ListGroup.Item className='grow' as="li">Javascript</ListGroup.Item>
                      <ListGroup.Item className='grow' as="li">Bootstrap</ListGroup.Item>
                    </ListGroup>
                    </Card.Body>
                </Card>
              </Col>
          </Row>

          <Row className='mt-5 mb-1'>
              <Col md={6} className='mb-3'>
                <a href='https://shielded-brushlands-63167.herokuapp.com/inventory'><Image fluid src={gsPic} data-aos='fade-right' className='project-shadow'/></a>
              </Col>
              <Col Col md={6}>
              <Card data-aos='fade' className='project-shadow'>
                <Card.Header className='title-center-text blue-background'>The GameHouse</Card.Header>
                  <Card.Body>
                      <Card.Title>
                        An inventory management system for a video game store
                      </Card.Title>
                      <Card.Text>
                        This is a full stack video inventory managment system hosted on AWS. Users can add, remove and update items from the inventories database. 
                      </Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <ListGroup as="ul">
                      <ListGroup.Item as="li" active className='pink-background'>
                        Whats under the hood?
                      </ListGroup.Item>
                      <ListGroup.Item className='grow' as="li">Express</ListGroup.Item>
                      <ListGroup.Item className='grow' as="li">MongoDB</ListGroup.Item>
                      <ListGroup.Item className='grow' as="li">PUG</ListGroup.Item>
                      <ListGroup.Item className='grow' as="li">Javascript</ListGroup.Item>
                      <ListGroup.Item className='grow' as="li">Bootstrap</ListGroup.Item>
                    </ListGroup>
                    </Card.Body>
              </Card>
              </Col>
          </Row>
            </Container>

    )
}

export default Projects