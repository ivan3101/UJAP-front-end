import React, { Component } from 'react';
import {Container,Row,Col } from 'reactstrap';

class Inicio extends Component {
    render = () => (
        <div className="inicio">
            <Container fluid>
            <Row>
                <Col md="8"> 
                    <h1>Noticias</h1>
                
                </Col>
                <Col md="4">
                    <h1>Segunda parte</h1>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Inicio;