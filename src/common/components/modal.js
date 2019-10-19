import React from 'react';
import PropTypes from 'prop-types';

const Modal = props => {
    const { visible, title, children } = props;
    if(!visible) {
        return <React.Fragment></React.Fragment>
    }
    return <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden={visible ? "false" : "true"} style={{ display: visible ? "block" : "none" }}>
        <div className="modal-dialog modal-dialog-centered" role="document" style={{ zIndex: 10000 }}>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-primary">{title}</h5>
                    <button type="button" onClick={props.onClose} className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
                {
                    props.footer &&
                        <div className="modal-footer">
                            {props.footer}
                        </div>
                }
            </div>
        </div>
        <div
            className="modal-backdrop fade show"
            role="presentation"
            onClick={props.onClose}
        />
    </div>
}

Modal.propTypes = {
    visible: PropTypes.bool.isRequired,
    title: PropTypes.string,
    children: PropTypes.element
}

Modal.defaultProps = {
    visible: true,
    title: "Modal title",
    children: <p>modal is great body</p>
}

export default Modal;