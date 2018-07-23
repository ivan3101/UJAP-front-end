import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {connect} from 'react-redux'
import {loginUser} from "../../actions/auth";
import {URL_LOGIN_ESTUDIANTE, URL_LOGIN_PROFESOR} from "../../utilities/constants";

class Login extends Component {

  state = {
    username: '',
    password: '',
    error: false,
    type: 'estudiante'
  };

  onLogin = () => {
    const {type} = this.state;
    if (!this.state.username || !this.state.password) {
      this.setState(() => ({
        error: true
      }));
    } else {
      this.setState(() => ({
        error: false
      }));
      if (type === 'profesor') {
        this.props.dispatch(loginUser(URL_LOGIN_PROFESOR, this.state));
      } else if (type === 'estudiante') {
        this.props.dispatch(loginUser(URL_LOGIN_ESTUDIANTE, this.state));
      }
    }
  };

  onUpdateInput = (event) => {
    const input = event.target;
    this.setState(() => ({
      [input.name]: input.value.trim()
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
                      Debe ingresar un nombre de usuario y contraseña
                    </div>)}
                    {this.props.error && (<div className="alert alert-danger" role="alert">
                      {this.props.errorMsg}
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
                    <InputGroup className={'mb-4'}>
                      <Input type={'select'} onChange={this.onUpdateInput} name={'type'}>
                        <option value="estudiante" defaultChecked={true}>Estudiante</option>
                        <option value="profesor">Profesor</option>
                      </Input>
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

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    errorMsg: state.auth.errorMsg
  }
};

export default connect(mapStateToProps)(Login);
