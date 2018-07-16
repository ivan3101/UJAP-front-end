import React, { Component } from 'react';
import { Table, Container, Row, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, InputGroup, Form, FormGroup, Label, Input, Fade} from 'reactstrap';
import './adicion.css';


class Adicion extends React.Component {

    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
    



render() {
     
        return(
            
    <div>
            
            <div>
            
            <h1>marico el que lo lea </h1>
                
            
            </div>
            
            
            
            
            
            <div>
                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>Materias</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Interfaces con el Usuario 308c1 | Lunes 07:00 - 08:30am/ Miercoles 07:00 - 08:30am</DropdownItem>
                            <DropdownItem>Electiva II Computacion Emergente 309c1 | Viernes 10:20 - 11:50am</DropdownItem>
                            <DropdownItem>Control de Proyecto 309c1 | Martes 08:40 - 10:10am</DropdownItem>
                            <DropdownItem>Sistemas de Informacion II 308c1 | Martes 10:20 - 11:50am</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                    
              
                </div>
            
            <Table bordered>
                <thead>
                    <tr className="tableHorario">
                        <th className="prueba">Sesión</th>
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
                        <th scope="row">de 07:00 hasta 07:45 am</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">de 07:45 hasta 08:30 am</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">de 08:40 hasta 09:25 am</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">de 09:25  hasta 10:10 am</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">de 10:20  hasta 11:05 am</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">de 11:05 hasta 11:50 am</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
      </Table> 
         
     
         
         
                
                    
            
                <div>
                    
                    <Button  color="primary">Agregar</Button>{' '}
                    <Button  color="primary">Retirar</Button>{' '}   
                    <Button  color="primary">Ratificar</Button>{' '}
            
                </div>       
            
                        
            </div>
     );
        
            
}
    
    
   
        
}



export default Adicion;