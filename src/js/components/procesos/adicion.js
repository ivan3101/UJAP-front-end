import React from 'react';
import { Table, DropdownToggle, DropdownMenu, DropdownItem, Button, Dropdown} from 'reactstrap';
import {connect} from 'react-redux';
import {horarioLoad} from "../../actions/horario";
import {ratificar} from "../../actions/auth";

class Adicion extends React.Component {
  state = {
    dropdownOpen: false,
    selected: '',
    materias: this.props.horario,
    error: false,
    errorMsg: '',
    success: false
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  changeValue = e => {
    this.setState({
      selected: e.currentTarget.textContent
    })
  };

  onAddMateria = () => {
    const materia = this.state.selected;
    if (this.state.materias.findIndex(m => m.nombre === materia) === -1) {
      if (materia === 'Interfaces con el Usuario 308c1 | Lunes 07:00 - 08:30am/ Miercoles 07:00 - 08:30am') {
        if (this.state.materias.findIndex(m => m.nombre === 'Sistemas de Informacion II 308c1 | Miercoles 07:45 - 09:25am') === -1) {
          this.setState((prevState) => ({
            materias: prevState.materias.concat([{
              nombre: materia,
              profesor: 'Oscar Valdivia',
              horario: [
                {
                  dia: 'lunes',
                  inicio: '7:00',
                  fin: '8:30'
                },
                {
                  dia: 'miercoles',
                  inicio: '7:00',
                  fin: '8:30'
                }
              ]
            }]),
            selected: '',
            error: false
          }))
        } else {
          this.setState(() => ({
            error: true,
            errorMsg: 'Esta materia entra en conflicto con Sistemas de Informacion 2'
          }))
        }
      } else if (materia === 'Electiva II Computacion Emergente 309c1 | Viernes 10:20 - 11:50am') {
        this.setState((prevState) => ({
          materias: prevState.materias.concat([{
            nombre: materia,
            profesor: 'Gabriel Goncalves',
            horario: [
              {
                dia: 'viernes',
                inicio: '10:20',
                fin: '11:50'
              }
            ]
          }]),
          selected: '',
          error: false
        }))
      } else if (materia === 'Control de Proyecto 309c1 | Martes 08:40 - 10:10am') {
        this.setState((prevState) => ({
          materias: prevState.materias.concat([{
            nombre: materia,
            profesor: 'Alirio Angel',
            horario: [
              {
                dia: 'martes',
                inicio: '8:40',
                fin: '10:10'
              },
            ]
          }]),
          selected: '',
          error: false
        }))
      } else if (materia === 'Sistemas de Informacion II 308c1 | Miercoles 07:45 - 09:25am') {
        if (this.state.materias.findIndex(m => m.nombre === 'Interfaces con el Usuario 308c1 | Lunes 07:00 - 08:30am/ Miercoles 07:00 - 08:30am') === -1) {
          this.setState((prevState) => ({
            materias: prevState.materias.concat([{
              nombre: materia,
              profesor: 'Juan Ochoa',
              horario: [
                {
                  dia: 'miercoles',
                  inicio: '7:45',
                  fin: '8:30'
                }
              ]
            }]),
            selected: '',
            error: false
          }))
        } else {
          this.setState(() => ({
            error: true,
            errorMsg: 'Esta materia entra en conflicto con Interfaces con el Usuario'
          }))
        }
      }
    } else {
      this.setState(() => ({
        error: true,
        errorMsg: 'Esa materia ya se encuentra agregada'
      }))
    }
  };

  onRemoveMateria = () => {
    const materia = this.state.selected;
    if (this.state.materias.findIndex(m => m.nombre === materia) !== -1) {
      this.setState(prevState => ({
        materias: prevState.materias.filter(m => m.nombre !== materia),
        selected: '',
        error: false
      }))
    } else {
      this.setState(() => ({
        error: true,
        errorMsg: 'Esa materia no se encuentra agregada'
      }))
    }
  };

  onRatificate = () => {
    this.props.dispatch(horarioLoad(this.state.materias));
    this.props.dispatch(ratificar());
    this.setState(() => ({
      success: true
    }))
  };

  render() {
    return(
      <div>
        <div>
          <h1>Adicion, cambio y retiro</h1>
        </div>
        <div>
          {this.state.success && (<div className="alert alert-success" role="alert">
            Horario ratificado correctamente
          </div>)}
          {!this.state.success && this.props.ratificado && (<div className="alert alert-primary" role="alert">
            Usted ya ratifico los cambios
          </div>)}
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} setActiveFromChild={true}>
            <DropdownToggle caret>{this.state.selected ? this.state.selected : 'Seleccione una materia'}</DropdownToggle>
            <DropdownMenu >
              <DropdownItem onClick={this.changeValue} active={this.state.selected === 'Interfaces con el Usuario 308c1 | Lunes 07:00 - 08:30am/ Miercoles 07:00 - 08:30am'}>Interfaces con el Usuario 308c1 | Lunes 07:00 - 08:30am/ Miercoles 07:00 - 08:30am</DropdownItem>
              <DropdownItem onClick={this.changeValue} active={this.state.selected === 'Electiva II Computacion Emergente 309c1 | Viernes 10:20 - 11:50am'}>Electiva II Computacion Emergente 309c1 | Viernes 10:20 - 11:50am</DropdownItem>
              <DropdownItem onClick={this.changeValue} active={this.state.selected === 'Control de Proyecto 309c1 | Martes 08:40 - 10:10am'}>Control de Proyecto 309c1 | Martes 08:40 - 10:10am</DropdownItem>
              <DropdownItem onClick={this.changeValue} active={this.state.selected === 'Sistemas de Informacion II 308c1 | Miercoles 07:45 - 09:25am'}>Sistemas de Informacion II 308c1 | Miercoles 07:45 - 09:25am</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        {
          this.state.error && (<div className="alert alert-danger" role="alert">
          {this.state.errorMsg}
        </div>)
        }
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
            <th scope="row">de 07:00 hasta 07:45 am</th>
            <td>{this.state.materias.findIndex(m => m.nombre === 'Interfaces con el Usuario 308c1 | Lunes 07:00 - 08:30am/ Miercoles 07:00 - 08:30am') !== -1 && 'Interfaces con el Usuario'}</td>
            <td></td>
            <td>{this.state.materias.findIndex(m => m.nombre === 'Interfaces con el Usuario 308c1 | Lunes 07:00 - 08:30am/ Miercoles 07:00 - 08:30am') !== -1 && 'Interfaces con el Usuario'}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">de 07:45 hasta 08:30 am</th>
            <td>{this.state.materias.findIndex(m => m.nombre === 'Interfaces con el Usuario 308c1 | Lunes 07:00 - 08:30am/ Miercoles 07:00 - 08:30am') !== -1 && 'Interfaces con el Usuario'}</td>
            <td></td>
            <td>{this.state.materias.findIndex(m => m.nombre === 'Interfaces con el Usuario 308c1 | Lunes 07:00 - 08:30am/ Miercoles 07:00 - 08:30am') !== -1 && 'Interfaces con el Usuario'} {this.state.materias.findIndex(m => m.nombre === 'Sistemas de Informacion II 308c1 | Miercoles 07:45 - 09:25am') !== -1 && 'Sistemas de Informacion II'}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">de 08:40 hasta 09:25 am</th>
            <td></td>
            <td>{this.state.materias.findIndex(m => m.nombre === 'Control de Proyecto 309c1 | Martes 08:40 - 10:10am') !== -1 && 'Control de Proyecto'}</td>
            <td>{this.state.materias.findIndex(m => m.nombre === 'Sistemas de Informacion II 308c1 | Miercoles 07:45 - 09:25am') !== -1 && 'Sistemas de Informacion II'}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">de 09:25  hasta 10:10 am</th>
            <td></td>
            <td>{this.state.materias.findIndex(m => m.nombre === 'Control de Proyecto 309c1 | Martes 08:40 - 10:10am') !== -1 && 'Control de Proyecto'}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">de 10:20  hasta 11:05 am</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{this.state.materias.findIndex(m => m.nombre === 'Electiva II Computacion Emergente 309c1 | Viernes 10:20 - 11:50am') !== -1 && 'Electiva II Computacion Emergente'}</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">de 11:05 hasta 11:50 am</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{this.state.materias.findIndex(m => m.nombre === 'Electiva II Computacion Emergente 309c1 | Viernes 10:20 - 11:50am') !== -1 && 'Electiva II Computacion Emergente'}</td>
            <td></td>
          </tr>
          </tbody>
        </Table>
        <div>
          <Button  color="primary" onClick={this.onAddMateria} disabled={!this.state.selected || this.props.ratificado}>Agregar</Button>{' '}
          <Button  color="primary" onClick={this.onRemoveMateria} disabled={!this.state.selected || this.props.ratificado}>Retirar</Button>{' '}
          <Button  color="primary" onClick={this.onRatificate} disabled={!this.state.materias.length || this.props.ratificado}>Ratificar</Button>{' '}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    horario: state.horario,
    ratificado: state.auth.ratificado
  }
};

export default connect(mapStateToProps)(Adicion);
