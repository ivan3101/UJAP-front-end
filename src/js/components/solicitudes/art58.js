import React from 'react';
import { Table, Container, Button, Row, Col} from 'reactstrap';
import {connect} from 'react-redux';

class Articulo58 extends React.Component {
  state = {
    sent: false,
    error: false
  };

  onSend = () => {
    if (this.state.sent) {
      this.setState(() => ({
        error: true
      }))
    } else {
      this.setState(() => ({
        sent: true
      }));
    }
  };

  render() {
    return (
      <div>
        <div>
          <h1>Liberación de Articulo 58</h1>
          <Table bordered responsive style={{backgroundColor: 'white'}}>
            <tbody>
            <tr>
              <th>Estudiante</th>
              <td>{`${this.props.student.nombre} ${this.props.student.apellido}`}</td>
              <th>Cedula</th>
              <td>{this.props.student.cedula}</td>
              <th>Carrera</th>
              <td>{this.props.student.carrera}</td>

            </tr>
            <tr>
              <th>Indice Academico Acumulado</th>
              <td>{this.props.student.promedio}</td>
              <th>Periodo</th>
              <td>20181CR</td>
              <th>Estatus academido</th>
              <td>Alumno regular {this.props.student.estado}</td>
            </tr>
            <tr>
              <th>Estatus Administrativo</th>
              <td>Sin beca</td>
              <th>Total de UC aprobadas</th>
              <td>{this.props.student.uc}</td>
              <th>Cohorte</th>
              <td>{this.props.student.cohorte}</td>
            </tr>
            </tbody>
          </Table>
        </div>
        <div>
          {this.state.sent && !this.state.error && (<div className="alert alert-success" role="alert">
            Solicitud enviada correctamente
          </div>)}
          {this.state.error && (<div className="alert alert-danger" role="alert">
            Usted ya tiene una solicitud pendiente. No puede agregar otra
          </div>)}
          <Row>
            <Col sm={{ size: 3, offset: 9 }}>
              <Button color={'primary'} size={'lg'} onClick={this.onSend} id={'liberar'}>Solicitar liberación de articulo</Button>
            </Col>
          </Row>
          <Container style={{backgroundColor: 'white'}}>
            <Table borderless responsive striped >
              <thead>
              <tr>
                <th>#</th>
                <th>Materia</th>
                <th>U.C.</th>
                <th>Semestre</th>
                <th>Estado</th>
              </tr>
              </thead>
              <tbody>
              {this.props.materias.map((materia, index) => (
                <tr>
                  <td>{index}</td>
                  <td>{materia.nombre}</td>
                  <td>{materia.uc}</td>
                  <td>{materia.semestre}</td>
                  <td>{materia.estado}</td>
                </tr>
              ))}
              </tbody>
            </Table>
          </Container>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    student: state.auth,
    materias: state.materias
  }
};

export default connect(mapStateToProps)(Articulo58)
