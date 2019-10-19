import React, { useReducer } from 'react';
import { BlankBankProvider } from '../providers/BlankBankProvider';
import BlankBankIndex from '../components/BlankBankIndex';
import { blankBankReducer } from '../reducers/blankBankReducer';
import initialState from '../reducers/initalState';

const BlankBankContainer = props => {
    const state = useReducer(blankBankReducer, initialState);
    return <BlankBankProvider value={state}>
        <BlankBankIndex state={state[0]} dispatch={state[1]}  />
    </BlankBankProvider>
}

export default BlankBankContainer;