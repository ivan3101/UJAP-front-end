import React , {Component} from 'react';
import { Container, Row, Col, Table, Fade } from 'reactstrap';
import {connect} from 'react-redux';
import MateriaRow from "./materia";
import uuid from 'uuid';
import axios from 'axios';
import {URL_HORARIO} from "../../utilities/constants";

// const marginButtons={
//     margin:"5px",
// };

const divColored={
  background:"#336699",
  width:"100%",
  height:"5px",
};

const tableStyle={
  marginTop:"10px"
};

class Informacion extends Component {

  state = {
    materias: []
  };

  async componentDidMount() {
    const usuario = this.props.usuario;
    try {
      const response = await axios.get(URL_HORARIO(usuario._id));
      if (response.data) {
        this.setState(() => ({
          materias: response.data.materias
        }));
      }
    } catch (e) {
      console.log(e);
    }
  }

  render = ()=>{
    return (
      <Fade>
        <Container fluid>
          <Row>
            <Col md="2">
              <h3>Estudiante</h3>
            </Col>
          </Row>
          <Row>
            <Container fluid>
              <Table bordered responsive style={{backgroundColor: 'white'}}>
                <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Cedula</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>{this.props.usuario.nombre}</td>
                  <td>{this.props.usuario.apellido}</td>
                  <td>V - {this.props.usuario.cedula}</td>
                </tr>

                </tbody>
                <thead>
                <tr>
                  <th>Semestre</th>
                  <th>Promedio</th>
                  <th>UC obtenidas</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>{this.props.usuario.semestre}</td>
                  <td>{this.props.usuario.promedio} pts</td>
                  <td>{this.props.usuario.uc}</td>
                </tr>
                </tbody>
              </Table>
            </Container>
          </Row>
          <Row>
            <Container fluid>
              <div style={divColored}></div>
              <Row>
                <Col md="2"><h3>Semestre</h3></Col>
              </Row>
              <Table bordered responsive style={{backgroundColor: 'white'}}>
                <thead>
                <tr>
                  <th>Costo Semestre</th>
                  <th>Seguro Universitario</th>
                  <th>Inscripcion</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td> 9.999.999</td>
                  <td> 9.999.999</td>
                  <td> 9.999.999</td>
                </tr>

                </tbody>
                <thead>
                <tr>
                  <th>Semestre Extraordinario</th>
                  <th>Unidad de Credito Adicional</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td> 9.999.999</td>
                  <td> 9.999.999</td>
                  <td></td>
                </tr>
                </tbody>
              </Table>
            </Container>
          </Row>
          <Row>
            <Container fluid>
              <div style={divColored}></div>
              <Row>
                <Col md="2"><h3>Materias</h3></Col>
              </Row>
              <Table striped bordered responsive style={{backgroundColor: 'white'}}>
                <thead>
                <tr>
                  <th>Materia</th>
                  <th>Profesor</th>
                  <th>Correo</th>
                  <th>Fecha Actualizacion</th>
                </tr>
                </thead>
                <tbody>
                {!!this.state.materias.length && this.state.materias.map(materia => (
                  <MateriaRow
                    materia={materia.materia.nombre}
                    key={uuid.v4()}
                    profesor={materia.profesor.nombre + ' ' + materia.profesor.apellido}
                    email={materia.profesor.email}
                  />
                ))}
                </tbody>
              </Table>
            </Container>
          </Row>
        </Container>
      </Fade>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    usuario: state.auth.usuario,
  }
};

export default connect(mapStateToProps)(Informacion);
