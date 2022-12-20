import React from 'react';
import { useSelector } from 'react-redux';
import AdminWrapper from '../AdminPage/AdminWrapper';
import TablesList from '../TablePages/TableList';

export default function MainPage() {
  const user = useSelector((state) => state.user);
  return (
    user?.role === 'admin'
      ? <AdminWrapper />
      : <TablesList />
  );
}
