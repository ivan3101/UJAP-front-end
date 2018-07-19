import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {connect} from 'react-redux'
import {loginPersonal, loginProfesor, loginUser} from "../../actions/auth";
import {materiasLoad} from "../../actions/materias";

class Login extends Component {

  state = {
    username: '',
    password: '',
    error: false,
    errorMsg: ''
  };

  onLogin = () => {
    if (this.state.username.charAt(0).toLowerCase() === 'p') {
      if (this.state.username.toLowerCase() === 'pjpadron17' && this.state.password === '123456') {
        this.props.dispatch(loginProfesor());
        this.props.history.push('/');
      } else {
        this.setState(() => ({
          error: true,
          errorMsg: 'Nombre de usuario o contraseña incorrectos'
        }))
      }
    } else if (this.state.username.charAt(0).toLowerCase() === 'a') {
      if (this.state.username.toLowerCase() === 'aalirio18' && this.state.password === '123456') {
        this.props.dispatch(loginPersonal());
        this.props.history.push('/');

      } else {
        this.setState(() => ({
          error: true,
          errorMsg: 'Nombre de usuario o contraseña incorrectos'
        }))
      }
    } else {
      if (this.state.username.toLowerCase() === 'idemeneze14' && this.state.password === '123456') {
        this.props.dispatch(loginUser());
        this.props.dispatch(materiasLoad());
        this.props.history.push('/');

      } else {
        this.setState(() => ({
          error: true,
          errorMsg: 'Nombre de usuario o contraseña incorrectos'
        }))
      }
    }
  };

  onUpdateInput = (event) => {
    const input = event.target;
    this.setState(() => ({
      [input.name]: input.value
    }))
  };

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <h1>Login</h1>
                    <p className="text-muted">Ingresa a tu cuenta</p>
                    {this.state.error && (<div className="alert alert-danger" role="alert">
                      {this.state.errorMsg}
                    </div>)}
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Usuario" value={this.state.username} onChange={this.onUpdateInput} name={'username'}/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Contraseña" value={this.state.password} onChange={this.onUpdateInput} name={'password'}/>
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4" onClick={this.onLogin} id={'login'}>Ingresar</Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        {/*<Button color="link" className="px-0">¿Olvidaste tu contraseña?</Button>*/}
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect()(Login);
