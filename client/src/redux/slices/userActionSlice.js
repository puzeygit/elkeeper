import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const userActionSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    changeState(state, action) {
      return action.payload;
    },
  },
});

export const { changeState } = userActionSlice.actions;
export default userActionSlice.reducer;
