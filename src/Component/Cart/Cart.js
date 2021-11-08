import React, { useState } from 'react';
import {Button} from 'react-bootstrap'
import { Front } from 'react-bootstrap-icons';
import {Card, Container, Row, Col} from 'react-bootstrap';
import MyModal from '../MyModal/MYModal';

const Cart = ({cart}) => {
   
    console.log('something cart', cart)

    // const cart = props.cart;
    // console.log('inside cart details', cart)

     return (
        <Container className="mt-5">
        <Row> 
    
            <Col md={12} className="d-flex  justify-content-between flex-wrap">
                {cart.length}
                {/* {console.log('cart for this',cart)} */}
           {
               cart.map(cart=> <MyModal cart={cart}/>)
               
           }
          
        </Col>     
        </Row>
    </Container> 




    
    );
};

export default Cart;