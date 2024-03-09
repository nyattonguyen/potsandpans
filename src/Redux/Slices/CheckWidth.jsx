import { createSlice } from "@reduxjs/toolkit";

const widthDeviceProductSlice = createSlice({
  name: "widthDevice",
  initialState: {
    isMobile: false,
    isTablet: false,
  },
  reducers: {
    updateWidthDevice(state, action) {
      state.isMobile = action.payload.isMobile;
      state.isTablet = action.payload.isTablet;
    },
  },
});
export const { updateWidthDevice } = widthDeviceProductSlice.actions;
export default widthDeviceProductSlice.reducer;
