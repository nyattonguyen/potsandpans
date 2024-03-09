import { createSlice } from "@reduxjs/toolkit";

const titleLinkProductSlice = createSlice({
  name: "titleLinkHeader",
  initialState: {
    titleLinkCurrent: "",
  },
  reducers: {
    updateLinkCurrentHeader(state, action) {
      state.titleLinkCurrent = action.payload;
    },
  },
});
export const { updateLinkCurrentHeader } = titleLinkProductSlice.actions;
export default titleLinkProductSlice.reducer;
