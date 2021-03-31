import React, { useContext } from "react";
import DataAreaContext from "../../utils/DataAreaContext";

function SearchBar(props) {
    return (
        <form className="search">

            <div className="input-group input-group-lg">
                <div className="input-group-text" id="inputGroup-sizing-lg">
                    Search
                </div>

                <input 
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="employee"
                    list="employees"                    
                    type="text" 
                    className="form-control" 
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                    placeholder="Type here to begin search"
                    id="employee"
                />

            </div>
        </form>
    )
}

export default SearchBar;