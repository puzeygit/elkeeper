import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const tableList = createSlice({
  name: 'table',
  initialState: [],
  reducers: {
    setTable(state, action) {
      return action.payload;
    },
    addTable(state, action) {
      const { length } = state;
      action.payload.title = `Стол ${length + 1}`;
      return [...state, action.payload];
    },
  },
});
export const { setTable, addTable } = tableList.actions;
export default tableList.reducer;

export const getTableList = () => (dispatch) => {
  axios('/table/tablelist')
    .then((res) => dispatch(setTable(res.data)));
};

export const addTableAsync = (data) => (dispatch) => {
  axios.post('/table', { data })
    .then((res) => {
      console.log('addTableAsync', res.data);
      dispatch(addTable(res.data));
    });
};

export const changeTableStatus = (id, status) => (dispatch) => {
  axios.post(`/table/${id}`, { status })
    .then((res) => dispatch(setTable(res.data)));
};

export const deleteTable = (id) => (dispatch) => {
  axios.delete(`/table/${id}`)
    .then((res) => dispatch(setTable(res.data)));
};
