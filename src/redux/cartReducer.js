import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find(it => it.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({...action.payload, quantity: 1});
      }
    },
    removeFromCart: (state, action) => {
      const item = state.cart.filter(it => it.id !== action.payload.id);
      state.cart = item;
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find(it => it.id === action.payload.id);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find(it => it.id === action.payload.id);
      if (item.quantity === 1) {
        const item = state.cart.filter(it => it.id !== action.payload.id);
        state.cart = item;
      } else {
        item.quantity--;
      }
    },
    clearCart: state => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
