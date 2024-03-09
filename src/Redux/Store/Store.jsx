import { configureStore } from "@reduxjs/toolkit";
import cartItemProductSlice from "../Slices/CartItem";
import itemSearchProductSlice from "../Slices/ItemSearch";
import widthDeviceProductSlice from "../Slices/CheckWidth";
import checkHideHeaderProductSlice from "../Slices/CheckHideHeader";
const store = configureStore({
  reducer: {
    itemCart: cartItemProductSlice,
    itemSearch: itemSearchProductSlice,
    widthDevice: widthDeviceProductSlice,
    checkHideHeader: checkHideHeaderProductSlice,
  },
});

export default store;
