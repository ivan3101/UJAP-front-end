import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Container, Table, Row} from 'reactstrap';
import {URL_PAPELES} from "../../utilities/constants";

class Papeles extends Component {

  state = {
    papeles: []
  };

  async componentDidMount() {
    try {
      const response = await axios.get(URL_PAPELES(this.props.usuario._id));
      if (response.data) {
        this.setState(() => ({
          papeles: response.data
        }))
      }
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div>
        <h1>Entrega de Papeles</h1>
        <Row>
          <Container fluid>
            <Table bordered responsive style={{backgroundColor: 'white'}}>
              <tbody>
              <tr>
                <th>Estudiante</th>
                <td>{`${this.props.usuario.nombre} ${this.props.usuario.apellido}`}</td>
                <th>Cedula</th>
                <td>{this.props.usuario.cedula}</td>
                <th>Carrera</th>
                <td>{this.props.usuario.carrera.nombre}</td>

              </tr>
              <tr>
                <th>Indice Academico Acumulado</th>
                <td>{this.props.usuario.promedio}</td>
                <th>Periodo</th>
                <td>20181CR</td>
                <th>Estatus academido</th>
                <td>Alumno regular {this.props.usuario.estado}</td>
              </tr>
              <tr>
                <th>Estatus Administrativo</th>
                <td>{this.props.usuario.beca}</td>
                <th>Total de UC aprobadas</th>
                <td>{this.props.usuario.uc}</td>
                <th>Cohorte</th>
                <td>{this.props.usuario.cohorte}</td>
              </tr>
              </tbody>
            </Table>
          </Container>
        </Row>
        <Row>
          <Container fluid>
            <Table bordered responsive style={{backgroundColor: 'white'}}>
              <thead>
              <tr>
                <th>Papel</th>
                <th>Estado</th>
              </tr>
              </thead>
              <tbody>
              {!!this.state.papeles.length && this.state.papeles.map(papel => (
                <tr>
                  <td>{papel.nombre}</td>
                  <td><span style={{color: papel.estado === 'No entregado'? 'red' : 'green'}}>{papel.estado}</span></td>
                </tr>
              ))}
              </tbody>
            </Table>
          </Container>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  usuario: state.auth.usuario
});

export default connect(mapStateToProps)(Papeles);
