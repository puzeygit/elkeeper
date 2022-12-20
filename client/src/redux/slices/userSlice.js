import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const user = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
    logOut() {
      return null;
    },
  },
});
export const { setUser, logOut } = user.actions;
export default user.reducer;

export const checkUser = () => (dispatch) => {
  axios.post('/user/check')
    .then((res) => dispatch(setUser(res.data)))
    .catch();
};

export const signupUser = (inputs, setError, navigate) => (dispatch) => {
  axios.post('/user/signup', inputs)
    .then((res) => { dispatch(setUser(res.data)); navigate('/'); })
    .catch((err) => setError('error', {
      type: 'custom',
      message: err.response.data.loginErr,
    }));
};

export const loginUser = (e, inputs) => (dispatch) => {
  e.preventDefault();
  axios.post('/user/login', inputs)
    .then((res) => dispatch(setUser(res.data)))
    .catch();
};

export const logoutUser = () => (dispatch) => {
  axios('/user/logout')
    .then(() => dispatch(logOut()))
    .catch();
};
