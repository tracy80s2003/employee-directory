import React, { useContext } from "react";
import DataAreaContext from "../../utils/DataAreaContext";

// function SearchBar(props) {
//     const context = useContext(DataAreaContext);

//     return (
//         <div className="searchbox">
//             <form className="form-inline">
//                 <input
//                     value={this.props.search}
//                     onChange={this.props.handleSearchOptions}
//                     className="form-control mr-sm-2"
//                     type="search"
//                     placeholder="Search"
//                     aria-label="Search"
//                 />
//             </form>
//         </div>
//     );
// }

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