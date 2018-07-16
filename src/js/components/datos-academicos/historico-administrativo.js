import React from 'react';
import { Table, Container,  Col } from 'reactstrap';
import  './josechaparro.css'

class Historico extends React.Component {
    


  render() {
      const style = {
        textAlign: 'right',
        backgroundColor: '#DA1D3C',  
        color: 'white',

      };

        const style2 = {
            textAlign: 'center',
            backgroundColor: '#F2F3F2',  
            color: 'black',

            };      

        const style3 = {
            textAlign: 'center',
            backgroundColor: '#6085FE',  
            color: 'black',

            };            

    return (

        <Container className="border "> 
            <br />
            <Table size="sm" width="100%" className="border">
                <tr>
                    <th style={style} colspan="60%">Total Abonado</th>
                    <td style={style2} colspan="40%">0,00</td>
                </tr>
                <tr>
                    <th style={style} colspan="60%">Total Deuda</th>
                    <td style={style2} colspan="40%">0,00</td>
                </tr>
                <tr>
                    <th style={style} colspan="60%">Saldo de Giros [0/0]</th>
                    <td style={style2} colspan="40%">0,00</td>
                </tr>
            </Table>

            <br/>
            <br/>

            <Table size="sm" width="100%">
                <th style={style2} colspan="1">Recibo: <span className="black">00000</span></th>
                <th style={style2} colspan="1">Período: <span className="black">20181CR</span></th>
                <th style={style2} colspan="2">Fecha: <span className="black">01/01/01 - 00:01 am</span></th>
                <th style={style2} colspan="3">Tipo de Transaccion: <span className="black">Pago en caja</span></th>

                <br/>
            </Table>
            


                <Table style={style3} size="sm" width="100%" className="border">
                    <tr>
                            <th colspan="1">#</th>
                            <th colspan="3">Descripcion</th>
                            <th colspan="1">Monto</th>
                            <th colspan="2">Tipo</th>
                    </tr>
                        <tbody style={style2} width="100%">
                            <tr>
                            <td colspan="1">1234</td>
                            <td colspan="3">Cuota 1</td>
                            <td colspan="1">20.000,00</td>
                            <td colspan="2">Abono</td>
                            </tr>
                            <tr>
                            <td colspan="1">5678</td>
                            <td colspan="3">Cuota 2</td>
                            <td colspan="1">20.000,00</td>
                            <td colspan="2">Abono</td>
                            </tr>
                            <tr>
                            <td colspan="1">9012</td>
                            <td colspan="3">Cuota 3</td>
                            <td colspan="1">20.000,00</td>
                            <td colspan="2">Abono</td>
                            </tr>
                            <tr>
                            <td colspan="1">3456</td>
                            <td colspan="3">Cuota 4</td>
                            <td colspan="1">20.000,00</td>
                            <td colspan="2">Abono</td>
                            </tr>
                        </tbody>
                </Table>

            <br/>
            <br/>

            <Table size="sm" width="100%">
                <th style={style2} colspan="1">Recibo: <span className="black">000000</span></th>
                <th style={style2} colspan="1">Período: <span className="black">20181CR</span></th>
                <th style={style2} colspan="2">Fecha: <span className="black">01/01/01 - 00:01 am</span></th>
                <th style={style2} colspan="3">Tipo de Transaccion: <span className="black">Pago en web</span></th>

                <br/>
            </Table>
            
                <Table style={style3} size="sm" width="100%" className="border">
                    <tr>
                            <th colspan="1">#</th>
                            <th colspan="3">Descripcion</th>
                            <th colspan="1">Monto</th>
                            <th colspan="2">Tipo</th>
                    </tr>
                        <tbody style={style2} width="100%">
                            <tr>
                            <td colspan="1">9876</td>
                            <td colspan="3">Matricula</td>
                            <td colspan="1">20.000,00</td>
                            <td colspan="2">Abono</td>
                            </tr>
                            <tr>
                            <td colspan="1">5432</td>
                            <td colspan="3">Arancel</td>
                            <td colspan="1">20.000,00</td>
                            <td colspan="2">Abono</td>
                            </tr>
                        </tbody>
                </Table>
                
        </Container>   
    );
  }
}
export default Historico;