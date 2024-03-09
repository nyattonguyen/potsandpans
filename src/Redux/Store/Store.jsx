import { configureStore } from "@reduxjs/toolkit";
import cartItemProductSlice from "../Slices/CartItem";
import itemSearchProductSlice from "../Slices/ItemSearch";
import widthDeviceProductSlice from "../Slices/CheckWidth";
import titleLinkProductSlice from "../Slices/TitleLink";
const store = configureStore({
  reducer: {
    itemCart: cartItemProductSlice,
    itemSearch: itemSearchProductSlice,
    widthDevice: widthDeviceProductSlice,
    titleLinkHeader: titleLinkProductSlice,
  },
});

export default store;
