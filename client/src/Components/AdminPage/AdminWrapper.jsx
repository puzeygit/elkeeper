import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showUsers } from '../../redux/slices/userListSlice';
import AdminPageNew from './AdminPageNew';

export default function AdminWrapper() {
  const users = useSelector((state) => state.userList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showUsers());
  }, []);

  function createData(id, name, surname, login, role) {
    return {
      id,
      name,
      surname,
      login,
      role,
    };
  }
  const rows = users;

  return (
    <>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          textAlign: 'center', mb: 3, mr: 20, color: 'white',
        }}
      >
        Сотрудники
      </Typography>
      <AdminPageNew rows={rows} />
    </>
  );
}
