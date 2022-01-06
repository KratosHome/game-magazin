import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reduse";
import gameReducer from "./game/reduse";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    game: gameReducer,
  },
});
