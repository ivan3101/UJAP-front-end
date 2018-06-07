import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Fade} from 'reactstrap';

class SolicitudEstudiantil extends Component {
    render = () => (
        <div>
          <div></div>
            <h1>Aqui es donde van los datos del estudiante por alguna razon</h1>
            <h3>con fotico y todo porque somos gays o no sé</h3>
            <h5>気持ちいい</h5>
            

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
          <Label check>
            <Input type="checkbox" />{' '} Checkbox piedrero para algo interesante en algun momento(?
          </Label>
        </FormGroup>
        <Button>Enviar</Button>
      </Form>
        </div>
        
    )
}

export default SolicitudEstudiantil;