import React, { useState } from 'react';
import {Button} from 'react-bootstrap'
import { Front } from 'react-bootstrap-icons';
import {Card, Container, Row, Col} from 'react-bootstrap';
import MyModal from '../MyModal/MYModal';

const Cart = ({cart}) => {

     return (
        <Container className="mt-5">
        <Row> 
            <Col md={12} className="d-flex  justify-content-between flex-wrap">
                {
                    cart.map(cart=> <MyModal cart={cart}/>)
                }             
            </Col>     
        </Row>
    </Container> 

    );
};

export default Cart;