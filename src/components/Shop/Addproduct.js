import { useRef } from 'react'
//import { useDispatch } from 'react-redux'
//import { cartActions } from '../../store/cart-slice'
import Card from '../UI/Card'
import classes from './Addproduct.module.css'

const AddProduct=(props)=>{
//const dispatch=useDispatch();


    const titleValue=useRef();
    const priceValue=useRef();
    const descriptionValue=useRef();
    const addUserHandler=(event)=>{
        event.preventDefault();
        props.onAddProduct(titleValue.current.value,priceValue.current.value,descriptionValue.current.value);
    }
    return(
<Card className={classes.input}>
<form onSubmit={addUserHandler}>
      <h2>  Add Product</h2> 
  <label htmlFor="title">Enter title</label>
  <input id='title' type='text ' ref={titleValue}></input>
  <label htmlFor='price'> Enter Price</label>
  <input id ='price'type='number' ref={priceValue}></input>
  <label htmlFor='description'>Enter Description</label>
  <input id='description' type='text' ref={descriptionValue}></input>
  <button type='submit'>Submit</button>
 
</form>
</Card>)
}
export default AddProduct
