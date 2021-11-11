import React, { useEffect, useState } from 'react';
import {Card} from 'react-bootstrap';

const Photo = (props) => {

    const {capital, flags, name, population} = props.country;
    function _callApi (_cname) {
        fetch(`https://restcountries.com/v3.1/name/${_cname}`)
        .then(res => res.json())
        .then(data => {
            props.setModelInfo(data[0]);
            props.setModalIsOpen(true);             
        })
    }


    return (
        <div className="m-3 w-25" >
            <Card className="shadow p-3 mb-5 border-0">    
                <Card.Img variant="top" className="d-flex " />
                    <h6> Country Name : <span style={{fontWeight:"300", fontSize:'15px'}}>{name.official}</span> </h6>
                    <h6> Name Capital :<span style={{fontWeight:"300", fontSize:'15px'}}>{capital}</span>  </h6>
                    <h6>Population : <span style={{fontWeight:"300", fontSize:'15px'}}>{population}</span></h6>
                    <img className="w-50 mb-5 m-auto pt-2" src={flags.png}   /> 
                <button className="w-50 btn-primary border-0  m-auto rounded-pill  mb-3" onClick={()=>_callApi(props.country.name.official)} > Show Me Details</button>
            </Card>
                        
        </div>
    );
};

export default Photo;