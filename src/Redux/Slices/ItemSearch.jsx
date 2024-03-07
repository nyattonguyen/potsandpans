import { createSlice } from "@reduxjs/toolkit";

const itemSearchProductSlice = createSlice({
  name: "itemSearch",
  initialState: {
    text: "",
  },
  reducers: {
    updateItemSearch(state, action) {
      const { text } = action.payload;
      console.log("redux ne", text);
    },
  },
});
export const { updateItemSearch } = itemSearchProductSlice.actions;
export default itemSearchProductSlice.reducer;
