import { createSlice } from "@reduxjs/toolkit";
import CartItems from "../../CartItems";

const initialState = {
  cartItems: CartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const item_id = action.payload;
      console.log(action)
      state.cartItems = state.cartItems.filter(item => item.id !== item_id);
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(item => item.id === action.payload);
      cartItem.amount += 1;
    },
    decrease: (state, {payload}) => {
      const cartItem = state.cartItems.find(item => item.id === payload);
      cartItem.amount -= 1;
    }
  }
});
console.log(cartSlice.reducer);
export const {clearCart, removeItem, increase, decrease} = cartSlice.actions;
// console.log(cartSlice.actions.removeItem);
export default cartSlice.reducer;
