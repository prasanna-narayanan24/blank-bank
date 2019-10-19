import * as Action from "../constants/actions";
import initialState from "./initalState";

const filterBanks = (state) => {
    const search = state.searchParam.toLowerCase();
    if(search.length <= 0) {
        return state.banks;
    }
    return state.banks.filter(b => 
        b.bank_name.toLowerCase().includes(search) ||
        b.ifsc.toLowerCase().includes(search) ||
        b.state.toLowerCase().includes(search) ||
        b.branch.toLowerCase().includes(search) ||
        b.address.toLowerCase().includes(search) ||
        b.city.toLowerCase().includes(search) || 
        b.district.toLowerCase().includes(search)
    );
}

export const blankBankReducer = (nextState, action) => {
    switch(action.type) {
        case Action.SELECTED_CITY:
            nextState.selectedCity = action.value;
            break;
        case Action.SUCCESSFUL_BANK_FETCH:
            nextState.banks = action.value;
            nextState.filteredBanks = filterBanks(nextState);
            nextState.cache[nextState.selectedCity] = action.value;
            break;
        case Action.FAILED_BANK_FETCH:
            let error = {...nextState.error};
            error.present = true;
            error.info = {
                title: 'Failed to fetch banks',
                content: action.value.toString(),
            }
            nextState = {...nextState, error};
            break;
        case Action.CLEAR_ERROR:
            nextState = {...nextState, error: initialState.error};
            break;
        case Action.IS_LOADING_TRUE:
            nextState.isLoading = true;
            break;
        case Action.IS_LOADING_FALSE:
            nextState.isLoading = false;
            break;
        case Action.HANDLE_SEARCH_PARAM:
            nextState.searchParam = action.value;
            nextState.filteredBanks = filterBanks(nextState);
            break;
        case Action.UPDATE_FAVOURITE_FROM_LOCAL:
            nextState.favouriteList = action.value;
            break;
        case Action.ON_SEARCH:
            break;
        case Action.TOGGLE_FAVOURITE:
            let ifscCode = action.value;
            if(!nextState.favouriteList[ifscCode]) {
                nextState.favouriteList[ifscCode] = true;
                window.localStorage.setItem('favourite-list', Object.keys(nextState.favouriteList))
            } else {
                nextState.favouriteList[ifscCode] = false;
                let _ = Object.keys(nextState.favouriteList);
                _ = _.filter(k => nextState.favouriteList[k]);
                window.localStorage.setItem('favourite-list', _);
            }
            break;
        default:
            return {...nextState};
    }
    return {...nextState};
}