import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { getMenuList } from '../../redux/slices/menuSlice';
import MenuTable from './MenuTable';
import UsersActions from './UsersActions';
import DeleteAction from './DeleteAction';
import PresenceCheckbox from './PresenceCheckbox';

function Menu() {
  const [rowId, setRowId] = useState(null);
  const columns = useMemo(() => [
    {
      field: 'id', headerName: '№', width: 75, filterable: false,
    },
    { field: 'title', headerName: 'Наименование', width: 200 },
    {
      field: 'description', headerName: 'Описание', width: 260, filterable: false, sortable: false,
    },
    { field: 'price', headerName: 'Цена, руб.', width: 130 },
    { field: 'category', headerName: 'Категория', width: 160 },
    {
      field: 'status', headerName: 'Наличие', width: 130, type: 'actions', renderCell: (params) => <PresenceCheckbox params={params} />,
    },
    {
      field: 'delete', headerName: 'Удалить', width: 130, type: 'string', renderCell: (params) => <DeleteAction params={params} />,
    },
  ], [rowId]);
  const menu = useSelector((state) => state.menu.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    if (menu.length === 0) { dispatch(getMenuList()); }
  }, []);
  return (
    <MenuTable rows={menu} columns={columns} rowId={rowId} setRowId={setRowId} />
  );
}

export default Menu;
