import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer";

const store = configureStore({
  reducer: { cart: cartReducer }, // Use "cart" as the key
});

export default store;
