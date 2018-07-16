import React from 'react';
import { Table, Container, Row, Col, Button, InputGroup, Fade } from 'reactstrap';
import './datos-academicos.css';

class Horario extends React.Component {
    state={
        schedule:false,
        fadeIn: false,
    }

    toggleSchedule = () =>{
        const doesIt = this.state.schedule;
        this.setState({
             schedule: !doesIt,
             fadeIn: !this.state.fadeIn,
        });
     }

    render(){
        let horario = null;
        
        if(this.state.schedule){
            horario = (
                <Table bordered  >
                <thead>
                    <tr className="tableHorario">
                        <th className="prueba" >Sesion</th>
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
                        <th className="prueba" scope="row">de 03:15 pm
hasta 04:00 pm</th>
                        <td className="prueba">EL.III: COMPT EMERGE
ECT10303/310C1/4450</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th className="prueba" scope="row">de 05:40 pm
hasta 06:25 pm</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="prueba">CULTURA
CUT10202/310C1/4S03</td>
                    </tr>
                    <tr>
                        <th className="prueba" scope="row">de 06:30 pm
hasta 07:15 pm</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="prueba">CULTURA CUT10202/310C1/4S03</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
      </Table>   


            );
        }


        return(
            <Fade>
            <Container>
                <Row>
                    <Col md="2" className="horarioStyle" >
                        <p>Periodo:</p>
                        <select>
                            <option >310C1</option>


                        </select>
                        <hr/>
                        <p>Sección:</p>
                        <select>
                            <option >310C1</option>


                        </select>
                        
                        <InputGroup className="Button2">
                            <Button onClick={this.toggleSchedule} color="primary">Buscar</Button>
                        </InputGroup>

                    </Col>    
                    
                        <Col md="10" > 
                            <Fade in={this.state.fadeIn}>
                                {horario}
                            </Fade>  
                        </Col>    
                      
                </Row>

            </Container>  
            </Fade>  

        );
    }

}

export default Horario;