import React from "react";

function SearchBar (props) {
    return (
        <div class="input-group input-group-lg">
            <span class="input-group-text" id="inputGroup-sizing-lg">Search</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
            placeholder="Start typing to search"
            onChange={props.searchFn}></input>
        </div>
    )
}

export default SearchBar