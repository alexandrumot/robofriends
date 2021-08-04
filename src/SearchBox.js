import React from 'react';
import "./SearchBox.css";

const SearchBox = ({ searchChange }) => {
    return (
        <div className="tc">
            <input 
            className="b--yellow-100 mb2 bg-transparent pa3 ba"
            type="search" 
            placeholder="Search for robots..." 
            onChange={searchChange}/>
        </div>
    )
}

export default SearchBox;