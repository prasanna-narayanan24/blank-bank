import { useEffect } from "react";
import { useBlankBankIndexContext } from "./useBlankBankIndexContext";
import * as Action from "../constants/actions";
import { fetchBanks } from "../api/fetchBanks";

export const useBlankBankFetch = (dependency = []) => {
    const { state, dispatch } = useBlankBankIndexContext();

    useEffect(() => {
        if(!state.selectedCity) {
            dispatch({
                type: Action.SELECTED_CITY,
                value: window.localStorage.getItem('selected-city')
            });
        }

        if (state.selectedCity) {
            window.localStorage.setItem('selected-city', state.selectedCity.toString())
            dispatch({ type: Action.IS_LOADING_TRUE });
        }

        if (state.cache[state.selectedCity]) {
            dispatch({
                type: Action.SUCCESSFUL_BANK_FETCH,
                value: state.cache[state.selectedCity]
            });
            dispatch({ type: Action.IS_LOADING_FALSE });
        } else {
            fetchBanks(state.selectedCity, (res) => {
                dispatch({
                    type: Action.SUCCESSFUL_BANK_FETCH,
                    value: res
                });
                dispatch({ type: Action.IS_LOADING_FALSE });
            }, (err) => {
                dispatch({
                    type: Action.FAILED_BANK_FETCH,
                    value: err
                });
                dispatch({ type: Action.IS_LOADING_FALSE });
            });
        }

        let favouriteListFromLocal = window.localStorage.getItem('favourite-list')

        if(favouriteListFromLocal) {
            let favouriteListHash = {}
            for(let fav of favouriteListFromLocal.split(",")) {
                favouriteListHash[fav] = true;
            }

            dispatch({
                type: Action.UPDATE_FAVOURITE_FROM_LOCAL,
                value: favouriteListHash,
            });
        }
        
    }, [state.selectedCity, dispatch, state.cache]);
}