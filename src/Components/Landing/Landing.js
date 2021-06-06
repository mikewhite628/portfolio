import React from 'react'
import mePic from '../../images/me.png'
import { Link } from 'react-scroll'
import { Container, Row, Col, Image, Button, Card} from 'react-bootstrap'


const Landing = () => {

    return (
        <Container fluid className='landing no-padding' id={'landing'}> 
            <Row><div style={{height:'200px'}}>hello</div></Row>
            <Row className='justify-content-center align-items-center'>
                <Col xs={4}>
                    <Image src={mePic} roundedCircle fluid/>
                </Col>
                <Col xs={8} >
                    <Card style={{border:'none', fontSize:'22px'}}>
                        <Card.Body style={{color: '#eaeaea', backgroundColor: '#252a34'}} outline='none'>
                            <Card.Text>
                            Hi I'm <b style={{color: "#ff2e63"}}>Michael White</b>, I'm a Web Developer and United States Marine Corps Veteran based out of Houston, Texas
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
