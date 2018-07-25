import React from 'react';
import { Table, Button, Col, FormFeedback, FormGroup, Input, Form, Label} from 'reactstrap';
import {connect} from 'react-redux';
import axios from 'axios';
import {URL_ARTICULO, URL_HORARIO} from "../../utilities/constants";

const regex = {
  mensaje: /^[a-zA-Z0-9.!#$,\s]+$/
};

class Articulo58 extends React.Component {
  state = {
    sent: false,
    error: false,
    articulo: {},
    materia: '',
    mensaje: {
      value: '',
      valid: true,
      error: ''
    },
    materias: []
  };

  async componentDidMount() {
    const user = this.props.usuario;
    try {
      const response = await axios.get(URL_ARTICULO(user._id, 58));
      if (response.data) {
        this.setState(() => ({
          articulo: response.data,
          error: true
        }));
      }
      const response2 = await axios.get(URL_HORARIO(user._id));
      this.setState(() => ({
        materias: response2.data.materias
      }));
    } catch (e) {
      console.log(e)
    }
  };

  onSend = async e => {
    e.preventDefault();
    if (!this.state.error || !this.state.sent) {
      try {
        const user = this.props.usuario;
        await axios.post(URL_ARTICULO(user._id, 58), {
          materia: this.state.materia,
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

  onInputChange = e => {
    const input = e.target;
    const value = input.value;
    if (input.name === 'materia') {
      this.setState(() => ({
        [input.name]: value
      }))
    } else {
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
    }
  };

  validForm = () => {
    return this.state.error || this.state.sent || !this.state.materia || !this.state.mensaje.valid || !this.state.mensaje.value
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
          {this.state.sent && !this.state.error && (<div className="alert alert-success" role="alert">
            Solicitud enviada correctamente
          </div>)}
          {this.state.error && (<div className="alert alert-danger" role="alert">
            Usted ya tiene una solicitud pendiente. No puede agregar otra
          </div>)}
          <Form onSubmit={this.onSend}>
            <FormGroup>
              <Label for="asunto">Materia</Label>
              <Input type="select" name="materia" value={this.state.materia} onChange={this.onInputChange}>
                <option selected disabled={this.state.materia} hidden={this.state.materia}>Seleccione una materia</option>
                {
                  this.state.materias.map(materia => (
                    <option value={materia.materia._id} key={materia.materia._id}>{materia.materia.nombre}</option>
                  ))
                }
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="mensaje">Mensaje explicativo</Label>
              <Input type="textarea" name="mensaje" value={this.state.mensaje.value} onChange={this.onInputChange} invalid={!this.state.mensaje.valid}/>
              {
                this.state.mensaje.error === 'empty' && <FormFeedback invalid tooltip>Debe ingresar un mensaje</FormFeedback>
              }
              {
                this.state.mensaje.error === 'regex' && <FormFeedback invalid tooltip>El mensaje solo puede contener letras, numeros, caracteres especiales (!#$.,) y saltos de linea</FormFeedback>
              }
            </FormGroup>
            <Col md="12">
              <Button type={'submit'} color={this.validForm() ? 'danger' : 'primary'} id={'liberar'} size={'lg'} block disabled={this.validForm()}>Enviar Solicitud</Button>
            </Col>
          </Form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    usuario: state.auth.usuario,

  }
};

export default connect(mapStateToProps)(Articulo58)
