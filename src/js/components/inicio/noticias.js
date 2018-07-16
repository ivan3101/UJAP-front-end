import React, {Component} from 'react';
import {Card, CardBody, CardFooter, CardTitle, CardText, Col,Row, Container, NavLink} from 'reactstrap';

const cardColor = {

    backgroundColor:'#336699',
    color:'white',
  };
const cardFooter = {

    backgroundColor:'rgb(96,181,254)',
      textAlign: 'center',
      color: "white"
  };

 class Noticias extends Component {
    render() {
        return(

                <Container>
                <Row>
                    <Col md="4">
                        <Card style={cardColor}>
                            <CardBody>
                                    <CardTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</CardTitle>
                                <CardText>Publicado el 24/May/2018</CardText>
                                <small className="icon-eye">{' '}4470{' '}<span className="icon-bubble">{' '}0</span></small>
                                </CardBody>
                                <CardFooter style={cardFooter} className="text-muted "><NavLink href="" className="text-light icon-plus"> LEER </NavLink></CardFooter>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card style={cardColor}>
                            <CardBody>
                                    <CardTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</CardTitle>
                                <CardText>Publicado el 24/May/2018</CardText>
                                <small className="icon-eye">{' '}4470{' '}<span className="icon-bubble">{' '}0</span></small>
                                </CardBody>
                                <CardFooter style={cardFooter} className="text-muted "><NavLink href="" className="text-light icon-plus"> LEER </NavLink></CardFooter>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card style={cardColor}>
                            <CardBody>
                                    <CardTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</CardTitle>
                                <CardText>Publicado el 24/May/2018</CardText>
                                <small className="icon-eye">{' '}4470{' '}<span className="icon-bubble">{' '}0</span></small>
                                </CardBody>
                                <CardFooter style={cardFooter} className="text-muted "><NavLink href="" className="text-light icon-plus"> LEER </NavLink></CardFooter>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card style={cardColor}>
                            <CardBody>
                                    <CardTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</CardTitle>
                                <CardText>Publicado el 24/May/2018</CardText>
                                <small className="icon-eye">{' '}4470{' '}<span className="icon-bubble">{' '}0</span></small>
                                </CardBody>
                                <CardFooter style={cardFooter} className="text-muted "><NavLink href="" className="text-light icon-plus"> LEER </NavLink></CardFooter>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card style={cardColor}>
                            <CardBody>
                                    <CardTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</CardTitle>
                                <CardText>Publicado el 24/May/2018</CardText>
                                <small className="icon-eye">{' '}4470{' '}<span className="icon-bubble">{' '}0</span></small>
                                </CardBody>
                                <CardFooter style={cardFooter} className="text-muted "><NavLink href="" className="text-light icon-plus"> LEER </NavLink></CardFooter>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card style={cardColor}>
                            <CardBody>
                                    <CardTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</CardTitle>
                                <CardText>Publicado el 24/May/2018</CardText>
                                <small className="icon-eye">{' '}4470{' '}<span className="icon-bubble">{' '}0</span></small>
                                </CardBody>
                                <CardFooter style={cardFooter} className="text-muted "><NavLink href="" className="text-light icon-plus"> LEER </NavLink></CardFooter>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card style={cardColor}>
                            <CardBody>
                                    <CardTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</CardTitle>
                                <CardText>Publicado el 24/May/2018</CardText>
                                <small className="icon-eye">{' '}4470{' '}<span className="icon-bubble">{' '}0</span></small>
                                </CardBody>
                                <CardFooter style={cardFooter} className="text-muted "><NavLink href="" className="text-light icon-plus"> LEER </NavLink></CardFooter>
                        </Card>
                    </Col>
        </Row>
        </Container>

        )

    }
}

export default Noticias;
