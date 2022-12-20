import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userList = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    findAll(state, action) {
      return action.payload;
    },
    deleteSelected(state, action) {
      return state.filter((el) => !action.payload.includes(el.id));
    },
  },
});
export const { findAll, deleteSelected } = userList.actions;
export default userList.reducer;

export const showUsers = () => (dispatch) => {
  axios('/user/all')
    .then((res) => dispatch(findAll(res.data)))
    .catch(console.log);
};

export const deleteUsers = (id) => (dispatch) => {
  axios.post('/user/delete', id)
    .then(() => dispatch(deleteSelected(id)))
    .catch(console.log);
};
