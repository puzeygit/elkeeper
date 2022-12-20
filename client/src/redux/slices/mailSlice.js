import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    setData(state, action) {
      return [...state, ...action.payload];
    },
    clearData(state, action) {
      return initialState;
    },
  },
});

export const { setData, clearData } = mailSlice.actions;

export const sendMail = (data) => (dispatch) => {
  axios.post('/mail/sendreceipt', { data })
    .then((res) => setData(res.data));
};

export default mailSlice.reducer;
