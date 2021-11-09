import React, { useEffect, useState} from 'react';
import {Card, Button, Container, Row, Col} from 'react-bootstrap';
import Photo from '../Photo/Photo';
import Cart from '../Cart/Cart';
import MyModal from '../MyModal/MYModal';

const Body = () => {

const [country, setCountry] = useState([]);
const [modalIsOpen, setModalIsOpen] = useState(false);
const [cart, setCart] = useState([])




// for modal data passing


// console.log('daffination name', name)

    useEffect(() => {
        let url ='https://restcountries.com/v3.1/all'
        fetch(url)
          .then(results => results.json())
          .then(data => {
            setCountry(data);
            
          });
      }, []);


    //   useEffect(()=>{
    //     fetch(`https://restcountries.com/v3.1/name/${name}`)
    //     .then(res => res.json())
    //     .then (data => {
    //         // let _obj = {
    //         //     _isopen: false,
    //         //     cart : {
    //         //         name: data[0].name.official
    //         //     }
    //         // };
    //         setName(data);
    //         console.log('single data name', data)
    //         // console.log('single data', data[0].name.official)
    //     })
    //   }, [])


function show (country){
    console.log('show', country)
    const newCart = [cart, country];
        setCart(newCart)
        // setModalIsOpen(_e);
       
}

// for modal data passsing function
// function passModal(country){
//     console.log('show country', country)
//     const newPassModal = [modalIsOpen, country];
//     setModalIsOpen(newPassModal)
// }
// function setModelData (_obj)
// {
//     setName(_obj);
//     console.log(_obj);
// }

// function _modelClose(_e){
//     setModalIsOpen(_e);
// }

    return (
        <>
            <Container className="mt-5">
                <Row> 
                <Cart country={country} cart={cart}/>
                {/* <Cart _isopen={modalIsOpen} _modelClose={_modelClose}  cart={cart}/> */}
                    <Col md={12} className="d-flex  justify-content-between flex-wrap">
                        {/* {cart.length} */}
                        {/* {console.log('value about passModal' , modalIsOpen)} */}
                        {/* {passModal,length} */}
                   {
                       country.map(country=> <Photo  country={country} key={country.cca2} cart={cart} show={show}/>)
                    //    country.map(country=> <Photo setModelData={setModelData} _modelClose={_modelClose} country={country} key={country.name} cart={cart} show={show}/>)
                   }
                  

                 
                </Col> 
                {/* <MyModal show={show} _isopen={modalIsOpen} _modelClose={_modelClose} />    */}
                </Row>
            </Container> 
            
            
        </>
    );
};

export default Body;