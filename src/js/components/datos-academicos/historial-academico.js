import React from 'react';
import { Table, Container,  Col, Fade } from 'reactstrap';
import  './datos-academicos.css'
import axios from 'axios';
import {connect} from 'react-redux';
import {URL_HISTORICO} from "../../utilities/constants";

class Historial extends React.Component {

  state = {
    historico: []
  };

  async componentDidMount() {
    try {
      const response = await axios.get(URL_HISTORICO(this.props.usuario._id));
      if (response.data) {
        console.log(response.data)
        this.setState(() => ({
          historico: response.data
        }))
      }
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const style = {
      textAlign: 'center',
      backgroundColor: '#336699',
      color: 'white',

    };

    return (
      <Fade>
        <Container className="border ">
          <br />
          {
            !!this.state.historico.length && this.state.historico.map(historico => {
              const row = (<Container style={style}> <Col  md="12"> Periodo: {historico.periodo}</Col></Container>);

              const materias = historico.materias.map(materia => (
                <tr>
                  <th scope="row">{materia.nombre}</th>
                  <td>{materia.nota}</td>
                  <td>{materia.uc}</td>
                </tr>
              ));

              return (
                <div>
                  {row}
                  <Table size="sm">
                    <thead>
                    <tr>
                      <th>Asignatura</th>
                      <th>Nota</th>
                      <th>U.C.</th>
                    </tr>
                    </thead>
                    <tbody>
                    {materias}
                    <tr>
                      <th scope="row"></th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        U.C. Aprobadas: {historico.ucTotal}
                        <br/>
                        Indice Academico(IA):<span className={historico.promedio < 10 ? 'danger' : 'success'} >{historico.promedio}</span>
                      </td>

                    </tr>
                    </tbody>
                  </Table>
                </div>
              )

            })
          }

        </Container>
      </Fade>
    );
  }
}

const mapStateToProps = state => ({
  usuario: state.auth.usuario
});

export default connect(mapStateToProps)(Historial);
