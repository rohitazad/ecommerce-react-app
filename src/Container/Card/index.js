import React, { useState, useEffect } from 'react';
import {CartState} from '../../Context/Context';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RatingComponent from '../../Component/Rating';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { AiFillDelete } from "react-icons/ai";
const CartPageContainer = ()=>{
    const [total, setTotal] =useState(0)
    const {
        state:{cart},
        dispatch
    } = CartState();
    useEffect(()=>{
        setTotal(cart.reduce((acc,curr) => acc + Number(curr.price) * curr.qty, 0));
    },[cart])
    return ( 
        <>
            <h1 className="heading1" style={{marginBottom:'20px'}}>Welcome to cart page</h1>
            <div className="mainWraper">
            
                <div className="productContainer">
               
                <ListGroup>
                    {
                      cart && cart.map((item)=>{
                          return (
                              <>
                                <ListGroup.Item key={item.id}>
                                    <Row key={`${item.id}row`}>
                                        <Col><Image src={item.image} alt={item.name} fluid rounded thumbnail /></Col>
                                        <Col>{item.name}</Col>
                                        <Col>{item.price}</Col>
                                        <Col>
                                            <RatingComponent rating={item.ratings} />
                                        </Col>
                                        <Col>
                                            <Form.Select aria-label="Default select example"
                                             value={cart.qty}
                                             onChange={(e)=>{
                                                 dispatch({
                                                     type:'CHANGE_CART_QTY',
                                                     payload:{
                                                         id:item.id,
                                                         qty:e.target.value
                                                     }
                                                 })
                                             }}
                                             >
                                                {[...Array(item.inStock).keys()].map((x)=>{
                                                    return (<option key={`${x+1}keyOption`} value={x+1}>{x+1}</option>)
                                                })}
                                            </Form.Select>  
                                        </Col>
                                        <Col>
                                            <AiFillDelete
                                                fontSize="20px"
                                                style={{ cursor: "pointer" }}
                                                onClick={() =>
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: item,
                                                })
                                                }
                                            />    
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                              </>
                            )
                      })  
                    }
                </ListGroup>
                </div>
                <div className="filters summary">
                    <span className="subTotal">Subtotal :- ({cart.length}) items</span>
                    <span className="subTotal">Total: ₹  <strong>{total}</strong></span>
                </div>
            </div>
        </>
    )
}

export default CartPageContainer;