import React, { useState } from 'react';
import  Modal  from 'react-modal';
import { Button } from 'react-bootstrap';

const MyModal = (props) => {



    return (
        <div style={{color:"#fff"}} className="light m-0">
            <Modal isOpen={props._isopen} ariaHideApp={false} className="w-75 m-auto bg-dark bg-opacity-50 mt-5 p-5 text-light  text-center rounded " >
                <h5> Capital : {props.modelInfo.capital}</h5>
                <h5> Area Name : {props.modelInfo.area}</h5>
                <h5> Capital :  {props.modelInfo.capital}</h5>
                <h5> Population : {props.modelInfo.population}</h5>
                <h5> Continents: {props.modelInfo.continents}</h5>
                <h5> Subregion :  {props.modelInfo.subregion}</h5>
                {/* <img className="w-50 shadow rounded-3 mb-3 mt-2" src={props.modelInfo.flags.png}   /> */}
                <br/>
                <button className="w-25 btn-primary border-0  m-auto rounded-pill p-3" onClick={()=>{props.setModalIsOpen(false)}}>Close</button>

            </Modal>
            
        </div>
    );
};

export default MyModal;