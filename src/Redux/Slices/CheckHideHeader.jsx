import { createSlice } from "@reduxjs/toolkit";

const checkHideHeaderProductSlice = createSlice({
  name: "checkHideHeader",
  initialState: {
    isHideHeaderFooter: false,
  },
  reducers: {
    updateCheckHideHeader(state, action) {
      state.isHideHeaderFooter = action.payload.isMobile;
    },
  },
});
export const { updateCheckHideHeader } = checkHideHeaderProductSlice.actions;
export default checkHideHeaderProductSlice.reducer;
