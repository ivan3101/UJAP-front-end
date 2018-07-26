import React, { Component } from 'react';
import {TabContent, TabPane} from 'reactstrap';
import PropTypes from 'prop-types';
import { AppSwitch } from '@coreui/react'
import {connect} from 'react-redux';
import {normalThemeAction, specialThemeAction} from "../../actions/theme";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultAside extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      discapacidad: false
    };
  }

  onDiscapacidad = () => {
    if (this.state.discapacidad) {
      this.props.dispatch(normalThemeAction());
    } else {
      this.props.dispatch(specialThemeAction());
    }
    this.setState(prevState => ({
      discapacidad: !prevState.discapacidad
    }))
  };

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1" className="p-1">

            <div className="aside-options">
              <div className="clearfix mt-4">
                <small><b>Modo de discapacidad visual</b></small>
                <AppSwitch className={'float-right'} variant={'pill'} label color={'primary'}  size={'sm'} onClick={this.onDiscapacidad}/>
              </div>
              <div>
                <small className="text-muted">
                  Al activar este modo, la interfaz pasa a utilizar escalas de grises en vez de los colores tradicionales. Esta paleta de escala de grises se usa con el fin de proporcionar una experiencia satisfactoria a los usuarios con cualquier variante de daltonismo.
                </small>
              </div>
            </div>

            {/*<div className="aside-options">*/}
              {/*<div className="clearfix mt-3">*/}
                {/*<small><b>Option 2</b></small>*/}
                {/*<AppSwitch className={'float-right'} variant={'pill'} label color={'primary'} size={'sm'}/>*/}
              {/*</div>*/}
              {/*<div>*/}
                {/*<small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod*/}
                  {/*tempor incididunt ut labore et dolore magna aliqua.*/}
                {/*</small>*/}
              {/*</div>*/}
            {/*</div>*/}

          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default connect()(DefaultAside);
