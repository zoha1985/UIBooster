import React, { useEffect, useState } from 'react';
import {Card } from 'react-bootstrap';
const Photo = (props) => {
    //console.log('value of props', props)
    const {capital, flags} = props.country;

let show  = props.show;
let cart = props.cart;
console.log('what about cart',cart)
// let show , setModalIsOpen = props.show;

// console.log('inside photo', setModalIsOpen)
const [single, setSingle] = useState([])

    return (
        <div className="m-3 w-25" >
             <Card >    
                 {/* {single} */}
                        <Card.Img variant="top"  />
                            <h2> {capital} </h2>
                            <img src={flags.png}   /> 
                            {/* <h2> {capital} </h2>
                            <img src={png}   />  */}
     
                        <button onClick={()=>show(props._modelClose(true))} > Click me</button>
                        {/* <button onClick={()=>show(props.country),  setModalIsOpen(false)} > Click me</button> */}
                        </Card>
                        
        </div>
    );
};

export default Photo;