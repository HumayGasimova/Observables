/**
 * Libraries
 */

import React, {
    Component
} from 'react';

/**
 * Components
 */

import Backdrop from '../Backdrop/backdrop';

/**
 * Styles
 */

import './modal.scss';

/**
 * Modal component definition and export
 */

class Modal extends Component {


    render () {
        return (
            <div>
                <Backdrop show={this.props.show} modalClosed={this.props.modalClosed} />
                <div
                    className="modal"
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Modal;

