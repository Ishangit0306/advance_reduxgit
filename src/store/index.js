import { configureStore, } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import cartToggleSlicer from './toggleslicer'

// const store=configureStore(
//     {
//           reducer:cartToggleSlicer.reducer}
//         );
        
const store=configureStore({
    reducer:{
        toggleCart:cartToggleSlicer,
        cart:cartSlice.reducer
    }
});


export default store;