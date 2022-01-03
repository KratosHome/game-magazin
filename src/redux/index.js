import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reduse";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
