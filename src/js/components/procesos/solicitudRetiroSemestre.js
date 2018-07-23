import React  from 'react';
import { Table} from 'reactstrap';


class SolicitudRetiroSemestre extends React.Component {

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
                                <td className="text-center" colSpan="6"><strong>GIROS PENDIENTES DEL ALUMNO</strong></td>
                            </tr>
                        </thead>
                            <tr className="tableHorario">
                                <th className="prueba">PERIODO</th>
                                <th className="prueba">GIRO</th>
                                <th className="prueba">MONTO</th>
                                <th className="prueba">FECHA DE DEPOSITO</th>
                                <th className="prueba">FECHA DE VENCIMIENTO</th>
                                <th className="prueba">ESTADO</th>
                            </tr>
                        <tbody>
                            <tr>
                                <th>20181CR</th>
                                <td>1</td>
                                <td>580.000,00 BSF</td>
                                <td>07/05/2018</td>
                                <td>15/05/2018</td>
                                <td className="text-center">
                                    <div class="alert alert-success" role="alert">
                                        <strong>¡PAGADA!</strong>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>20181CR</th>
                                <td>2</td>
                                <td>580.000,00 BSF</td>
                                <td>22/05/2018</td>
                                <td>30/05/2018</td>
                                <td className="text-center">
                                    <div class="alert alert-success" role="alert">
                                        <strong>¡PAGADA!</strong>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>20181CR</th>
                                <td>3</td>
                                <td>580.000,00 BSF</td>
                                <td></td>
                                <td>7/06/2018</td>
                                <td className="text-center">
                                    <div class="alert alert-danger" role="alert">
                                        <strong>!VENCIDA - PENDIENTE!</strong>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>20181CR</th>
                                <td>4</td>
                                <td>580.000,00 BSF</td>
                                <td></td>
                                <td>22/06/2018</td>
                                <td className="text-center">
                                    <div class="alert alert-info" role="alert">
                                        <strong>!PENDIENTE!</strong>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>20181CR</th>
                                <td>5</td>
                                <td>580.000,00 BSF</td>
                                <td></td>
                                <td>12/07/2018</td>
                                <td className="text-center">
                                    <div class="alert alert-info" role="alert">
                                        <strong>!PENDIENTE!</strong>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="row">
                    <div className="alert alert-danger" role="alert">
                        <strong>¡Error!</strong> El alumno no puede solicitar el retiro del semestre por que tiene giros pendientes.
                    </div>
                </div>
                <div className="row">
                    <button type="button" class="btn btn-success active">Solicitar</button>
                </div>
            </div>
        );
    }
}

export default SolicitudRetiroSemestre;
