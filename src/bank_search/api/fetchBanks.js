import API from "../../utils/request_utils";

export const fetchBanks = (city, onSuccess, onFailure) => {
    const options = {
        query: {city}
    }
    if(city)
        API.call("/banks", options, onSuccess, onFailure);
}