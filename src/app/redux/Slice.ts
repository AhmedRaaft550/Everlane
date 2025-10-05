import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ProductDetails } from "../types/app";

interface CartInitialState {
  cart: ProductDetails[];
}

const initialState: CartInitialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductDetails>) => {
      const existingItem = state.cart.find((p) => p.id === action.payload.id);
      if (!existingItem) {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((x) => x.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
