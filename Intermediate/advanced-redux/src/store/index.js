import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';
import uiReducer from './ui-slice';

const store = configureStore({
  reducer: { cart: cartReducer, ui: uiReducer },
});

export default store;
