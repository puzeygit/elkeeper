import CloseIcon from '@mui/icons-material/Close';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import {
  Grid, IconButton, Typography,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addTableAsync, deleteTable, getTableList,
} from '../../redux/slices/tableSlice';
import ReserveButton from './ReserveButton';
import TableButton from './TableButton';

const Alert = React.forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

export default function TablesPage() {
  const user = useSelector((state) => state.user);
  const tables = useSelector((state) => state.table);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [showSnack, setShowSnack] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);

  useEffect(() => {
    dispatch(getTableList());
  }, []);

  const handleName = () => {
    const data = tables.length + 1;
    dispatch(addTableAsync(data));
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      { user?.role === 'admin' && (
        <IconButton
          sx={{
            fontSize: '17px', display: 'flex', justifyContent: 'center', color: 'white',
          }}
          onClick={() => handleName()}
        >
          <ControlPointIcon sx={{ mr: 1 }} />
          Поставить стол
        </IconButton>
      )}

      { user?.id && (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} rowSpacing={25} columnSpacing={5}>
          {tables?.map((table, index) => (
            <Grid
              item
              md={2}
              sx={{
                p: 2, height: 130, m: 5,
              }}
              key={index}
            >
              {table.status ? (
                <Link to={`/tables/${table.id}`} style={{ textDecoration: 'none' }}>
                  <TableButton table={table} disableBtn={disableBtn}>
                    <div>
                      <TableRestaurantIcon sx={{ color: 'black' }} fontSize="large" />
                      <Typography sx={{ color: 'black' }} component="h3" variant="body1">
                        {table.title}
                      </Typography>
                    </div>
                  </TableButton>
                </Link>
              ) : (
                <TableButton>
                  <div>
                    <TableRestaurantIcon sx={{ color: 'black' }} fontSize="large" />
                    <Typography sx={{ color: 'black' }} component="h3" variant="body1">
                      {table.title}
                    </Typography>
                  </div>
                </TableButton>
              )}

              <Stack spacing={2} sx={{ width: '100%' }}>
                <ReserveButton
                  table={table}
                  handleClick={handleClick}
                  setShowSnack={setShowSnack}
                  showSnack={showSnack}
                  setDisableBtn={setDisableBtn}
                  disableBtn={disableBtn}
                >
                  Резерв
                </ReserveButton>
                {showSnack
                  ? (
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Стол забронирован!
                      </Alert>
                    </Snackbar>
                  ) : null}
              </Stack>
              <IconButton sx={{ fontSize: '13px' }} onClick={() => dispatch(deleteTable(table.id))}><CloseIcon sx={{ color: 'white', mt: -7 }} /></IconButton>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
