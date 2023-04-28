import { configureStore, } from "@reduxjs/toolkit";
import cartToggleSlicer from './index'

// const store=configureStore(
//     {
//           reducer:cartToggleSlicer.reducer}
//         );
        
const store=configureStore({
    reducer:{
        toggleCart:cartToggleSlicer,
    }
});


export default store;