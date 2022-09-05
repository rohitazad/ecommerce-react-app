import React  from "react";
import {Link} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';
import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import {CartState} from '../../Context/Context';
import { AiFillDelete } from "react-icons/ai";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function HeaderComponent(){
    const {state: 
        {cart},
        dispatch,
        productDispatch
    } = CartState();
    return(
        <>
        <Navbar  sticky="top" collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand>Context API App</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll"/>
                <Navbar.Collapse id="navbarScroll" >
                <Nav className="customeNavBar">

                    <NavLink  eventKey="1" as={Link} to="/">Home</NavLink>
                </Nav>
                  <Form style={{width:"50%"}} >
                    <Form.Control onChange={(e)=>{
                      productDispatch({
                        type:'FILTER_BY_SEARCH',
                        payload:e.target.value
                      })
                    }} type="text" className="mb-3" placeholder="Search" />
                  </Form>
                
                <DropdownButton drop="down" align="end" id="dropdown-basic-button" title={<><FaShoppingCart color="white" fontSize="25px" /><Badge bg="info">{cart.length}</Badge></>} >
                    
                    {cart.length >0 ? (
                            <>
                                {
                                    cart.map((prod) => (
                                        <span className="cartitem" key={prod.id}>
                                          <img
                                            src={prod.image}
                                            className="cartItemImg"
                                            alt={prod.name}
                                          />
                                          <div className="cartItemDetail">
                                            <span>{prod.name}</span>
                                            <span>₹ {prod.price.split(".")[0]}</span>
                                          </div>
                                          <AiFillDelete
                                            fontSize="20px"
                                            style={{ cursor: "pointer" }}
                                            onClick={() =>
                                              dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: prod,
                                              })
                                            }
                                          />
                                        </span>
                                      ))
                                }
                                <Link to="/cart">
                                    <Button variant="primary" style={{width:"90%", margin:"0 10px"}}>
                                        Go to Cart
                                    </Button>
                                </Link>
                            </>
                        ) : (<span>Card is empty</span>)}
                    
                </DropdownButton>
                   

                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}