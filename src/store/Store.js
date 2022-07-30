import { configureStore } from "@reduxjs/toolkit";
import productItems from './CartSlice';   
import cartItems from './CartSlice';
import cartTotalAmount from './CartSlice';
import cartTotalQuantity from './CartSlice';
const store = configureStore({
    reducer: {cartItems , cartTotalAmount , cartTotalQuantity , productItems}
});

export default store;