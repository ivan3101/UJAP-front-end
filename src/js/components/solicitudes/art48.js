import React from 'react';
import { Table, Button, Row, Col, Card,CardBody,CardHeader } from 'reactstrap';
import {connect} from 'react-redux';
import axios from "axios";
import {URL_ARTICULO, URL_HORARIO} from "../../utilities/constants";
const styles={
  color: "black",
  background: "#f2f3f2",
  border: "1px solid #ccc",
  boxShadow: "1px 2px #cce",
};
const header={
  color:"white",
  background:"rgb(96,181,254)"

};
class Articulo48 extends React.Component {
  state = {
    sent: false,
    error: false,
    errorMsg: '',
    materias: [],
    solicitado: false
  };

  async componentDidMount() {
    const usuario = this.props.student;
    try {
      const response = await axios.get(URL_HORARIO(usuario._id));
      if (response.data) {
        this.setState(() => ({
          materias: response.data.materias
        }));
        const response2 = await axios.get(URL_ARTICULO(usuario._id, 'Articulo 48'));
        if (response2.data) {
          this.setState(() => ({
            solicitado: true,
            error: true,
            errorMsg: 'Ya tiene una solicitud de liberacion de articulo 48 pendiente. No puede solicitar otra'
          }))
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  onSend = async () => {
    try {
      const user = this.props.student;
      await axios.post(URL_ARTICULO(user._id, 'Articulo 48'));
      this.setState(() => ({
        sent: true,
        error: false,
        errorMsg: ''
      }))
    } catch (e) {
      console.log(e)
    }
  };
  render() {
    return (
      <div>
        <div>
          <h1>Liberación de Articulo 48</h1>
          <Table bordered responsive style={{backgroundColor: 'white'}}>
            <tbody>
            <tr>
              <th>Estudiante</th>
              <td>{`${this.props.student.nombre} ${this.props.student.apellido}`}</td>
              <th>Cedula</th>
              <td>{this.props.student.cedula}</td>
              <th>Carrera</th>
              <td>{this.props.student.carrera.nombre}</td>

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
          <Card style={styles}>
            <CardHeader style={header}>
              <h3>
                Solicitud
              </h3>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md="12">
                  {this.state.sent && !this.state.error && (<div className="alert alert-success" role="alert">
                    Solicitud enviada correctamente</div>)}
                  {this.state.error && (<div className="alert alert-danger" role="alert">
                      {this.state.errorMsg}</div>)}
                </Col>
                <Row>
                  <Col md="1">
                  </Col>
                  <Col md="5">
                    <Button color={this.state.sent || this.state.solicitado ? 'danger' : 'primary'}
                            disabled={this.state.sent || this.state.solicitado}
                            size={'lg'} onClick={this.onSend} >Solicitar liberación de articulo</Button>
                  </Col>
                </Row>

                <Col md="6">
                  <p className="lead">Alumno: {`${this.props.student.nombre} ${this.props.student.apellido}`}.
                    Solicita la liberación del Art. 48 para optar por las siguientes materias:</p>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <Table borderless responsive striped >
                    <thead>
                    <tr>
                      <th>Materia</th>
                      <th>U.C.</th>
                      <th>Semestre</th>
                    </tr>
                    </thead>
                    <tbody>
                    {!!this.state.materias.length && this.state.materias.map((materia, index) => (
                      <tr>
                        <td>{materia.materia.nombre}</td>
                        <td>{materia.materia.uc}</td>
                        <td>{materia.materia.semestre}</td>
                      </tr>
                    ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    student: state.auth.usuario
  }
};

export default connect(mapStateToProps)(Articulo48)
