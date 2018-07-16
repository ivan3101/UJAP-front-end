import React , {Component} from 'react';
import { Container, Row, Col, Button,Table,Fade } from 'reactstrap';
import {connect} from 'react-redux';
import MateriaRow from "./materia";
import uuid from 'uuid';

const marginButtons={
    margin:"5px",
};

const divColored={
    background:"#336699",
    width:"100%",
    height:"5px",
};

const tableStyle={
    marginTop:"10px"
};

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
                    </Col>
                </Row>
                <Row>
                    <Container fluid>
                        <div style={divColored}></div>
                            <Table striped bordered style={tableStyle}>
                            <thead>
                                <tr>
                                  <th>Nombre</th>
                                  <th>Apellido</th>
                                  <th>Cedula</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                   <td>{this.props.auth.nombre}</td>
                                   <td>{this.props.auth.apellido}</td>
                                   <td>V - {this.props.auth.cedula}</td>
                                </tr>

                            </tbody>
                            <thead>
                            <tr>
                              <th>Semestre</th>
                              <th>Promedio</th>
                              <th>UC obtenidas</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.props.auth.semestre}</td>
                                    <td>{this.props.auth.promedio} pts</td>
                                    <td>{this.props.auth.uc}</td>
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
                                   <tr>
                                     <th>Costo Semestre</th>
                                     <th>Seguro Universitario</th>
                                     <th>Inscripcion</th>
                                   </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> 9.999.999</td>
                                        <td> 9.999.999</td>
                                        <td> 9.999.999</td>
                                    </tr>

                                </tbody>
                                <thead>
                                <tr>
                                  <th>Semestre Extraordinario</th>
                                  <th>Unidad de Credito Adicional</th>
                                  <th></th>
                                </tr>
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
                                <tr>
                                  <th>Materia</th>
                                  <th>Profesor</th>
                                  <th>Correo</th>
                                  <th>Fecha Actualizacion</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.props.materias.map(materia => (
                                  <MateriaRow {...materia} key={uuid.v4()}/>
                                ))}
                                </tbody>
                            </Table>
                    </Container>
                </Row>
            </Container>
            </Fade>

        )
    }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    materias: state.materias
  }
}

export default connect(mapStateToProps)(Informacion);
