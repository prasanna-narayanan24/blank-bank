import qs from "querystring";

class API {
    static methods = { "GET": "GET", "POST": "POST", "DELETE": "DELETE", "PUT": "PUT" };
    static _BASE_URL = "https://vast-shore-74260.herokuapp.com";
    static _method = "GET";

    static call = (url, options={}, onSuccess=null, onFailure=null) => {
        url = this.prepareURL(url, options);
        let method = options.method ? options.method : this._method;

        fetch(url, {method})
        .then(res => res.json())
        .then(res => {
            if(onSuccess) onSuccess(res)
        })
        .catch(err => {
            if(onFailure) onFailure(err);
        });
    }

    static prepareURL = (url, options) => {
        if(!url.startsWith("/"))
            url = `/${url}`;
        
        if(options.query) {
            url += `?${qs.stringify(options.query)}`;
        }

        return this._BASE_URL + url;
    }
}

export default API;