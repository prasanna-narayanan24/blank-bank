import React from 'react';
import PropTypes from 'prop-types';

const Toast = props => {
    const getHeaderClassName = type => {
        if (type) {
            if (type === Toast.ToastTypes.error) {
                return "bg-danger";
            } else if (type === Toast.ToastTypes.info) {
                return "bg-info";
            }
        }

        return "bg-info"
    }

    let timeout = null;

    if (props.show) {
        timeout = setTimeout(() => {
            props.onClose();
        }, props.duration);
    }

    const onClose = () => {
        if (timeout) {
            clearTimeout(timeout);
        }

        props.onClose();
    }


    const headerClassName = getHeaderClassName(props.type);

    return <React.Fragment>
        <div className={`toast ${props.show ? 'show' : ''}`} style={{ position: "absolute", top: 10, right: 10, width: '18%' }}>
            <div className={`toast-header text-white ${headerClassName}`}>
                <span className="toast-icon rounded bg-white mr-2"></span>
                <strong className="mr-auto">{props.title}</strong>
                <button onClick={(e) => onClose()} type="button" className="ml-2 text-white close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="toast-body">{props.content}</div>
        </div>
    </React.Fragment>
}

Toast.propTypes = {
    show: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired
}

Toast.ToastTypes = {
    info: "INFO",
    error: "ERROR",
};

Toast.defaultProps = {
    show: true,
    title: "Toast header",
    content: "Toast body",
    type: Toast.ToastTypes.error,
    duration: 4000
}

export default Toast;