import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {URL_HORARIO, URL_MATERIAS_DISPONIBLES} from "../../utilities/constants";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Button, Row, Col} from 'reactstrap';
import uuid from 'uuid';
import moment from 'moment';
import {path} from 'ramda';

class Adicion extends Component {
  state = {
    horario: [],
    disponibles: [],
    materiaSelected: {
      materia: '',
      nombre: '',
      seccion: []
    },
    inscrito: false,
    seccionSelected: '',
    sent: false,
    error: false,
    errorMsg: '',
    dropdownMaterias: false,
    dropdownSeccion: false
  };

  async componentDidMount() {
    const usuario = this.props.usuario;
    try {
      const response = await axios.get(URL_HORARIO(usuario._id));
      if (response.data) {
        this.setState(() => ({
          horario: response.data.materias.map(materia => ({
            materia: materia.materia._id,
            nombre: materia.materia.nombre,
            seccion: materia.seccion,
            bloques: materia.bloques,
            profesor: materia.profesor._id
          }))
        }));
        if (response.data.modificado) {
          this.setState(() => ({
            error: true,
            errorMsg: 'Usted ya ratifico sus modificaciones. No puede volver a hacerlo',
            inscrito: true
          }))
        }
        const response2 = await axios.get(URL_MATERIAS_DISPONIBLES(usuario.semestre, usuario.carrera._id));
        this.setState(() => ({
          disponibles: response2.data
        }))
      }

    } catch (e) {
      console.log(e)
    }
  }

  toggle = dropdown => {
    this.setState({
      [dropdown]: !this.state[dropdown]
    });
  };

  changeMateria = e => {
    const event = e.currentTarget;
    this.setState(prevState => {
      const seccion = prevState.disponibles.find(materia => materia._id === event.value).horario.map(horario => horario.seccion);
      return {
        materiaSelected: {
          materia: event.value,
          nombre: event.innerText,
          seccion
        },
        seccionSelected: ''
      }
    })
  };

  changeSeccion = e => {
    const seccionSelected = e.currentTarget.innerText;
    this.setState(() => ({
      seccionSelected
    }));
  };

  onAddMateria = () => {
    let coincidence = this.state.horario.findIndex(materia => {
      let condicion;
      for (let bloque of materia.bloques) {
        const inicioAg = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
        const bloques = this.state.disponibles.find(materia => materia._id === this.state.materiaSelected.materia).horario.find(bloque => bloque.seccion === this.state.seccionSelected).bloque.slice(0);
        for (let bloque2 of bloques) {
          const inicio = moment(moment(bloque2.inicio).format('h:mm a'), 'h:mm a');
          condicion = inicio.isSameOrAfter(inicioAg) && bloque.dia === bloque2.dia;
        }
      }
      return condicion;
    });
    if (this.state.horario.findIndex(materia => materia.materia === this.state.materiaSelected.materia) !== -1) {
      this.setState(() => ({
        error: true,
        errorMsg: 'Esta materia ya se encuentra en su horario. Escoja otra materia o retirela antes de cambiar de seccion'
      }))
    } else if (coincidence !== -1 ) {
      this.setState(() => ({
        error: true,
        errorMsg: `No puede agregar esta seccion porque coincide con otra materia`
      }));
    } else {
      this.setState(prevState => {
        const bloques = prevState.disponibles.find(materia => materia._id === prevState.materiaSelected.materia).horario.find(bloques => bloques.seccion === prevState.seccionSelected).bloque.slice(0);
        const profesor = prevState.disponibles.find(materia => materia._id === prevState.materiaSelected.materia).horario.find(horario => horario.seccion === prevState.seccionSelected).profesor;
        return {
          horario: [
            ...prevState.horario,
            {
              ...prevState.materiaSelected,
              seccion: prevState.seccionSelected,
              profesor,
              bloques
            }
          ],
          error: false,
          errorMsg: '',
          materiaSelected: {
            materia: '',
            nombre: '',
            seccion: []
          },
          seccionSelected: ''
        };
      })
    }
  };

