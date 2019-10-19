import React from 'react';

const BlankComponent = props => {
    return <React.Fragment>
        <div className="container p-5 text-center">
            <div className="d-block">
                <i className="fa fa-paper-plane fa-5x"></i>
            </div>
            <h5 className="mt-4">Nothing to display</h5>
        </div>
    </React.Fragment>
}

export default BlankComponent;