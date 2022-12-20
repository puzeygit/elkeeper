import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RowsForOrderList from './RowsForOrderList';
import ActionsForOrderList from './ActionsForOrderList';
import { deleteOrderItem, getOrderList } from '../../redux/slices/orderSlice';

function OrderList({ clickHandler }) {
  const [rowId, setRowId] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = async (params) => {
    setLoading(true);
    const { id, status } = params.row;
    dispatch(deleteOrderItem(id, status));
    setLoading(false);
  };
  const columns = useMemo(() => [
    {
      field: 'localIndex', headerName: '№', width: 40, filterable: false, editable: false,
    },
    {
      field: 'title', headerName: 'Наименование', width: 260, filterable: false, editable: false,
    },
    {
      field: 'quantity', headerName: 'кол-во', width: 70, filterable: false, editable: false,
    },
    {
      field: 'price', headerName: 'Цена', width: 80, filterable: false, editable: false,
    },
    {
      field: 'actions ',
      headerName: 'Удалить',
      type: 'actions',
      renderCell: (params) => (
        <ActionsForOrderList {...{
          params, rowId, setRowId, loading, handleSubmit,
        }}
        />
      ),
    },
  ], [rowId]);
  const order = useSelector((state) => state.order);
  const receipt = useSelector((state) => state.receipt);

  useEffect(() => {
    dispatch(getOrderList(receipt.id));
  }, [clickHandler]);

  return (
    <RowsForOrderList rows={order} columns={columns} rowId={rowId} setRowId={setRowId} />
  );
}

export default OrderList;
