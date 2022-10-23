import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCartShow: false,
  notification: null,
};

const uiSlice = createSlice({
  name: 'uiSlice',
  initialState,
  reducers: {
    toggleCartShow(state) {
      state.isCartShow = !state.isCartShow;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
