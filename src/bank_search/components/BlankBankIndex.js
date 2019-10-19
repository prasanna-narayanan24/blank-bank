import React, { useState } from 'react';
import * as Action from "../constants/actions";
import { useBlankBankFetch } from '../hooks/useBlankBankFetch';
import BlankBankCityPicker from './BlankBankCityPicker';
import Loader from '../../common/components/loader';
import BlankBankList from './BlankBankList';
import { useBlankBankList } from '../hooks/useBlankBankList';
import Toast from '../../common/components/toast';

const BlankBankIndex = props => {
    console.log("Render: ", props);
    const { citiesList, selectedCity, isLoading, favouriteList, searchParam } = props.state;
    const { error } = props.state;
    const [page, setPage] = useState(1);

    useBlankBankFetch(selectedCity);

    const bankList = useBlankBankList();

    const onCitySelect = e => {
        e.preventDefault();
        props.dispatch({
            type: Action.SELECTED_CITY,
            value: e.target.value
        });
    }

    const onFavourite = ifsc => {
        props.dispatch({
            type: Action.TOGGLE_FAVOURITE,
            value: ifsc.toString()
        });
    }

    const onSearch = () => {
        props.dispatch({ type: Action.ON_SEARCH });
    }

    const handleSearch = e => {
        props.dispatch({
            type: Action.HANDLE_SEARCH_PARAM,
            value: e.target.value
        });
        setPage(1);
    }

    return (
        <div className="container p-5 border-left border-right">
            <Toast 
                show={error.present}
                title={error.info.title}
                type={Toast.ToastTypes.error}
                content={error.info.content}
                onClose={() => props.dispatch({type: Action.CLEAR_ERROR})}
            />
            <BlankBankCityPicker
                onCitySelect={onCitySelect}
                selectedCity={selectedCity}
                citiesList={citiesList}
                searchParams={searchParam}
                handleSearch={handleSearch}
                onSearch={onSearch}
            />
            <Loader isLoading={isLoading} />
            {
                !isLoading &&
                <BlankBankList
                    bankList={bankList}
                    page={page}
                    setPage={p => setPage(p)}
                    favouriteList={favouriteList}
                    onFavourite={onFavourite}
                />
            }
        </div>
    );
}

export default BlankBankIndex;