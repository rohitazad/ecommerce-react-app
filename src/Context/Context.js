import React, { useReducer, useContext } from 'react';
import { faker } from '@faker-js/faker';
import {cartReducer, productReducer} from './Reducers';

const Cart = React.createContext();
const Context = ({children})=>{
    faker.seed(99);
    
    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        image: faker.image.image(),
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
      }));
      // reducer for product and cart 
      const [state, dispatch] = useReducer(cartReducer, {
        products:products,
        cart:[]
      });

      // create another Reducer for liter products.
      const [productState, productDispatch ] = useReducer(productReducer, {
          byStock:false,
          byFastDelivery: false,
          byRating:0,
          searchQuery:""
      })
    return (
        <>
            <Cart.Provider value={{state, dispatch, productState, productDispatch}}>{children}</Cart.Provider>
        </>
    )
}

export default Context;

export const CartState = ()=>{
    return useContext(Cart);
}