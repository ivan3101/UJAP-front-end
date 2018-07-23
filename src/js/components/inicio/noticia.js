import React from 'react';
import {Card, CardBody, CardTitle, CardText, Col, CardSubtitle} from 'reactstrap';
import moment from 'moment';

const cardColor = {

  backgroundColor:'#336699',
  color:'white',
};

const Noticia = ({titulo, cuerpo, fecha}) => (
  <Col md="4">
    <Card style={cardColor}>
      <CardBody>
        <CardTitle>{titulo}</CardTitle>
        <CardSubtitle>Publicado el {moment(fecha).format('D-M-YYYY')}</CardSubtitle>
        <br/>
        <CardText>{cuerpo}</CardText>
      </CardBody>
    </Card>
  </Col>
);

export default Noticia;
