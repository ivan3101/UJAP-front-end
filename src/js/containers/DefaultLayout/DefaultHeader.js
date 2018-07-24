import React, { Component } from 'react';
import { DropdownMenu, DropdownToggle, Nav } from 'reactstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../../assets/img/brand/logo.png'
import sygnet from '../../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <AppNavbarBrand
          full={{ src: logo, width: 35, height: 40, alt: 'Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'Logo' }}
        />

        <Nav className="ml-auto" navbar>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <h5>{this.props.name}</h5>
              {/*<img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />*/}
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              {/*<DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>*/}
              {/*<DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>*/}
              {/*<DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>*/}
              {/*<DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>*/}
              {/*<DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>*/}
              {/*<DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>*/}
              {/*<DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>*/}
              {/*<DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>*/}
              {/*<DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>*/}
              {/*<DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>*/}
              {/*<DropdownItem divider />*/}
              {/*<DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>*/}
              {/*<DropdownItem><i className="fa fa-lock"></i> Logout</DropdownItem>*/}
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

const mapStateToProps = state => ({
  name: `${state.auth.usuario.nombre} ${state.auth.usuario.apellido}`
});

export default connect(mapStateToProps)(DefaultHeader);
