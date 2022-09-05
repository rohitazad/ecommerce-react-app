
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import RatingComponent  from '../Rating';
import {CartState} from '../../Context/Context';

const Filters = ()=>{
    const {productState :{
        byStock,
        byFastDelivery,
        sort,
        byRating,
        searchQuery
    }, productDispatch} =CartState();
    console.log(byStock,
        byFastDelivery,
        sort,
        byRating,
        searchQuery)
    return (
        <>
         <div className="filters">
            <span className="title">Filter Products</span>
            <span>
                <Form.Check
                    inline
                    label="Assending"
                    name="group1"
                    type="radio"
                    id={`inline-radio`}
                    onChange={()=>{
                        productDispatch({
                            type:'SORT_BY_PRICE',
                            payload:'lowToHigh'
                        })
                    }}
                    checked={sort === 'lowToHigh' ? true :false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Descending"
                    name="group1"
                    type="radio"
                    id={`inline-radio2`}
                    onChange={()=>{
                        productDispatch({
                            type:'SORT_BY_PRICE',
                            payload:'highToLow'
                        })
                    }}
                    checked={sort === 'highToLow' ? true :false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Include Out of Stock"
                    name="group1"
                    type="checkbox"
                    id={`inline-checkbox1`}
                    onChange={()=>{
                        productDispatch({
                            type:'FILTER_BY_STOCK'
                        })
                    }}
                    checked={byStock}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Fast Delivery Only"
                    name="group1"
                    type="checkbox"
                    id={`inline-checkbox2`}
                    onChange={()=>{
                        productDispatch({
                            type:'FILTER_BY_DELIVERY'
                        })
                    }}
                    checked={byFastDelivery}
                />
            </span>
            <span>
                <label>Rating:-</label>
                <RatingComponent onClick={(i)=>{productDispatch({
                    type:'FILTER_BY_RATING',
                    payload: i +1
                })}} rating={byRating} style={{cursor:"pointer"}}/>
            </span>
            <Button onClick={()=>{
                productDispatch({
                    type:'CLEAR_FILTERS'
                })
            }} variant="primary">Clear Filters</Button>
         </div>
        </>
    )
}

export default Filters;