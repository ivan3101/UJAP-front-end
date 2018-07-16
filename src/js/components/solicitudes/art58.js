import React from 'react';
import { Table, Container, Button, Row, Col} from 'reactstrap';

const Articulo58 = () => (
    <div>
        <div>
            <h1>Liberación de Articulo 58</h1>
            <Table bordered responsive style={{backgroundColor: 'white'}}>
                <tbody>
                <tr>
                    <th>Estudiante</th>
                    <td>Jean Mobayed</td>
                    <th>Cedula</th>
                    <td>26.781.589</td>
                    <th>Carrera</th>
                    <td>Ingenieria de computación</td>

                </tr>
                <tr>
                    <th>Indice Academico Acumulado</th>
                    <td>15.67</td>
                    <th>Periodo</th>
                    <td>20181CR</td>
                    <th>Estatus academido</th>
                    <td>Alumno regular activo</td>
                </tr>
                <tr>
                    <th>Estatus Administrativo</th>
                    <td>Sin beca</td>
                    <th>Total de UC aprobadas</th>
                    <td>144</td>
                    <th>Cohorte</th>
                    <td>39</td>
                </tr>
                </tbody>
            </Table>
        </div>
        <div>
            <Row>
                <Col sm={{ size: 3, offset: 9 }}>
                    <Button color={'primary'} size={'lg'}>Solicitar liberación de articulo</Button>
                </Col>
            </Row>
            <Container style={{backgroundColor: 'white'}}>
                <Table borderless responsive striped >
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Materia</th>
                        <th>U.C.</th>
                        <th>Semestre</th>
                        <th>Estado</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Metodos cuantitativos</td>
                        <td>4</td>
                        <td>8</td>
                        <td>Aprobada</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Arquitectura del Computador</td>
                        <td>4</td>
                        <td>8</td>
                        <td>Aprobada</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Ingenieria del Software</td>
                        <td>3</td>
                        <td>9</td>
                        <td>Reprobada</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Organización del computador</td>
                        <td>3</td>
                        <td>5</td>
                        <td>En espera</td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    </div>
);

export default Articulo58