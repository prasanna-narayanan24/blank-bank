import React from 'react';

const Loader = props => {
    if (props.isLoading) {
        return <div className="container p-5 m-auto text-center">
            <div className="spinner-grow" style={{width: "3rem", height: "3rem"}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    } else {
        return <React.Fragment></React.Fragment>
    }
}

export default Loader;