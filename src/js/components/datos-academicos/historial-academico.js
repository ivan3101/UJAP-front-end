import React from 'react';
import { Table, Container,  Col } from 'reactstrap';
import  './datos-academicos.css'

class Historial extends React.Component {
    


  render() {
      const style = {
        textAlign: 'center',
        backgroundColor: '#336699',  
        color: 'white',

      };

    return (

      <Container className="border "> 
          <br />
        <Container style={style}> <Col  md="12"> Periodo: 20181CR </Col> </Container> 
        <Table size="sm">
            <thead>
            <tr>
                <th>Car.</th>
                <th>Asignatura</th>
                <th>Acta</th>
                <th>Seccion</th>
                <th>Nota</th>
                <th>U.C.</th>
                <th>Obs.</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">AIC</th>
                <td>ACI08304</td>
                <td>Interfaces de usuario</td>
                <td>92052</td>
                <td>308C1</td>
                <td>500</td>
                
            </tr>
            <tr>
                <th scope="row">AIC</th>
                <td>ACI08304</td>
                <td>Interfaces de usuario</td>
                <td>92052</td>
                <td>308C1</td>
                <td>500</td>
                
            </tr>
            <tr>
            <th scope="row">AIC</th>
                <td>ACI08304</td>
                <td>Interfaces de usuario</td>
                <td>92052</td>
                <td>308C1</td>
                <td>500</td>
                
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
                    Indice Academico(IA):<span className="red" > 5</span>
                    
                </td>
                
            </tr>
            </tbody>
        </Table>
       
        
         <hr />
         <br />
        <Container style={style}> <Col  md="12"> Periodo:  20173CR </Col> </Container> 
        <Table size="sm" >
            <thead>
            <tr>
                <th>Car.</th>
                <th>Asignatura</th>
                <th>Acta</th>
                <th>Seccion</th>
                <th>Nota</th>
                <th>U.C.</th>
                <th>Obs.</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">AIC</th>
                <td>ACI08304</td>
                <td>Interfaces de usuario</td>
                <td>92052</td>
                <td>308C1</td>
                <td>500</td>
                
            </tr>
            <tr>
                <th scope="row">AIC</th>
                <td>ACI08304</td>
                <td>Interfaces de usuario</td>
                <td>92052</td>
                <td>308C1</td>
                <td>500</td>
                
            </tr>
            <tr>
            <th scope="row">AIC</th>
                <td>ACI08304</td>
                <td>Interfaces de usuario</td>
                <td>92052</td>
                <td>308C1</td>
                <td>500</td>
                
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
                    Indice Academico(IA): <span className="red" >1</span>
                    
                </td>
                
            </tr>
            </tbody>
        </Table>

    </Container>    
    );
  }
}
export default Historial;