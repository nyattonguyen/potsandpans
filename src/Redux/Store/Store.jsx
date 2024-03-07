import { configureStore } from "@reduxjs/toolkit";
import cartItemProductSlice from "../Slices/CartItem";
import itemSearchProductSlice from "../Slices/ItemSearch";

const store = configureStore({
  reducer: {
    itemCart: cartItemProductSlice,
    itemSearch: itemSearchProductSlice,
  },
});

export default store;
