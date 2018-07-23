import React, {Component} from 'react';
import {Row, Container} from 'reactstrap';
import axios from 'axios';
import Noticia from './noticia';
import {URL_GET_NOTICIAS} from "../../utilities/constants";
import uuid from 'uuid';

class Noticias extends Component {

  state = {
    noticias: []
  };

  async componentDidMount() {
    const response = await axios.get(URL_GET_NOTICIAS);
    this.setState(() => ({
      noticias: response.data
    }));
  }

  render() {
    return(
      <Container>
        <Row>
          {this.state.noticias.map(noticia => (<Noticia titulo={noticia.titulo} cuerpo={noticia.cuerpo} fecha={noticia.fecha} key={uuid.v4()}/>))}
        </Row>
      </Container>

    )

  }
}

export default Noticias;
