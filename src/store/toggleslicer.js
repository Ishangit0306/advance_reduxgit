import {  createSlice } from "@reduxjs/toolkit";

const initialState={
    showCart:false
}

const cartToggleSlicer=createSlice({
    name:'toggle',
    initialState,
    reducers:{
        cartToggleHandler:(state)=>{
             state.showCart=!state.showCart
             }
    }

});


        
export const {cartToggleHandler}=cartToggleSlicer.actions;
export default cartToggleSlicer.reducer;