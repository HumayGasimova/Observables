/**
 * Libraries
 */

import React from 'react';

import PropTypes from 'prop-types';

/**
 * Styles
 */

import './backdrop.scss';

/**
 * Button component definition and export
 */

const Backdrop = (props) => (
    props.show ? <div className = "backdrop" onClick={props.modalClosed}/> : null
);

export default Backdrop;
