import React, { Component } from 'react';
import { Table, Container, Row, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, InputGroup} from 'reactstrap';


class RetiroAcademico extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        return(
            <div>
                <div className="row">
                    <Table bordered>
                        <thead>
                            <tr className="tableHorario">
                                <td className="text-center" colSpan="3"><strong>ASIGNATURAS SELECCIONADAS PARA SU RETIRO</strong></td>
                            </tr>
                        </thead>
                            <tr className="tableHorario">
                                <th className="prueba">ASIGNATURA</th>
                                <th className="prueba" className="text-center">UC</th>
                                <th className="prueba" className="text-center">SEMESTRE</th>
                            </tr>
                        <tbody>
                            <tr>
                                <th width="80%">
                                    <div class="form-check">
                                        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked/>
                                        ICU08304 - INTERFACES CON EL USUARIO 
                                    </div>
                                </th>
                                <td width="10%" className="text-center">2</td>
                                <td width="10%" className="text-center">9</td>                                                                             
                            </tr>
                            <tr>
                                <td colSpan="3" className="text-right">
                                    <button type="button" class="btn btn-primary active">Retirar</button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Table bordered>
                        <thead>
                            <tr className="tableHorario">
                                <td className="text-center" colSpan="3"><strong>ASIGNATURAS RETIRABLES</strong></td>
                            </tr>
                        </thead>
                            <tr className="tableHorario">
                                <th className="prueba">ASIGNATURA</th>
                                <th className="prueba text-center">UC</th>
                                <th className="prueba text-center">SEMESTRE</th>
                            </tr>
                        <tbody>
                            <tr>
                                <th width="80%">
                                    <div class="form-check">
                                        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked/>
                                        INS09303 - INGENIERIA DE SOFTWARE 
                                    </div>
                                </th>
                                <td width="10%" className="text-center">2</td>
                                <td width="10%" className="text-center">9</td>                                                                             
                            </tr>
                            <tr>
                                <th width="80%">
                                    <div class="form-check">
                                        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked/>
                                        ELECTIVA II: COMPUTACION EMERGENTE 
                                    </div>
                                </th>
                                <td width="10%" className="text-center">2</td>
                                <td width="10%" className="text-center">10</td>                                                                             
                            </tr>
                            <tr>
                                <th width="80%">
                                    <div class="form-check">
                                        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked/>
                                        PASANTIA II O TRABAJO DE GRADO II 
                                    </div>
                                </th>
                                <td width="10%" className="text-center">5</td>
                                <td width="10%" className="text-center">10</td>                                                                             
                            </tr>
                            <tr>
                                <td colSpan="3" className="text-center">
                                    <button type="button" class="btn btn-primary active">Incluir</button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="row">
                    <div className="col text-right">
                        <button type="button" class="btn btn-success active">Ratificar retiro</button>
                    </div>  
                </div>
            </div>
        );
    }     
}

export default RetiroAcademico;