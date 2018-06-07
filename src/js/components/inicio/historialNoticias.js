import React, {Component} from 'react';
import {Container, Table,NavLink } from 'reactstrap';

const title={
    display: 'inline-block',
    padding: '10px',
    margin: '0',
    color: 'black',
    fontSize: '1.5em',
    fontWeight:' 400',
    float: 'left',
    cursor: 'default',
    background: 'rgb(238,221,160)',
    borderRight: '5px solid #f93',
    borderLeft: '5px solid #f93',
    borderTop: '2px solid #f93',
    width: "100%",
    verticalAlign: "middle",
}

const box={
    borderLeft: '2px solid #f93',
    borderRight: '2px solid #f93',
    borderBottom: '2px solid #f93',
    padding: '0!important',
}
class HistorialNoticias extends Component{
    render() {
        return (
            <div>
                <Container fluid>
                    <h3 className="icon-folder-alt" style={title}><span>{' '}</span>Historial de Noticias</h3>
                        <div>
                            <Table striped border style={box}>
                                <tbody>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>
                                        <NavLink href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</NavLink>
                                            <span className="text-muted">06/07/2018{' '}</span>
                                        <small><i className="icon-eye">{' '}500</i>{' '}<i className="icon-bubble">{' '}0</i></small>
                                        </td>

                                    </tr>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>
                                        <NavLink href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</NavLink>
                                            <span className="text-muted">06/07/2018{' '}</span>
                                        <small><i className="icon-eye">{' '}500</i>{' '}<i className="icon-bubble">{' '}0</i></small>
                                        </td>

                                    </tr>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>
                                        <NavLink href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</NavLink>
                                            <span className="text-muted">06/07/2018{' '}</span>
                                        <small><i className="icon-eye">{' '}500</i>{' '}<i className="icon-bubble">{' '}0</i></small>
                                        </td>

                                    </tr>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>
                                        <NavLink href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</NavLink>
                                            <span className="text-muted">06/07/2018{' '}</span>
                                        <small><i className="icon-eye">{' '}500</i>{' '}<i className="icon-bubble">{' '}0</i></small>
                                        </td>

                                    </tr>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>
                                        <NavLink href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</NavLink>
                                            <span className="text-muted">06/07/2018{' '}</span>
                                        <small><i className="icon-eye">{' '}500</i>{' '}<i className="icon-bubble">{' '}0</i></small>
                                        </td>

                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                </Container>
            </div>
        );
    }
}

export default HistorialNoticias;