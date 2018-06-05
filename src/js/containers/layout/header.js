import React, { Component } from 'react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../../assets/img/brand/logo.png'
import sygnet from '../../../assets/img/brand/logo.png'

const propTypes = {
    children: PropTypes.node,
};

const defaultProps = {};

class Header extends Component {
    render() {

        // eslint-disable-next-line
        const { children, ...attributes } = this.props;

        return (
            <React.Fragment>
                <AppSidebarToggler className="d-lg-none" display="md" mobile />
                <AppNavbarBrand
                    full={{ src: logo, width: 40, height: 50, alt: 'Ujap Logo' }}
                    minimized={{ src: sygnet, width: 40, height: 50, alt: 'Ujap Logo' }}
                />
                <AppSidebarToggler className="d-md-down-none" display="lg" />

                <Nav className="ml-auto" navbar>
                     
                    <AppHeaderDropdown direction="down">
                        <DropdownToggle nav>
                            <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        </DropdownToggle>
                        <DropdownMenu right style={{ right: 'auto' }}>
                            <DropdownItem header tag="div" className="text-center"><strong>Mi Cuenta</strong></DropdownItem>
                            <DropdownItem><i className="fa fa-envelope-o"></i> Horario Personal<Badge color="primary">6</Badge></DropdownItem>
                            <DropdownItem><i className="fa fa-tasks"></i> Historial Acad.<Badge color="success">147</Badge></DropdownItem>
                            <DropdownItem><i className="fa fa-comments"></i> Notas Parciales<Badge color="danger">1</Badge></DropdownItem>
                            <DropdownItem header tag="div" className="text-center"><strong>Opciones</strong></DropdownItem>
                            <DropdownItem><i className="fa fa-user"></i> Inscripcion Academica</DropdownItem>
                            <DropdownItem><i className="fa fa-wrench"></i> Actualizar Datos</DropdownItem>
                            <DropdownItem><i className="fa fa-usd"></i> Procesar Pagos WEB</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem><i className="fa fa-lock"></i> Desconectar</DropdownItem>
                        </DropdownMenu>
                    </AppHeaderDropdown>
                </Nav>
                <AppAsideToggler className="d-md-down-none" />
                {/*<AppAsideToggler className="d-lg-none" mobile />*/}
            </React.Fragment>
        );
    }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
