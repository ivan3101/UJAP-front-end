import React from 'react';
import {Card, CardBody, CardTitle, CardText, Col, CardSubtitle} from 'reactstrap';
import moment from 'moment';
import {connect} from 'react-redux';

const Noticia = (props) => (
  <Col md="4">
    <Card style={{backgroundColor: props.theme === 'http://localhost:5000/style.css'? '#336699' : '#bbbbbb', color: props.theme === 'http://localhost:5000/style.css'? 'white' : 'black'}}>
      <CardBody>
        <CardTitle>{props.titulo}</CardTitle>
        <CardSubtitle>Publicado el {moment(props.fecha).format('D-M-YYYY')}</CardSubtitle>
        <br/>
        <CardText>{props.cuerpo}</CardText>
      </CardBody>
    </Card>
  </Col>
);

const mapStateToProps = state => ({
  theme: state.theme.theme
});

export default connect(mapStateToProps)(Noticia);
