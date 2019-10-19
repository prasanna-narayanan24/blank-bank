import React from "react";

const BlankBankCityPicker = props => {
    const { citiesList, selectedCity, onCitySelect, searchParams } = props;

    const handleKeyPress = e => {
        if(e.key === 'Enter') {
            e.preventDefault();
            props.onSearch();
        }
    }
    
    return <form>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{selectedCity ? selectedCity : "Choose city"}</button>
                <div className="dropdown-menu">
                    {citiesList.map(c => <button key={c} value={c} onClick={onCitySelect} className="dropdown-item">{c}</button>)}
                </div>
            </div>
            <input type="text" value={searchParams} onChange={props.handleSearch} onKeyPress={handleKeyPress} className="form-control" placeholder="Search" />
        </div>
    </form>
}

export default BlankBankCityPicker;