import { createSlice } from "@reduxjs/toolkit";

const cartItemProductSlice = createSlice({
  name: "itemCart",
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
      console.log("redux", { action });
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItemFromCart: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload.id);
      return newState;
    },
    updateItemCart(state, action) {
      const { id, quantity } = action.payload;
      const itemIndex = state.findIndex((item) => item.id === id);

      if (itemIndex !== -1 && quantity > 0) {
        // Ensure valid quantity
        state[itemIndex].quantity = quantity;
      } else if (quantity === 0) {
        // Remove item if quantity reaches 0
        state.splice(itemIndex, 1);
      }
    },
  },
});
export const { updateItemCart, addItemToCart, removeItemFromCart } =
  cartItemProductSlice.actions;
export default cartItemProductSlice.reducer;
