import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Table, Container, Col, Fade} from 'reactstrap';
import './peticionEst.css';

class SolicitudEstudiantil extends Component {
    render() {
      const style = {
        textAlign: 'center',
        backgroundColor: '#336699',  
        color: 'white',

      };

     
      return (
        <Fade in>
        <Container className="border">
        <br></br>
        <Container style={style}><Col md="12">Datos del alumno</Col></Container>
          <td><Container><Col md="4">IMAGEN ALUMNO</Col></Container></td>
          <td>
          <Container>
          <td>
          <Table size="sm">
          <tbody>
            <tr>
              <th scope="row"><span className="red">V-24553071</span> - Daniel José Paredes Pardo</th>
            </tr>
            <tr>
              <th scope="row">Carrera: <span className="red">AIC - AIC INGENIERÍA DE COMPUTACIÓN</span></th>
            </tr>
            <tr>
              <th scope="row">Período: <span className="red" >20181CR</span></th>
            </tr>
            <tr>
            <th scope="row">Estátus administrativo: <span className="red" >Beca Mejor Indice 100%</span></th>
            </tr>
            <tr>
            <th scope="row">Estádo académico: <span className="red" >ALUMNO REGULAR Activo del 20181CR</span></th>
            </tr>
          </tbody>
        </Table>
          </td>
        <td>
        <Table size="sm">
          <tbody>
            <tr>
              <th scope="row">Total de unidades crédito aprobadas: <span className="red">133</span></th>
            </tr>
            <tr>
              <th scope="row">Indice Académico Acumulado (IAA): <span className="red">14,66</span></th>
            </tr>
            <tr>
              <th scope="row">Total de unidades crédito inscritas del último período: <span className="red" >23</span></th>
            </tr>
            <tr>
            <th scope="row">Total de unidades crédito aprobadas del último período: <span className="red" >23</span></th>
            </tr>
            <tr>
            <th scope="row">Cohorte: <span className="red" >41</span></th>
            </tr>
          </tbody>
        </Table>
        </td>
          </Container>
          </td>
        </Container>
        <div>
           
           
        
             
             <br></br>
                   
 
             <Form>
               <FormGroup>
                 <Label for="asunto">Asunto:</Label><Input type="text" name="asunto" id="asuntoPE" placeholder="Asunto" />
               </FormGroup>
               <FormGroup>
                 <Label for="correo">Correo:</Label>
                 <Input type="email" name="correo" id="correoContacto" placeholder="correo@ejemplo.com" />
               </FormGroup>
               
               <FormGroup>
                 <Label for="contenidoPeticion">Contenido de la petición:</Label>
                 <Input type="textarea" name="contenidoPE" id="contenidoPE" />
               </FormGroup>
               <FormGroup check>
                 
               </FormGroup>
               <Col md="12"><center><Button>Enviar</Button></center></Col>
             </Form>
             <br></br>
           
         </div>

        </Fade>
        
        
    )
  }
}

export default SolicitudEstudiantil;
