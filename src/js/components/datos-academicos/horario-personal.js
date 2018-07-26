import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from "axios";
import {URL_HORARIO} from "../../utilities/constants";
import moment from "moment";
import {Table} from "reactstrap";
import {path} from "ramda";

class HorarioPersonal extends Component {
  state = {
    horario: []
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
            bloques: materia.bloques
          }))
        }));
      }
    } catch (e) {
      console.log(e)
    }
  }

  addRow = path(['nombre']);

  render() {
    return (
      <div>
        <div>
          <h1>Horario Personal</h1>
        </div>
        <div>
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
      </div>
    )
  }
}

const mapStateToProps = state => ({
  usuario: state.auth.usuario
});

export default connect(mapStateToProps)(HorarioPersonal);
