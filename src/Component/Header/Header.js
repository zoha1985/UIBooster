import React from 'react';
import {Navbar,Container,Nav,Row,Col, Button} from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './Header.css'

const Header = () => {
    
    return (
        <>
      <Container  className="mt-2" style={{borderBottom:"1px solid lightgray"}}>
          <Row>
              <Col md={8}>
              <Navbar   variant="light">
            <Container>
            <Navbar.Brand style={{color:"black", fontSize:"35px"}} href="#home">Home</Navbar.Brand>
            <Nav className="me-auto zoha">
                <Nav.Link href="#homeone">Figma ui/ux</Nav.Link>
                <Nav.Link href="#features">React Resources </Nav.Link>
                <Nav.Link href="#pricing"> Web Design</Nav.Link>
                <Nav.Link href="#bloge"> Blog</Nav.Link>
              
            </Nav>
            </Container>
            </Navbar>
              </Col>
            <Col md={4}>
                <Button variant="secondary" style={{marginRight:"5px", padding:"7px 20px"}}>Login</Button>
                <Button variant="primary" style={{ padding:"7px 20px"}}>Sign Up</Button>
            </Col>
          </Row>
      </Container>


        <Container fluid="md" className="mt-3">
            <Row style={{border: "1px solid lightgray", borderRadius:"25px", lineHeight:"20px"}}>
                <Col style={{borderRight:"2px solid gray"}} md={8}> <span style={{marginLeft:"-40px", marginTop:"60px"}}> < FaSearch /></span> <input style={{width:"90%", border:"none"}} type="text" /> <h3>Search your Products</h3></Col>
                <Col md={4}> 
                <Navbar   variant="light">
            <Container>
           
            <Nav className="me-auto searchright">
            <Navbar.Brand  className="searchright" href="#home">Home</Navbar.Brand>
                <Nav.Link href="#homeone">Figma </Nav.Link>
                <Nav.Link href="#features">React </Nav.Link>
                <Nav.Link href="#pricing"> Web Design</Nav.Link>
                <Nav.Link href="#bloge"> Blog</Nav.Link>
            </Nav>
            </Container>
            </Navbar>    
                </Col>
                
            </Row>
        </Container>
     
  </>
    );
};

export default Header;