  onRemoveMateria = () => {
    const index = this.state.horario.findIndex(materia => materia.materia === this.state.materiaSelected.materia);
    if (index !== -1) {
      this.setState(prevState => ({
        horario: prevState.horario.filter(materia => materia.materia !== this.state.materiaSelected.materia),
        error: false,
        erroMsg: ''
      }))
    } else {
      this.setState(() => ({
        error: true,
        errorMsg: 'No puede remover esta materia porque aun no ha sido agrega a su horario'
      }))
    }
  };

  onRatificate = async () => {
    try {
      const usuario = this.props.usuario;
      axios.patch(`${URL_HORARIO(usuario._id, '20181CR')}&tipo=acr`, {
        materias: this.state.horario
      });
      this.setState(() => ({
        sent: true,
        error: false,
        errorMsg: '',
        inscrito: true
      }))
    } catch (e) {
      console.log(e);
    }
  };

  addRow = path(['nombre']);

  render() {

    return (
      <div>
        <div>
          <h1>Adicion, cambio y retiro</h1>
        </div>
        <div>
          {this.state.sent && (<div className="alert alert-success" role="alert">
            Cambios ratificados correctamente
          </div>)}
          {this.state.error && (<div className="alert alert-danger" role="alert">
            {this.state.errorMsg}
          </div>)}
          <div>
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
          <Row>
            <Col md={{size: 2, offset: 2}}>
              <Dropdown isOpen={this.state.dropdownMaterias} toggle={() => this.toggle('dropdownMaterias')}>
                <DropdownToggle caret>{this.state.materiaSelected.nombre ? this.state.materiaSelected.nombre : 'Seleccione una materia'}</DropdownToggle>
                <DropdownMenu>
                  {
                    this.state.disponibles.map(materia => (
                      <DropdownItem onClick={this.changeMateria} active={this.state.materiaSelected.materia === materia._id} value={materia._id} key={materia._id}>{materia.nombre}</DropdownItem>
                    ))
                  }
                </DropdownMenu>
              </Dropdown>
            </Col>
            <Col md={{size: 2, offset: 3}}>
              <Dropdown isOpen={this.state.dropdownSeccion} toggle={() => this.toggle('dropdownSeccion')} disabled={Object.is(this.state.materiaSelected, {})}>
                <DropdownToggle caret>{this.state.seccionSelected ? this.state.seccionSelected : 'Seleccione una seccion'}</DropdownToggle>
                <DropdownMenu>
                  {
                    this.state.materiaSelected.seccion.map(seccion => (
                      <DropdownItem onClick={this.changeSeccion} active={this.state.seccionSelected === seccion} key={uuid.v4()}>{seccion}</DropdownItem>
                    ))
                  }
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
        </div>
        <div>
          <br/>
          <Row>
            <Col>
              <Button color="primary" onClick={this.onAddMateria} block disabled={!this.state.materiaSelected.materia === '' || !this.state.seccionSelected || this.state.inscrito} color={(!this.state.materiaSelected.materia === '' || !this.state.seccionSelected || this.state.inscrito)? 'danger': 'primary'}>Agregar materia</Button>
            </Col>
            <Col>
              <Button color="primary" onClick={this.onRemoveMateria} block disabled={!this.state.materiaSelected.materia === '' || this.state.inscrito || this.state.horario.findIndex(materia => materia.materia === this.state.materiaSelected.materia) === -1} color={(!this.state.materiaSelected.materia === '' || this.state.inscrito || this.state.horario.findIndex(materia => materia.materia === this.state.materiaSelected.materia) === -1)? 'danger': 'primary'}>Retirar materia</Button>
            </Col>
            <Col>
              <Button color="primary" onClick={this.onRatificate} block disabled={!this.state.horario.length || this.state.inscrito} color={(!this.state.horario.length || this.state.inscrito)? 'danger' : 'primary'}>Ratificar</Button>
            </Col>
          </Row>
        </div>
        <br/>
        <Table bordered responsive style={{backgroundColor: 'white'}}>
          <thead>
          <tr className="tableHorario">
            <th className="prueba">Sesión</th>
            <th className="prueba">Lunes</th>
            <th className="prueba">Martes</th>
            <th className="prueba">Miercoles</th>
            <th className="prueba">Jueves</th>
            <th className="prueba">Viernes</th>
            <th className="prueba">Sabado</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">de 07:00 am hasta 07:45 am</th>
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Lunes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('7:00 am', 'h:mm a');
                      const end = moment('7:45 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true;
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Martes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('7:00 am', 'h:mm a');
                      const end = moment('7:45 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Miercoles') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('7:00 am', 'h:mm a');
                      const end = moment('7:45 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Jueves') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('7:00 am', 'h:mm a');
                      const end = moment('7:45 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Viernes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('7:00 am', 'h:mm a');
                      const end = moment('7:45 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Sabado') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('7:00 am', 'h:mm a');
                      const end = moment('7:45 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
          </tr>
          <tr>
            <th scope="row">de 07:50 am hasta 08:35 am</th>
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Lunes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('7:50 am', 'h:mm a');
                      const end = moment('8:35 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Martes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('7:50 am', 'h:mm a');
                      const end = moment('8:35 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Miercoles') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('7:50 am', 'h:mm a');
                      const end = moment('8:35 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Jueves') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('7:50 am', 'h:mm a');
                      const end = moment('8:35 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Viernes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('7:50 am', 'h:mm a');
                      const end = moment('8:35 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Sabado') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('7:50 am', 'h:mm a');
                      const end = moment('8:35 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
          </tr>
          <tr>
            <th scope="row">de 08:40 am hasta 09:25 am</th>
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Lunes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('8:40 am', 'h:mm a');
                      const end = moment('9:25 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Martes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('8:40 am', 'h:mm a');
                      const end = moment('9:25 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Miercoles') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('8:40 am', 'h:mm a');
                      const end = moment('9:25 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Jueves') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('8:40 am', 'h:mm a');
                      const end = moment('9:25 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Viernes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('8:40 am', 'h:mm a');
                      const end = moment('9:25 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Sabado') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('8:40 am', 'h:mm a');
                      const end = moment('9:25 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
          </tr>
          <tr>
            <th scope="row">de 09:30 am hasta 10:15 am</th>
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Lunes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('9:30 am', 'h:mm a');
                      const end = moment('10:15 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Martes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('9:30 am', 'h:mm a');
                      const end = moment('10:15 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Miercoles') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('9:30 am', 'h:mm a');
                      const end = moment('10:15 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Jueves') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('9:30 am', 'h:mm a');
                      const end = moment('10:15 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Viernes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('9:30 am', 'h:mm a');
                      const end = moment('10:15 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Sabado') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('9:30 am', 'h:mm a');
                      const end = moment('10:15 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
          </tr>
          <tr>
            <th scope="row">de 10:20 am hasta 11:05 am</th>
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Lunes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('10:20 am', 'h:mm a');
                      const end = moment('11:05 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Martes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('10:20 am', 'h:mm a');
                      const end = moment('11:05 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Miercoles') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('10:20 am', 'h:mm a');
                      const end = moment('11:05 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Jueves') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('10:20 am', 'h:mm a');
                      const end = moment('11:05 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Viernes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('10:20 am', 'h:mm a');
                      const end = moment('11:05 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Sabado') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('10:20 am', 'h:mm a');
                      const end = moment('11:05 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
          </tr>
          <tr>
            <th scope="row">de 11:10 am hasta 11:55 am</th>
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Lunes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('11:10 am', 'h:mm a');
                      const end = moment('11:55 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && final.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Martes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('11:10 am', 'h:mm a');
                      const end = moment('11:55 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Miercoles') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('11:10 am', 'h:mm a');
                      const end = moment('11:55 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && final.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Jueves') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('11:10 am', 'h:mm a');
                      const end = moment('11:55 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && final.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Viernes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('11:10 am', 'h:mm a');
                      const end = moment('11:55 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Sabado') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('11:10 am', 'h:mm a');
                      const end = moment('11:55 am', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
          </tr>
          <tr>
            <th scope="row">de 12:00 pm hasta 12:45 pm</th>
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Lunes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('12:00 pm', 'h:mm a');
                      const end = moment('12:45 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Martes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('12:00 pm', 'h:mm a');
                      const end = moment('12:45 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Miercoles') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('12:00 pm', 'h:mm a');
                      const end = moment('12:45 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Jueves') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('12:00 pm', 'h:mm a');
                      const end = moment('12:45 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Viernes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('12:00 pm', 'h:mm a');
                      const end = moment('12:45 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Sabado') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('12:00 pm', 'h:mm a');
                      const end = moment('12:45 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
          </tr>
          <tr>
            <th scope="row">de 12:50 pm hasta 01:35 pm</th>
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Lunes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('12:50 pm', 'h:mm a');
                      const end = moment('1:35 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Martes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('12:50 pm', 'h:mm a');
                      const end = moment('1:35 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Miercoles') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('12:50 pm', 'h:mm a');
                      const end = moment('1:35 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Jueves') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('12:50 pm', 'h:mm a');
                      const end = moment('1:35 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Viernes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('12:50 pm', 'h:mm a');
                      const end = moment('1:35 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Sabado') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('12:50 pm', 'h:mm a');
                      const end = moment('1:35 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
          </tr>
          <tr>
            <th scope="row">de 1:40 pm hasta 02:25 pm</th>
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Lunes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('1:40 pm', 'h:mm a');
                      const end = moment('2:25 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Martes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('1:40 pm', 'h:mm a');
                      const end = moment('2:25 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Miercoles') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('1:40 pm', 'h:mm a');
                      const end = moment('2:25 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Jueves') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('1:40 pm', 'h:mm a');
                      const end = moment('2:25 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Viernes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('1:40 pm', 'h:mm a');
                      const end = moment('2:25 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Sabado') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('1:40 pm', 'h:mm a');
                      const end = moment('2:25 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
          </tr>
          <tr>
            <th scope="row">de 02:25 pm hasta 03:10 pm</th>
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Lunes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('2:25 pm', 'h:mm a');
                      const end = moment('3:10 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Martes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('2:25 pm', 'h:mm a');
                      const end = moment('3:10 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Miercoles') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('2:25 pm', 'h:mm a');
                      const end = moment('3:10 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Jueves') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('2:25 pm', 'h:mm a');
                      const end = moment('3:10 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Viernes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('2:25 pm', 'h:mm a');
                      const end = moment('3:10 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Sabado') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('2:25 pm', 'h:mm a');
                      const end = moment('3:10 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
          </tr>
          <tr>
            <th scope="row">de 03:15 pm hasta 04:00 pm</th>
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Lunes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('3:15 pm', 'h:mm a');
                      const end = moment('4:00 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Martes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('3:15 pm', 'h:mm a');
                      const end = moment('4:00 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Miercoles') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('3:15 pm', 'h:mm a');
                      const end = moment('4:00 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Jueves') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('3:15 pm', 'h:mm a');
                      const end = moment('4:00 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Viernes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('3:15 pm', 'h:mm a');
                      const end = moment('4:00 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Sabado') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('3:15 pm', 'h:mm a');
                      const end = moment('4:00 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
          </tr>
          <tr>
            <th scope="row">de 04:05 pm hasta 04:50 pm</th>
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Lunes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('4:05 pm', 'h:mm a');
                      const end = moment('4:50 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Martes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('4:05 pm', 'h:mm a');
                      const end = moment('4:50 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Miercoles') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('4:05 pm', 'h:mm a');
                      const end = moment('4:50 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Jueves') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('4:05 pm', 'h:mm a');
                      const end = moment('4:50 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Viernes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('4:05 pm', 'h:mm a');
                      const end = moment('4:50 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Sabado') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('4:05 pm', 'h:mm a');
                      const end = moment('4:50 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
          </tr>
          <tr>
            <th scope="row">de 04:55 pm hasta 05:40 pm</th>
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Lunes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('4:55 pm', 'h:mm a');
                      const end = moment('5:40 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Martes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('4:55 pm', 'h:mm a');
                      const end = moment('5:40 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Miercoles') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('4:55 pm', 'h:mm a');
                      const end = moment('5:40 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Jueves') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('4:55 pm', 'h:mm a');
                      const end = moment('5:40 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Viernes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('4:55 pm', 'h:mm a');
                      const end = moment('5:40 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Sabado') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('4:55 pm', 'h:mm a');
                      const end = moment('5:40 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
          </tr>
          <tr>
            <th scope="row">de 05:45 pm hasta 06:30 pm</th>
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Lunes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('5:45 pm', 'h:mm a');
                      const end = moment('6:30 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Martes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('5:45 pm', 'h:mm a');
                      const end = moment('6:30 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Miercoles') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('5:45 pm', 'h:mm a');
                      const end = moment('6:30 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Jueves') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('5:45 pm', 'h:mm a');
                      const end = moment('6:30 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Viernes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('5:45 pm', 'h:mm a');
                      const end = moment('6:30 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Sabado') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('5:45 pm', 'h:mm a');
                      const end = moment('6:30 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
          </tr>
          <tr>
            <th scope="row">de 06:35 pm hasta 07:20 pm</th>
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Lunes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('6:35 pm', 'h:mm a');
                      const end = moment('7:20 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Martes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('6:35 pm', 'h:mm a');
                      const end = moment('7:20 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Miercoles') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('6:35 pm', 'h:mm a');
                      const end = moment('7:20 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Jueves') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('6:35 pm', 'h:mm a');
                      const end = moment('7:20 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Viernes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('6:35 pm', 'h:mm a');
                      const end = moment('7:20 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Sabado') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('6:35 pm', 'h:mm a');
                      const end = moment('7:20 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
          </tr>
          <tr>
            <th scope="row">de 07:25 pm hasta 08:10 pm</th>
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Lunes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('7:25 pm', 'h:mm a');
                      const end = moment('8:10 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Martes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('7:25 pm', 'h:mm a');
                      const end = moment('8:10 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Miercoles') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('7:25 pm', 'h:mm a');
                      const end = moment('8:10 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Jueves') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('7:25 pm', 'h:mm a');
                      const end = moment('8:10 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Viernes') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('7:25 pm', 'h:mm a');
                      const end = moment('8:10 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
            {
              <td>{
                this.addRow(this.state.horario.find(materia => {
                  let condition = false;
                  for (let bloque of materia.bloques) {
                    if (bloque.dia === 'Sabado') {
                      const inicio = moment(moment(bloque.inicio).format('h:mm a'), 'h:mm a');
                      const final = moment(moment(bloque.fin).format('h:mm a'), 'h:mm a');
                      const begin = moment('7:25 pm', 'h:mm a');
                      const end = moment('8:10 pm', 'h:mm a');
                      if ((inicio.isSameOrAfter(begin) && inicio.isSameOrBefore(end)) || (final.isSameOrAfter(begin) && inicio.isSameOrBefore(end))) {
                        condition = true
                      }
                    }
                  }
                  return condition
                }))
              }</td>
            }
          </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  usuario: state.auth.usuario
});

export default connect(mapStateToProps)(Adicion);
