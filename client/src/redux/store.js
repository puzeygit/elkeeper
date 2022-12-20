import { configureStore } from '@reduxjs/toolkit';
import userListSlice from './slices/userListSlice';
import userSlice from './slices/userSlice';
import tableSlice from './slices/tableSlice';
import menuSlice from './slices/menuSlice';
import orderSlice from './slices/orderSlice';
import receiptSlice from './slices/receiptSlice';
import userActionSlice from './slices/userActionSlice';
import mailSlice from './slices/mailSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    table: tableSlice,
    userList: userListSlice,
    menu: menuSlice,
    order: orderSlice,
    receipt: receiptSlice,
    userAction: userActionSlice,
    mail: mailSlice,
  },
});

export default store;
