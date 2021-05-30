import React from 'react'
import deskPic from '../../images/desk.png'
import mePic from '../../images/me.png'
import { Link } from 'react-scroll'
import { Container, Row, Col, Image, Button, Card} from 'react-bootstrap'


const Landing = () => {

    return (
        <Container fluid style={{backgroundColor: '#252a34'}} className='landing' id={'landing'}> 
            <Row><div style={{height:'150px'}}>hello</div></Row>
            <Row className='justify-content-center align-items-center'>
                <Col xs={4}>
                    <Image src={mePic} roundedCircle fluid/>
                </Col>
                <Col xs={8} >
                    <Card style={{border:'none', fontSize:'22px'}}>
                        <Card.Body style={{color: '#eaeaea', backgroundColor: '#252a34'}} outline='none'>
                            <Card.Text>
                            Hi I'm <b style={{color: "#ff2e63"}}>Michael White</b>, I'm a Web Developer and Marine Corps Veteran
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='justify-content-center' style={{textAlign: 'center'}}>
                <Col xs={9} >
                    <Button variant='info'><Link to='about' smooth={true} duration={1000}>Learn-more</Link></Button>
                </Col>
            </Row>           
        </Container>
    )
}

export default Landing 
