import React from 'react';
import {CartState} from '../../Context/Context';
import Product from '../../Component/Product';
import Filters from '../../Component/Filters';
import './home.style.css';

const HomePageContainer = ()=>{
    const {
        state:{products},
        productState :{
            byStock,
            byFastDelivery,
            sort,
            byRating,
            searchQuery
        }} = CartState();

    //console.log('data', products);
    const filterProducts = ()=>{
        let sortedProducts = products;
        if(sort){
            sortedProducts = sortedProducts.sort((a,b)=> {
              return  sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
            })
        }
        if(!byStock){
            sortedProducts = sortedProducts.filter((prod)=>prod.inStock)
        }
        if(byFastDelivery){
            sortedProducts = sortedProducts.filter((prod)=>prod.fastDelivery)
        }
        if(byRating){
            sortedProducts = sortedProducts.filter((prod)=>{
               return prod.ratings >= byRating
            })
        }
        if(searchQuery){
            sortedProducts = sortedProducts.filter((prod)=>{
               return prod.name.toLowerCase().includes(searchQuery)
            })
        }

        return sortedProducts;
    }
    return ( 
        <>
            <h1 className="heading1">Context API with Reducer Shopping APP</h1>
            <div className="mainWraper">
                <Filters />
                <div className="productContainer">
                {filterProducts().map((product)=>{
                    return  <Product data={product} key={product.id}/>
                })}
                </div>
            </div>
        </>
    )
}

export default HomePageContainer;