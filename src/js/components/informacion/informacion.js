import React , {Component} from 'react';
import { Container, Row, Col, Button,Table,Fade } from 'reactstrap';

const marginButtons={
    margin:"5px",
}
const divColored={
    background:"#336699",
    width:"100%",
    height:"5px",
}
const tableStyle={
    marginTop:"10px"
}
class Informacion extends Component {
    render = ()=>{
        return (
            <Fade>
            <Container fluid>
                <Row>
                    <Col md="2">
                        <h3>Estudiante</h3>
                    </Col>
                    <Col md="10">
                            <Button style={marginButtons} color="primary">Inscripcion</Button>

                            <Button style={marginButtons} color="primary">Adicion,Cambio o Retiro</Button>

                            <Button style={marginButtons} color="primary">Pago Web</Button>

                            <Button style={marginButtons} color="primary">Horario</Button>

                            <Button style={marginButtons} color="primary">Solicitudes</Button>

                            <Button style={marginButtons} color="primary">Opcion</Button>

                            <Button style={marginButtons} color="primary">Opcion</Button>

                            <Button style={marginButtons} color="primary">Opcion</Button>

                            <Button style={marginButtons} color="primary">Opcion</Button>

                            <Button style={marginButtons} color="primary">Opcion</Button>

                            <Button style={marginButtons} color="primary">Opcion</Button>

                            <Button style={marginButtons} color="primary">Opcion</Button>

                            <Button style={marginButtons} color="primary">Opcion</Button>

                            <Button style={marginButtons} color="primary">Opcion</Button>

                            <Button style={marginButtons} color="primary">Opcion</Button>

                            <Button style={marginButtons} color="primary">Opcion</Button>
                    </Col>
                </Row>
                <Row>
                    <Container fluid>
                        <div style={divColored}></div>
                            <Table striped bordered style={tableStyle}>
                            <thead>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Cedula</th>
                            </thead>
                            <tbody>
                                <tr>
                                   <td> Alirio Alejandro</td>
                                   <td> Angel Arenas</td>
                                   <td> V- 22.955.188</td>
                                </tr>

                            </tbody>
                            <thead>
                                <th>Semestre</th>
                                <th>Promedio</th>
                                <th>UC obtenidas</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> 10</td>
                                    <td> 14.75 pts</td>
                                    <td> 146</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Container>
                </Row>
                <Row>
                    <Container fluid>
                        <div style={divColored}></div>
                        <Row>
                            <Col md="2"><h3>Semestre</h3></Col>
                        </Row>
                            <Table striped bordered style={tableStyle}>
                                <thead>
                                    <th>Costo Semestre</th>
                                    <th>Seguro Universitario</th>
                                    <th>Inscripcion</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> 9.999.999</td>
                                        <td> 9.999.999</td>
                                        <td> 9.999.999</td>
                                    </tr>

                                </tbody>
                                <thead>
                                    <th>Semestre Extraordinario</th>
                                    <th>Unidad de Credito Adicional</th>
                                    <th></th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> 9.999.999</td>
                                        <td> 9.999.999</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>                        
                    </Container>
                </Row>
                <Row>
                    <Container fluid>
                        <div style={divColored}></div>
                        <Row>
                            <Col md="2"><h3>Materias</h3></Col>
                        </Row>
                            <Table striped bordered style={tableStyle}>
                                <thead>
                                    <th>Materia</th>
                                    <th>Profesor</th>
                                    <th>Correo</th>
                                    <th>Telefono</th>
                                    <th>Fecha Actualizacion</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> materia uno</td>
                                        <td> El Profe</td>
                                        <td> noemail@noemail.com</td>
                                        <td> 999.999.999</td>
                                        <td> Nunca</td>
                                    </tr>
                                    <tr>
                                        <td> materia 2</td>
                                        <td> El Profe</td>
                                        <td> noemail@noemail.com</td>
                                        <td> 999.999.999</td>
                                        <td> Nunca</td>
                                    </tr>
                                    <tr>
                                        <td> materia 3</td>
                                        <td> El Profe</td>
                                        <td> noemail@noemail.com</td>
                                        <td> 999.999.999</td>
                                        <td> Nunca</td>
                                    </tr>

                                </tbody>

                            </Table>                        
                    </Container>
                </Row>
            </Container>
            </Fade>

        )
    }
}

export default Informacion;