import React, { Component } from 'react';
import { Container, Row, Col, Card,CardBody,CardHeader,Fade } from 'reactstrap';
import Noticias from './noticias';
import logoPath from '../../../assets/img/brand/logo.png';
import {connect} from 'react-redux';

const styles={
  // color: "black",
  // background: "#f2f3f2",
  // border: "1px solid #ccc",
  // boxShadow: "1px 2px #cce",
};
const header={
  color:"white",
  background:"rgb(96,181,254)"

};

class Inicio extends Component {

  render = () => (

    <Fade>
      <Container fluid>
        <Row>
          <Col md="12">
            <Row>
              <Container fluid>
                <Card style={styles}>
                  <CardHeader style={header}>
                    <h3>
                      Bienvenido a UJAP en linea
                    </h3>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col md="2">
                        <img src={logoPath} alt="logo ujap" className="img-fluid"/>
                      </Col>
                      <Col md="10">
                        <p className="lead">Bienvenido a UJAP en linea {this.props.name}. Tu portal para conocer las ultimas noticias sobre la UJAP y administrar tu vida estudiantil</p>
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
        </Row>
      </Container>
    </Fade>
  )
}

const mapStateToProps = state => ({
  name: `${state.auth.usuario.nombre} ${state.auth.usuario.apellido}`
});

export default connect(mapStateToProps)(Inicio);
