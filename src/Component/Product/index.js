import React from 'react';
import './product.style.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import RatingComponent from '../Rating';
import {CartState } from '../../Context/Context';

const Product = ({data})=>{
    const {
            state:{cart},
            dispatch,
        } = CartState();
    const cartAddRemove = (type)=>{
        console.log('cart', cart)
        if(type==='add'){
            return (
                dispatch({
                    type:"ADD_TO_CART",
                    payload:data,
                })
            )
        }else if(type ==='remove'){
            return (
                dispatch({
                    type:"REMOVE_FROM_CART",
                    payload:data
                })
            )
        }
    }
    const btnHtmlGenrate = ()=>{
        const checkIfProductAddToCard = cart.some((product)=>{return (product.id === data.id)})
     
        //console.log('cart', cart)
        const removeBtnHtml = <Button onClick={()=>{return cartAddRemove('remove')}} variant="danger">Remove to cart</Button> 
        const addBtnHtml = <Button variant="primary" onClick={()=>{return cartAddRemove('add')}} disabled=   {!data.inStock}>{!data.inStock ? 'Out of Stock' : 'Add to cart'}</Button>
        return (
                // cart.some((p)=>{
                //     console.log('p', p)
                //     return (p.id === data.id) ? (<Button onClick={()=>{return cartAddRemove('add', data)}} variant="danger">Remove to cart</Button>) : (<Button variant="primary" onClick={()=>{return cartAddRemove('remove', data)}} disabled={!data.inStock}>
                //     {!data.inStock ? 'Out of Stock' : 'Add to cart'}
                // </Button>)
                // })
                <>
                    {
                        checkIfProductAddToCard ? removeBtnHtml : addBtnHtml
                    }
                </>
                 
            )
    }
    return (
        <>
            <div className="products">
            <Card>
                <Card.Img variant="top" src={data.image}  alt={data.name} title={data.name}/>
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                        <span>₹ {data.price.split(".")[0]}</span>
                        <br />
                        {
                            data.fastDelivery ? (<span>Fast Delivery</span>) : (<span>5 Days Delivery</span>)
                        }
                        <br />
                        <RatingComponent onClick={()=>{}} rating={data.ratings} />
                    </Card.Text>
                    {btnHtmlGenrate()}
                </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Product;