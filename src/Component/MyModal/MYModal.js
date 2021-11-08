import React, { useState } from 'react';
import  Modal  from 'react-modal';
import { Button } from 'react-bootstrap';

// import Modal from 'react-bootstrap'
const MyModal = (props) => {

// const {name} = props.name
    // let {capital}  = props.cart
    // let modalIsOpen,passModal = props;
    console.log('mymodal details', props);

    return (
        <div style={{textAlign:'center'}}>
            <h2>This is a modal</h2>
            {/* <Modal > */}
            {/* {
                    name.map(name => <li>{name.title}</li>)
                } */}
            <Modal isOpen={props._isopen}>
                {/* <h1>modal title{props._isopen.cart.name}</h1> */}
                {/* <h2>detai</h2> */}
                {/* <h1>modal title{capital}</h1> */}
                {/* <p>modal paragrpph</p> */}
                {/* { passModal ? <Button onClick={()=> passModal(false)}>Close</Button> 
                : <Button onClick={()=> passModal(true)}>Close</Button> } */}

                
      
                { props.modalIsOpen &&  <Button onClick={()=>props.modalUpdate(true)}> Close </Button> ||
                <Button onClick={()=>props._modelClose(false)}> Close </Button> } 
            </Modal>
            
        </div>
    );
};

export default MyModal;