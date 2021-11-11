import React, { useEffect, useState} from 'react';
import {Card, Button, Container, Row, Col} from 'react-bootstrap';
import Photo from '../Photo/Photo';
import Cart from '../Cart/Cart';
import MyModal from '../MyModal/MYModal';

const Body = () => {

const [country, setCountry] = useState([]);
const [modalIsOpen, setModalIsOpen] = useState(false);
const [cart, setCart] = useState([])
const [modelInfo, setModelInfo] = useState({})

// console.log(country)
    useEffect(() => {
        let url ='https://restcountries.com/v3.1/all'
        fetch(url)
          .then(results => results.json())
          .then(data => {
            setCountry(data);
            
          });
      }, []);



    return (
        <>
            <Container className="mt-5">
                <Row> 
                <Cart country={country} cart={cart}/>
                    <Col md={12} className="d-flex  justify-content-between flex-wrap">
                        {    
                            country.map(country=> <Photo setModalIsOpen={setModalIsOpen} setModelInfo={setModelInfo} country={country} key={country.cca2} />)
                        }
                    </Col> 
                    <MyModal setModalIsOpen={setModalIsOpen} _isopen={modalIsOpen}  modelInfo={modelInfo}/>
                </Row>
            </Container> 
            
        </>
    );
};

export default Body;