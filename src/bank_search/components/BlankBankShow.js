import React from 'react';

const BlankBankShow = props => {
    const { bank } = props;
    return <div className="d-flex flex-column">
        <h5>{bank.bank_name}</h5>
        <small>{bank.address}</small>
    </div>
}

export default BlankBankShow;