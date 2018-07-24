import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Table, FormFeedback, Col, Fade} from 'reactstrap';
import './peticionEst.css';
import {connect} from 'react-redux';
import axios from "axios";
import {URL_ARTICULO} from "../../utilities/constants";

const regex = {
  email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
  asunto: /^[a-zA-Z0-9.]+$/,
  mensaje: /^[a-zA-Z0-9.!#$,\s]+$/,
};

class SolicitudEstudiantil extends Component {

  state = {
    sent: false,
    error: false,
    asunto: {
      value: '',
      valid: true,
      error: ''
    },
    email: {
      value: '',
      valid: true,
      error: ''
    },
    mensaje: {
      value: '',
      valid: true,
      error: ''
    }
  };

  async componentDidMount() {
    const user = this.props.usuario;
    const response = await axios.get(URL_ARTICULO(user._id, 1));
    if (response.data) {
      this.setState(() => ({
        articulo: response.data,
        error: true
      }));
    }
  };

  onChangeInput = e => {
    const input = e.target;
    const value = input.value.trim();
    if (!value) {
      this.setState(() => ({
        [input.name]: {
          value,
          valid: false,
          error: 'empty'
        }
      }));
    } else if (!regex[input.name].test(value)) {
      this.setState(() => ({
        [input.name]: {
          value,
          valid: false,
          error: 'regex'
        }
      }));
    } else {
      this.setState(() => ({
        [input.name]: {
          value,
          valid: true,
          error: ''
        }
      }));
    }
  };

  onSend = async e => {
    e.preventDefault();
    if (!this.state.error || !this.state.sent) {
      try {
        const user = this.props.usuario;
        await axios.post(URL_ARTICULO(user._id, 1), {
          asunto: this.state.asunto.value,
          email: this.state.email.value,
          mensaje: this.state.mensaje.value
        });
        this.setState(() => ({
          sent: true,
          error: false
        }))
      } catch (e) {
        console.log(e)
      }
    }
  };

  validForm = () => {
    return this.state.error || this.state.sent || !this.state.asunto.value || !this.state.email.value || !this.state.mensaje.value || !this.state.asunto.valid || !this.state.email.valid || !this.state.mensaje.valid
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
              <td>{this.props.usuario.carrera}</td>

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
            Solicitud enviada correctamente
          </div>)}
          {this.state.error && (<div className="alert alert-danger" role="alert">
            Usted ya tiene una solicitud pendiente. No puede agregar otra
          </div>)}
          <Form onSubmit={this.onSend}>
            <FormGroup>
              <Label for="asunto">Asunto:</Label>
              <Input type="text" name="asunto" id="asuntoPE" placeholder="Asunto" value={this.state.asunto.value} onChange={this.onChangeInput} invalid={!this.state.asunto.valid}/>
              {
                this.state.asunto.error === 'empty' && <FormFeedback invalid tooltip>Debe ingresar un asunto</FormFeedback>
              }
              {
                this.state.asunto.error === 'regex' && <FormFeedback invalid tooltip>El asunto solo puede contener letras, numeros y puntos. No puede tener saltos de linea</FormFeedback>
              }
            </FormGroup>
            <FormGroup>
              <Label for="email">Correo:</Label>
              <Input type="email" name="email" id="correoContacto" placeholder="correo@ejemplo.com" value={this.state.email.value} onChange={this.onChangeInput} invalid={!this.state.email.valid}/>
              {
                this.state.email.error === 'empty' && <FormFeedback invalid tooltip>Debe ingresar un correo electronico</FormFeedback>
              }
              {
                this.state.email.error === 'regex' && <FormFeedback invalid tooltip>Debe ingresar un correo electronico valido</FormFeedback>
              }
            </FormGroup>
            <FormGroup>
              <Label for="mensaje">Contenido de la petición:</Label>
              <Input type="textarea" name="mensaje" id="contenidoPE" value={this.state.mensaje.value} onChange={this.onChangeInput} invalid={!this.state.mensaje.valid}/>
              {
                this.state.mensaje.error === 'empty' && <FormFeedback invalid tooltip>Debe ingresar un mensaje</FormFeedback>
              }
              {
                this.state.mensaje.error === 'regex' && <FormFeedback invalid tooltip>El mensaje solo puede contener letras, numeros, caracteres especiales (!#$.,) y saltos de linea</FormFeedback>
              }
            </FormGroup>
            <Col md="12">
              <Button type={'submit'} color={this.validForm() ? 'danger' : 'primary'} size={'lg'} block disabled={this.validForm()}>Enviar Peticion</Button>
            </Col>
          </Form>
          <br></br>
        </div>

      </Fade>


    )
  }
}

const mapStateToProps = state => ({
  usuario: state.auth.usuario
});

export default connect(mapStateToProps)(SolicitudEstudiantil);
