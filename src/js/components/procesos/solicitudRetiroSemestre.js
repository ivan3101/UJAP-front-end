import React  from 'react';
import { Table, Button } from 'reactstrap';
import {connect} from 'react-redux';
import axios from 'axios';
import {URL_ARTICULO, URL_PAGOS} from "../../utilities/constants";


class SolicitudRetiroSemestre extends React.Component {

  state = {
    pagos: {},
    sent: false,
    error: false,
    errorMsg: '',
    retirado: false
  };

  async componentDidMount() {
    const usuario = this.props.usuario;
    try {
      const response = await axios.get(URL_PAGOS(usuario._id, '20181CR'))
      console.log(response.data);
      if (response.data) {
        this.setState(() => ({
          pagos: response.data
        }));
        const response2 = await axios.get(URL_ARTICULO(usuario._id, 'retiro'));
        if (response2.data) {
          this.setState(() => ({
            retirado: true,
            error: true,
            errorMsg: 'Ya tiene una solicitud de retiro de semestre pendiente. No puede hacer otra'
          }))
        }
      }
    } catch (e) {
      console.log(e)
    }
  }

  onSolicitar = async () => {
    const usuario = this.props.usuario;
    try {
      await axios.post(URL_ARTICULO(usuario._id, 'retiro'));
      this.setState(() => ({
        sent: true,
        retirado: true,
        error: false,
        errorMsg: ''
      }))
    } catch (e) {
      console.log(e);
    }
  };

  isValid = () => {
    if (Object.keys(this.state.pagos).length !== 0 && this.state.pagos.constructor === Object) {
      return this.state.pagos.giros.findIndex(giro => !giro.pago) === -1;
    }
    return false;
  };

  render() {
    return(
      <div>
        {this.state.sent && (<div className="alert alert-success" role="alert">
          Solicitud creada correctamente
        </div>)}
        {this.state.error && (<div className="alert alert-danger" role="alert">
          {this.state.errorMsg}
        </div>)}
        {!this.isValid() && (<div className="alert alert-danger" role="alert">
          Debe tener todas las coutas pagas para poder crear la solicitud
        </div>)}
          <Table bordered responsive style={{backgroundColor: 'white'}}>
            <thead>
            <tr className="tableHorario">
              <td className="text-center" colSpan="6"><strong>Giros del semestre</strong></td>
            </tr>
            </thead>
            <tr className="tableHorario">
              <th className="prueba">Periodo</th>
              <th className="prueba">Giro</th>
              <th className="prueba">Monto</th>
              <th className="prueba">ESTADO</th>
            </tr>
            <tbody>
              {Object.keys(this.state.pagos).length !== 0 && this.state.pagos.constructor === Object && this.state.pagos.giros.map(giro => (
                <tr>
                  <th>{this.state.pagos.periodo}</th>
                  <td>{giro.numero}</td>
                  <td>{giro.cantidad}</td>
                  <td className={'text-center'}>
                    {giro.pago ? (
                      <div className="alert alert-success" role="alert">
                      <strong>Pagada</strong>
                    </div>
                    ) : (
                      <div className="alert alert-danger" role="alert">
                        <strong>No pagada</strong>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        <Button onClick={this.onSolicitar} block disabled={this.state.sent || this.state.retirado || !this.isValid()} color={(this.state.sent || this.state.retirado || !this.isValid())? 'danger': 'primary'}>Solicitar retiro del semestre</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  usuario: state.auth.usuario
});

export default connect(mapStateToProps)(SolicitudRetiroSemestre);
