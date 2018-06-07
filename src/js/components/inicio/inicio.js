import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Card,CardBody,CardHeader,Fade } from 'reactstrap';
import Noticias from './noticias';
import HistorialNoticias from './historialNoticias';

const styles={
    color: "black",
    background: "#f2f3f2",
    border: "1px solid #ccc",
    boxShadow: "1px 2px #cce",
}
const header={
    color:"white",
    background:"rgb(96,181,254)"

}

class Inicio extends Component {

    render = () => (
        
        <Fade>
            <Container fluid>
            <Row>
                <Col md="8">
                <Row> 
                        <Container fluid>
                        <Card style={styles}>
                                    <CardHeader style={header}>
                                    <h3>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    </h3>
                                    </CardHeader>
                            <CardBody>
                                <Row>
                                <Col md="4">
                                    IMAGEN
                                </Col>
                                <Col md="8">
                                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                </Col>
                                </Row>

                            </CardBody>
                            
                        </Card>
                        </Container>
                </Row>
                    <Row>
                            <Noticias />
                    </Row>
                </Col>
                <Col md="4">
                    <HistorialNoticias />
                </Col>
            </Row>
            </Container>
        </Fade>
    )
}

export default Inicio;