import React from 'react';
import { Table, Col, Button} from 'reactstrap';
import axios from 'axios';
import {connect} from 'react-redux';
import {URL_HORARIO} from "../../utilities/constants";

class RetiroAcademico extends React.Component {

  state = {
    horario: [],
    retiradas: [],
    error: false,
    errorMsg: {},
    sent: false,
    retirado: false,
    selectedRetirar: '',
    selectedRetirada: ''
  };

  async componentDidMount() {
    const usuario = this.props.usuario;
    try {
      const response = await axios.get(URL_HORARIO(usuario._id, '20181CR'));
      if (response.data) {
        this.setState(() => ({
          horario: response.data.materias.map(materia => ({
            materia: materia.materia._id,
            nombre: materia.materia.nombre,
            seccion: materia.seccion,
            uc: materia.uc,
            semestre: materia.semestre,
            bloques: materia.bloques,
            profesor: materia.profesor._id
          }))
        }));
        if (response.data.retiroAdm) {
          this.setState(() => ({
            error: true,
            retirado: true,
            errorMsg: 'Usted ya realizo el proceso de retiro. No puede volver a hacerlo'
          }))
        }
      }
    } catch (e) {
      console.log(e)
    }


  }

  onChangeRetirar = e => {
    const event = e.currentTarget;
    this.setState(() => ({
      selectedRetirar: event.value
    }));
  };

  onChangeRetirada = e => {
    const event = e.currentTarget;
    this.setState(() => ({
      selectedRetirada: event.value
    }));
  };

  onRetirar = () => {
    if (this.state.horario.length === 1) {
      this.setState(() => ({
        error: true,
        errorMsg: 'No puede retirar todas las materias inscritas por este medio'
      }))
    } else {
      const materia = this.state.horario.find(materia => materia.materia === this.state.selectedRetirar);
      this.setState(prevState => ({
        retiradas: [...prevState.retiradas, materia],
        horario: prevState.horario.filter(materiaAg => materiaAg.materia !== materia.materia),
        error: false,
        errorMsg: '',
        selectedRetirar: ''
      }));
    }
  };

  onAgregar = () => {
    const materia = this.state.retiradas.find(materia => materia.materia === this.state.selectedRetirada);
    this.setState(prevState => ({
      retiradas: prevState.retiradas.filter(materia => materia.materia !== this.state.selectedRetirada),
      horario: [...prevState.horario, materia],
      error: false,
      errorMsg: '',
      selectedRetirada: ''
    }));
  };

  onRatificar = async () => {
    try {
      const usuario = this.props.usuario;
      axios.patch(`${URL_HORARIO(usuario._id, '20181CR')}&tipo=retiro`, {
        materias: this.state.horario
      });
      this.setState(() => ({
        sent: true,
        error: false,
        errorMsg: '',
        retirado: true,
        retiradas: [],
        selectedRetirada: '',
        selectedRetirar: ''
      }))
    } catch (e) {
      console.log(e)
    }
  };

  render() {
    return(
        <div>
          <h1>Retiro Academico</h1>
          {this.state.sent && (<div className="alert alert-success" role="alert">
            Retiro ratificado correctamente
          </div>)}
          {this.state.error && (<div className="alert alert-danger" role="alert">
            {this.state.errorMsg}
          </div>)}
          <Button color={!this.state.retiradas.length || this.state.retirado ? 'danger': 'success'} onClick={this.onRatificar} block disabled={!this.state.retiradas.length || this.state.retirado}>Ratificar cambios</Button>
          <br/>
          <Table bordered responsive style={{backgroundColor: 'white'}}>
            <thead>
            <tr className="tableHorario">
              <td className="text-center" colSpan="3"><strong>Asignaturas retirables</strong></td>
            </tr>
            </thead>
            <tbody>
            <tr className="tableHorario">
              <th className="prueba">Asignatura</th>
              <th className="prueba text-center">UC</th>
              <th className="prueba text-center">Semestre</th>
            </tr>
            {
              !!this.state.horario.length && this.state.horario.map(materia => (
                <tr key={materia.materia}>
                  <th width="80%">
                    <div className="form-check">
                      <input type="radio"
                             className="form-check-input"
                             value={materia.materia}
                             checked={this.state.selectedRetirar === materia.materia}
                             onChange={this.onChangeRetirar}
                      />
                      {materia.seccion} - {materia.nombre}
                    </div>
                  </th>
                  <td width="10%" className="text-center">{materia.uc}</td>
                  <td width="10%" className="text-center">{materia.semestre}</td>
                </tr>
              ))
            }
            </tbody>
          </Table>
          <Col md={{size: 2, offset:10}}>
            <Button color={!this.state.selectedRetirar || this.state.retirado? 'danger': 'primary'} onClick={this.onRetirar} block disabled={!this.state.selectedRetirar || this.state.retirado}>Retirar materia</Button>
          </Col>
          <br/>
          <br/>
          <Table bordered responsive style={{backgroundColor: 'white'}}>
            <thead>
            <tr className="tableHorario">
              <td className="text-center" colSpan="3"><strong>Asignaturas seleccionadas para su retiro</strong></td>
            </tr>
            </thead>
            <tbody>
            <tr className="tableHorario">
              <th className="prueba">Asignatura</th>
              <th className="prueba text-center">UC</th>
              <th className="prueba text-center">Semestre</th>
            </tr>
            {
              !!this.state.retiradas.length && this.state.retiradas.map(materia => (
                <tr key={materia.materia}>
                  <th width="80%">
                    <div className="form-check">
                      <input type="radio"
                             className="form-check-input"
                             value={materia.materia}
                             checked={this.state.selectedRetirada === materia.materia}
                             onChange={this.onChangeRetirada}
                      />
                      {materia.seccion} - {materia.nombre}
                    </div>
                  </th>
                  <td width="10%" className="text-center">{materia.uc}</td>
                  <td width="10%" className="text-center">{materia.semestre}</td>
                </tr>
              ))
            }
            </tbody>
          </Table>
          <Col md={{size: 2, offset:10}}>
            <Button color={!this.state.selectedRetirada || this.state.retirado? 'danger': 'primary'} onClick={this.onAgregar} block disabled={!this.state.selectedRetirada || this.state.retirado}>Agregar de nuevo</Button>
          </Col>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  usuario: state.auth.usuario
});

export default connect(mapStateToProps)(RetiroAcademico);
