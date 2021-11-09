import React, { useEffect, useState } from 'react';
import {Card } from 'react-bootstrap';
const Photo = (props) => {


    // console.log('value of props', props.country)
    // console.log('value of props', props.cart[0])
    // console.log('value of props', props.show)


    const {capital, flags, name} = props.country;

// let show  = props.show;
let cart = props.cart;
// console.log('what about cart',cart)
// let show , setModalIsOpen = props.show;

// console.log('inside photo', setModalIsOpen)


// function _getdata (_name) 
// {
//     fetch(`https://restcountries.com/v3.1/name/${_name}`)
//         .then(res => res.json())
//         .then (data => {
//             let _obj = {
//                 _isopen: true,
//                 cart : {
//                     name: data[0].name.official
//                 }
//             };
//             //setName(data);
//             //console.log('single data name', _obj);
//             props.setModelData(_obj);
//         })
        
// }


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

                        <button onClick={()=>props.show(props.country)} > Click me</button>
     
                        {/* <button onClick={()=>show(props._modelClose(true))} > Click me</button>
                        <button onClick={()=>show(props.country)} > Click me</button> */}
                        {/* <button onClick={()=>show(props.country),  setModalIsOpen(false)} > Click me</button> */}
                        </Card>
                        
        </div>
    );
};

export default Photo;