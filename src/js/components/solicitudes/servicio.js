import React, { Component } from 'react';
import { Button, Table, Fade} from 'reactstrap';
import {connect} from 'react-redux';
import axios from "axios";
import {URL_ARTICULO} from "../../utilities/constants";


class ServicioComunitario extends Component {

  state = {
    sent: false,
    error: false,
    errorMsg: false,
    inscrito: false
  };

  async componentDidMount() {
    const user = this.props.usuario;
    const response = await axios.get(URL_ARTICULO(user._id, 'servicio comunitario'));
    if (response.data) {
      this.setState(() => ({
        error: true,
        errorMsg: 'Ya se encuentra inscrito en el servicio comunitario',
        inscrito: true
      }));
    } else if (user.uc < (user.carrera.ucTotales / 2)) {
      this.setState(() => ({
        error: true,
        errorMsg: 'No cuenta con las unidades de credito suficientes para realizar la inscripcion'
      }))
    }
  };

  onSend = async () => {
    try {
      const user = this.props.usuario;
      await axios.post(URL_ARTICULO(user._id, 'servicio comunitario'));
      this.setState(() => ({
        sent: true,
        error: false,
        errorMsg: '',
        inscrito: true
      }))
    } catch (e) {
      console.log(e)
    }
  };

  render() {
    return (
      <Fade in>
        <div>
          <h1>Peticion Estudiantil</h1>
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
        </div>
        <div>
          <br></br>
          {this.state.sent && !this.state.error && (<div className="alert alert-success" role="alert">
            Inscripcion realizada correctamente
          </div>)}
          {this.state.error && (<div className="alert alert-danger" role="alert">
            {this.state.errorMsg}
          </div>)}
          <br></br>
        </div>
        <div>
          <Table bordered responsive style={{backgroundColor: 'white'}}>
            <tbody>
            <tr>
              <th>Unidades requeridas</th>
              <td>{this.props.usuario.carrera.ucTotales / 2}</td>
              <th>Unidades aprobadas</th>
              <td>{this.props.usuario.uc}</td>
            </tr>
            </tbody>
          </Table>
          <Button
            block
            disabled={this.state.sent || this.state.inscrito || (this.props.usuario.uc < (this.props.usuario.carrera.ucTotales / 2))}
            color={(this.state.sent || this.state.inscrito  || (this.props.usuario.uc < (this.props.usuario.carrera.ucTotales / 2)))? 'danger':'primary'}
            onClick={this.onSend}
          >Solicitar inscripcion al servicio comunitario</Button>
        </div>
      </Fade>
    )
  }
}

const mapStateToProps = state => ({
  usuario: state.auth.usuario
});

export default connect(mapStateToProps)(ServicioComunitario);
