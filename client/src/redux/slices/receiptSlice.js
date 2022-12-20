import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const receipt = createSlice({
  name: 'receipt',
  initialState: [],
  reducers: {
    setReceipt(state, action) {
      return action.payload;
    },
    addReceiptItem(state, action) {
      return [...state, action.payload];
    },
  },
});
export const { setReceipt, addReceiptItem } = receipt.actions;
export default receipt.reducer;

export const getReceiptList = () => (dispatch) => {
  axios('/receipt/receiptlist')
    .then((res) => dispatch(setReceipt(res.data)));
};

export const addReceiptItemAsync = (itemInfo) => (dispatch) => {
  axios.post('/receipt/new', { itemInfo })
    .then((res) => dispatch(setReceipt(res.data)));
};

export const editReceiptItemAsync = (id, total) => (dispatch) => {
  axios.post(`/receipt/${id}`, { total })
    .then((res) => dispatch(setReceipt(res.data)));
};

export const deleteReceipt = (id) => (dispatch) => {
  axios.delete(`/receipt/${id}`)
    .then((res) => dispatch(setReceipt(res.data)));
};
