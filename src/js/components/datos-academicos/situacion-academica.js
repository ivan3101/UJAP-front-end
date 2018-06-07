import React from 'react';
import { Table, Container,  Col } from 'reactstrap';
import  './datos-academicos.css'

class Situacion extends React.Component {
    


  render() {
      const style = {
        textAlign: 'center',
        backgroundColor: '#336699',  
        color: 'white',

      };

    return (

      <Container className="border "> 
          <br />
        <Container style={style}> <Col  md="12"> Situacion Academica </Col> </Container>
        <Table size="sm">
            <thead>
            <tr>
                <th>Semestre</th>
                <th>Asignatura</th>
                <th>Nota</th>
                <th>UC</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">8</th>
                <td>ACI08304 Interfaces de Usuario</td>
                <td>00</td>
                <td>00</td>
            </tr>
            <tr>
                <th scope="row">8</th>
                <td>ACI08304 Interfaces de Usuario</td>
                <td>00</td>
                <td>00</td>

            </tr>
            <tr>
                <th scope="row">8</th>
                <td>ACI08304 Interfaces de Usuario</td>
                <td>00</td>
                <td>00</td>

            </tr>
            <tr>
            <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    U.C. Aprobadas: 0
                    <br/>
                    Indice Academico(IA):<span className="red" >00</span>
                </td>
            </tr>
            </tbody>
        </Table>
    </Container>    
    );
  }
}
export default Situacion;
