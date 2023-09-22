// ordersSlice.js

import { createSlice } from '@reduxjs/toolkit';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
      isFetchingOrders: false,
      filteringOption: "",
      orders: []
  },
  reducers: {
    fetchOrder: (state,action) => {
        state.isFetchingOrders = true
        state.filteringOption = action.payload
    },
    getOrder: (state, action) => {
      state = action.payload
    },
    
  },
});

export const { placeOrder, getOrderHistory } = ordersSlice.actions;
export default ordersSlice.reducer;
