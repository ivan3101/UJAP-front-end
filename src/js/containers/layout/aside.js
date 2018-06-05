import React, { Component } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppSwitch } from '@coreui/react'

const propTypes = {
    children: PropTypes.node,
};

const defaultProps = {};

class Aside extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
        };
    }

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
                <Nav tabs>
                    <NavItem>
                        <NavLink className={classNames({ active: this.state.activeTab === '1' })}
                            onClick={() => {
                                this.toggle('1');
                            }}>
                            <i className="icon-list"></i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classNames({ active: this.state.activeTab === '2' })}
                            onClick={() => {
                                this.toggle('2');
                            }}>
                            <i className="icon-speech"></i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classNames({ active: this.state.activeTab === '3' })}
                            onClick={() => {
                                this.toggle('3');
                            }}>
                            <i className="icon-settings"></i>
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <ListGroup className="list-group-accent">
                            <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Hoy (profesor)</ListGroupItem>
                            <ListGroupItem action tag="a" href="#" className="list-group-item-accent-warning list-group-item-divider">
                                <div className="avatar float-right">
                                    <img className="img-avatar" src="assets/img/avatars/7.jpg" alt="admin@bootstrapmaster.com"></img>
                                </div>
                                <div>Reunion con <strong>Jesus</strong> </div>
                                <small className="text-muted mr-3">
                                    <i className="icon-calendar"></i>&nbsp; 1 - 3pm
                </small>
                                <small className="text-muted">
                                    <i className="icon-location-pin"></i> Aula 4350
                </small>
                            </ListGroupItem>
                            <ListGroupItem action tag="a" href="#" className="list-group-item-accent-info list-group-item-divider">
                                <div className="avatar float-right">
                                    <img className="img-avatar" src="assets/img/avatars/4.jpg" alt="admin@bootstrapmaster.com"></img>
                                </div>
                                <div>Skype con <strong> Alirio </strong></div>
                                <small className="text-muted mr-3">
                                    <i className="icon-calendar"></i>&nbsp; 4 - 5pm
                </small>
                                <small className="text-muted">
                                    <i className="icon-social-skype"></i> En-linea
                </small>
                            </ListGroupItem>
                            <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Mañana (Profesor)</ListGroupItem>
                            <ListGroupItem action tag="a" href="#" className="list-group-item-accent-danger list-group-item-divider">
                                <div>Nuevo Proyecto - <strong>Fecha tope</strong></div>
                                <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 10 - 11pm</small>
                                <small className="text-muted"><i className="icon-home"></i>&nbsp; UJAP</small>
                                <div className="avatars-stack mt-2">
                                    <div className="avatar avatar-xs">
                                        <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                    </div>
                                    <div className="avatar avatar-xs">
                                        <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                    </div>
                                    <div className="avatar avatar-xs">
                                        <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                    </div>
                                    <div className="avatar avatar-xs">
                                        <img src={'assets/img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                    </div>
                                    <div className="avatar avatar-xs">
                                        <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                    </div>
                                </div>
                            </ListGroupItem>
                            <ListGroupItem action tag="a" href="#" className="list-group-item-accent-success list-group-item-divider">
                                <div><strong>Proyecto en ejecucion</strong> Reunion</div>
                                <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 1 - 3pm</small>
                                <small className="text-muted"><i className="icon-location-pin"></i>&nbsp; Auditorio</small>
                            </ListGroupItem>
                            <ListGroupItem action tag="a" href="#" className="list-group-item-accent-primary list-group-item-divider">
                                <div><strong>Reunion de equipo</strong></div>
                                <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 4 - 6pm</small>
                                <small className="text-muted"><i className="icon-home"></i>&nbsp; UJAP</small>
                                <div className="avatars-stack mt-2">
                                    <div className="avatar avatar-xs">
                                        <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                    </div>
                                    <div className="avatar avatar-xs">
                                        <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                    </div>
                                    <div className="avatar avatar-xs">
                                        <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                    </div>
                                    <div className="avatar avatar-xs">
                                        <img src={'assets/img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                    </div>
                                    <div className="avatar avatar-xs">
                                        <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                    </div>
                                    <div className="avatar avatar-xs">
                                        <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                    </div>
                                    <div className="avatar avatar-xs">
                                        <img src={'assets/img/avatars/8.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                    </div>
                                </div>
                            </ListGroupItem>
                        </ListGroup>
                    </TabPane>
                    <TabPane tabId="2" className="p-3">
                        <div className="message">
                            <div className="py-3 pb-5 mr-3 float-left">
                                <div className="avatar">
                                    <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                    <span className="avatar-status badge-success"></span>
                                </div>
                            </div>
                            <div>
                                <small className="text-muted">Jesus</small>
                                <small className="text-muted float-right mt-1">1:52 PM</small>
                            </div>
                            <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
                            <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt...
              </small>
                        </div>
                        <hr />
                        <div className="message">
                            <div className="py-3 pb-5 mr-3 float-left">
                                <div className="avatar">
                                    <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                    <span className="avatar-status badge-success"></span>
                                </div>
                            </div>
                            <div>
                                <small className="text-muted">Jesus</small>
                                <small className="text-muted float-right mt-1">1:52 PM</small>
                            </div>
                            <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
                            <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt...
              </small>
                        </div>
                        <hr />
                        <div className="message">
                            <div className="py-3 pb-5 mr-3 float-left">
                                <div className="avatar">
                                    <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                    <span className="avatar-status badge-success"></span>
                                </div>
                            </div>
                            <div>
                                <small className="text-muted">Jesus</small>
                                <small className="text-muted float-right mt-1">1:52 PM</small>
                            </div>
                            <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
                            <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt...
              </small>
                        </div>
                        <hr />
                        <div className="message">
                            <div className="py-3 pb-5 mr-3 float-left">
                                <div className="avatar">
                                    <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                    <span className="avatar-status badge-success"></span>
                                </div>
                            </div>
                            <div>
                                <small className="text-muted">Jesus</small>
                                <small className="text-muted float-right mt-1">1:52 PM</small>
                            </div>
                            <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
                            <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt...
              </small>
                        </div>
                        <hr />
                        <div className="message">
                            <div className="py-3 pb-5 mr-3 float-left">
                                <div className="avatar">
                                    <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                    <span className="avatar-status badge-success"></span>
                                </div>
                            </div>
                            <div>
                                <small className="text-muted">Jesus</small>
                                <small className="text-muted float-right mt-1">1:52 PM</small>
                            </div>
                            <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
                            <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt...
              </small>
                        </div>
                    </TabPane>
                    <TabPane tabId="3" className="p-3">
                        <h6>Opciones</h6>

                        <div className="aside-options">
                            <div className="clearfix mt-4">
                                <small><b>Modo Daltonico</b></small>
                                <AppSwitch className={'float-right'} variant={'pill'} label color={'primary'} defaultChecked size={'sm'} />
                            </div>
                            <div>
                                <small className="text-muted">Hemos creado un modo especial para que los usuarios aquejados de deuteranopia (daltonismo  azul-rojo) puedan distinguir mejor las barras de las opciones como tambien las notificaciones.
                </small>
                            </div>
                        </div>

                        <div className="aside-options">
                            <div className="clearfix mt-3">
                                <small><b>Opcion 2</b></small>
                                <AppSwitch className={'float-right'} variant={'pill'} label color={'primary'} size={'sm'} />
                            </div>
                            <div>
                                <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </small>
                            </div>
                        </div>

                    
                        <hr />
                        
                    </TabPane>
                </TabContent>
            </React.Fragment>
        );
    }
}

Aside.propTypes = propTypes;
Aside.defaultProps = defaultProps;

export default Aside;