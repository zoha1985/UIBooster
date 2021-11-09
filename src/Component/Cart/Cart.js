import React, { useState } from 'react';
import {Button} from 'react-bootstrap'
import { Front } from 'react-bootstrap-icons';
import {Card, Container, Row, Col} from 'react-bootstrap';
import MyModal from '../MyModal/MYModal';

const Cart = ({cart}) => {
    // const Cart = ({cart, _isopen ,_modelClose}) => {
   
    // console.log('something cart', cart)

    // const cart = props.cart;
    // console.log('inside cart details', cart, _isopen, _modelClose)

     return (
        <Container className="mt-5">
        <Row> 
            <h2>show cart</h2>
            <Col md={12} className="d-flex  justify-content-between flex-wrap">
                {/* {cart.length}
                {/* {console.log('cart for this',cart)} */}
           {
               cart.map(cart=> <MyModal cart={cart}/>)
            //    cart.map(cart=> <MyModal _isopen={_isopen} _modelClose={_modelClose}  cart={cart}/>)
               
           } 
          
        </Col>     
        </Row>
    </Container> 




    
    );
};

export default Cart;