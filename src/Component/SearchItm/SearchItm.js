import React from 'react';
import Dropdown from 'react-bootstrap/esm/Dropdown';

const SearchItm = () => {

    function _callApiOne (_region) {
        fetch(`https://restcountries.com/v3.1/region/${_region}`)
        .then(res => res.json())
        .then(data => {
            // props.setModelInfo(data[0]);
            console.log('what about region', data)             
        })
    }
    _callApiOne()
    


    return (

        <div>
            <h5>Search</h5>
            <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Asia</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Western Europe</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Central and Eastern Europe</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Africa</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Medilerranean & Middle East</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Americas</Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>
            
            
        </div>
    );
};

export default SearchItm;