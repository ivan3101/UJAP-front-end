import React from 'react';
import { Table, Row, Col, Card,CardBody,CardHeader } from 'reactstrap';
import {connect} from 'react-redux';
import axios from 'axios';
import {URL_ARTICULO} from "../../utilities/constants";
import moment from 'moment';
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
class estadoSol extends React.Component {
  state = {
    articulos: []
  };

  async componentDidMount() {
    const usuario = this.props.student;
    try {
      const response = await axios.get(URL_ARTICULO(usuario._id));
      if (response.data) {
        console.log(response.data)
        this.setState(() => ({
          articulos: response.data
        }))
      }
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1>Estado de Solicitudes</h1>
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
          <Card>
            <CardHeader style={{background: this.props.theme === 'http://localhost:5000/style.css'? 'rgb(96,181,254)' : '#bbbbbb', color: this.props.theme === 'http://localhost:5000/style.css'? 'white' : 'black'}}>
              <h3>
                Estado de solicitudes
              </h3>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md="12">
                  <Table borderless responsive striped >
                    <thead>
                    <tr>
                      <th>Solicitud</th>
                      <th>Fecha de Solicitud</th>
                      <th>Estado</th>
                    </tr>
                    </thead>
                    <tbody>
                    {!!this.state.articulos.length && this.state.articulos.map(articulo => (
                      <tr>
                        <td>{articulo.articulo}</td>
                        <td>{moment(articulo.fecha).format('D/M/YYYY')}</td>
                        <td>{articulo.estado}</td>
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
  }
}
const mapStateToProps = state => {
  return {
    student: state.auth.usuario,
    theme: state.theme.theme
  }
};

export default connect(mapStateToProps)(estadoSol)
