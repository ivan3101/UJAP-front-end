import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Row, Table, Col, Button, Dropdown, DropdownToggle, DropdownItem, DropdownMenu, Input} from 'reactstrap';
import {URL_MATERIAS_PROFESOR, URL_NOTAS, URL_PROFESOR_SECCION} from "../../utilities/constants";

class Notas extends Component{

  state = {
    materias: [],
    ids: [],
    seccionSelected: {},
    toggle: false,
    notas: [],
    sent: false
  };

  toggle = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  };

  async componentDidMount() {
    try {
      const response = await axios.get(URL_PROFESOR_SECCION(this.props.usuario._id));
      if (response.data) {
        this.setState(() => ({
          materias: response.data.secciones,
          ids: response.data.ids
        }));
      }
    } catch (e) {
      console.log(e);
    }
  }

  onSelectSeccion = async e => {
    const seccion = e.currentTarget.innerText;
    const id = e.currentTarget.value;
    this.setState(() => ({
      seccionSelected: {
        seccion,
        id
      }
    }));
    try {
      const response = await axios.get(URL_NOTAS(this.props.usuario._id, id, seccion));
      if (response.data) {
        console.log(response.data)
        this.setState(() => ({
          notas: response.data.estudiantes
        }));
      }
    } catch (e) {
      console.log(e);
    }
  };

  onChangeNota = (index, event) => {
    const input = event.target;
    if (input.value >=0 && input.value <= 20) {
      this.setState(prevState => {
        const notas = prevState.notas.slice(0);
        notas[index].notas[input.name] = input.value;
        return {
          notas
        }
      })
    }
  };

  onSubmit = async () => {
    try {
      await axios.patch(URL_NOTAS(this.props.usuario._id, this.state.seccionSelected.id, this.state.seccionSelected.seccion), {
        notas: this.state.notas
      });
      this.setState(() => ({
        sent: true
      }));
    } catch (e) {
      console.log(e)
    }
  };

  render() {
    return (
      <div>
        <div>
          <h1>Cargar Notas</h1>
        </div>
        <div>
          {this.state.sent && (<div className="alert alert-success" role="alert">
            Notas actualizadas
          </div>)}
          <Row>
            <Col md={2}>
              <Dropdown isOpen={this.state.toggle} toggle={this.toggle}>
                <DropdownToggle caret>{this.state.seccionSelected.seccion ? this.state.seccionSelected.seccion : 'Seleccione una seccion'}</DropdownToggle>
                <DropdownMenu>
                  {
                    this.state.materias.map((seccion, index) => (
                      <DropdownItem active={this.state.seccionSelected.seccion === seccion} onClick={this.onSelectSeccion} value={this.state.ids[index]}>{seccion}</DropdownItem>
                    ))
                  }
                </DropdownMenu>
              </Dropdown>
            </Col>
            <Col md={{size: 2, offset: 2}}>
              <Button onClick={this.onSubmit}>Actualizar notas</Button>
            </Col>
          </Row>
          <Table bordered responsive style={{backgroundColor: 'white'}}>
            <thead>
            <tr>
              <th>Nombre</th>
              <th>Cedula</th>
              <th>Evaluacion 1 20%</th>
              <th>Evaluacion 2 20%</th>
              <th>Evaluacion 3 20%</th>
              <th>Evaluacion 4 20%</th>
              <th>Evaluacion 5 20%</th>
            </tr>
            </thead>
            <tbody>
            {this.state.notas.map((nota, index) => (
              <tr>
                <td>{nota.estudiante.nombre + ' ' + nota.estudiante.apellido}</td>
                <td>{nota.estudiante.cedula}</td>
                <td><Input type='number' placeholder={'S/N'} value={nota.notas[0]} min={0} max={20} step={0.01} name={0} onChange={e => this.onChangeNota(index, e)}/></td>
                <td><Input type='number' placeholder={'S/N'} value={nota.notas[1]} min={0} max={20} step={0.01} name={1} onChange={e => this.onChangeNota(index, e)}/></td>
                <td><Input type='number' placeholder={'S/N'} value={nota.notas[2]} min={0} max={20} step={0.01} name={2} onChange={e => this.onChangeNota(index, e)}/></td>
                <td><Input type='number' placeholder={'S/N'} value={nota.notas[3]} min={0} max={20} step={0.01} name={3} onChange={e => this.onChangeNota(index, e)}/></td>
                <td><Input type='number' placeholder={'S/N'} value={nota.notas[4]} min={0} max={20} step={0.01} name={4} onChange={e => this.onChangeNota(index, e)}/></td>
              </tr>
            ))}
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  usuario: state.auth.usuario
});

export default connect(mapStateToProps)(Notas);
