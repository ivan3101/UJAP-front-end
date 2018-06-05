import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node,
};

const defaultProps = {};

class Footer extends Component {
    render() {

        // eslint-disable-next-line
        const { children, ...attributes } = this.props;

        return (
            <React.Fragment>
                <span><a href="http://www.adm.ujap.edu.ve">Ujap En Linea</a> &copy; 2018 Ujap.</span>
                <span className="ml-auto">Tutor: Mariosca </span>
            </React.Fragment>
        );
    }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
