import { createSlice, current } from '@reduxjs/toolkit';
import axios from 'axios';

const order = createSlice({
  name: 'order',
  initialState: [],
  reducers: {
    setOrder(state, action) {
      return action.payload;
    },
    deleteOrder(state, action) {
      const newState = current(state).filter((item) => item.id !== Number(action.payload));
      return newState;
    },
    clearOrder(state, action) {
      return [];
    },
  },
});
export const {
  setOrder, addOrderItem, deleteOrder, clearOrder,
} = order.actions;
export default order.reducer;

export const getOrderList = (receiptId) => (dispatch) => {
  axios.post('/order/orderlist', { receiptId })
    .then((res) => dispatch(setOrder(res.data)));
};

export const addOrderItemAsync = ({ position, receiptId }) => (dispatch) => {
  axios.post('/order/new', { position })
    .then(() => dispatch(getOrderList(receiptId)));
};

export const editOrderItemAsync = (id, itemInfo) => (dispatch) => {
  axios.post(`/order/${id}`, { itemInfo })
    .then((res) => dispatch(setOrder(res.data)));
};

export const deleteOrderItem = (id) => (dispatch) => {
  axios.delete(`/order/${id}`)
    .then((res) => dispatch(deleteOrder(res.data)));
};
