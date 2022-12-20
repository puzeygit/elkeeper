import SendIcon from '@mui/icons-material/Send';
import {
  Box, Button, FormControl, FormHelperText, MenuItem, Select, TextField, Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { gridClasses } from '@mui/system';
import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMenuItemAsync, getCategoriesList } from '../../redux/slices/menuSlice';

function MenuTable({
  rows, columns, rowId, setRowId,
}) {
  const [pageS, setPageSize] = useState(6);
  const categories = useSelector((state) => state.menu.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategoriesList());
    }
  }, []);
  const handleSubmit = (event, data) => {
    event.preventDefault();
    dispatch(addMenuItemAsync(data));
    event.target.reset();
  };

  const StyledButton = styled(Button)({
    marginLeft: 10,
    backgroundColor: '#64451C',
    marginTop: 7,
    '&:hover': {
      backgroundColor: '#997647',
    },
  });

  return (
    <Box sx={{ height: '480px', width: '100%', ml: -5 }}>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          textAlign: 'center', mb: 1, mr: 3, color: 'white', ml: 10,
        }}
      >
        Управление меню
      </Typography>
      <DataGrid
        columns={columns}
        rows={rows}
        pageSize={pageS}
        rowsPerPageOptions={[7]}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        sx={{
          [`& .${gridClasses.row}`]: {
            background: grey[200],
          },
          backgroundColor: 'white',
          ml: 10,
        }}
        onCellEditCommit={(params) => setRowId(params.id)}
        getRowId={(row) => row.id}
      />
      <Typography
        variant="h5"
        component="h5"
        sx={{
          textAlign: 'center', mt: 1, mb: 1, ml: -10, color: 'white', marginLeft: 10,
        }}
      >
        Добавить блюдо
      </Typography>

      <form onSubmit={(event) => handleSubmit(event, Object.fromEntries(new FormData(event.target)))} style={{ width: '100%', marginLeft: '80px' }}>
        <FormControl>
          <TextField variant="filled" label="наименование" name="title" sx={{ backgroundColor: 'white', color: 'black', width: '250px' }} />

        </FormControl>
        <FormControl>
          <TextField variant="filled" label="описание" name="description" sx={{ backgroundColor: 'white', color: 'black', width: '250px' }} />

        </FormControl>
        <FormControl>
          <TextField
            variant="filled"
            label="цена"
            name="price"
            sx={{
              backgroundColor: 'white', color: 'black', width: 150, mr: 4,
            }}
          />

        </FormControl>
        <FormControl variant="standard">
          <Select
            name="category"
            defaultValue="Горичие блюда"
            value={categories.title}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            sx={{
              width: 170, color: 'black', backgroundColor: 'white', height: 55, pl: 1,
            }}
          >
            {categories?.map((item) => (
              <MenuItem
                key={item.id}
                value={item.title}
                sx={{ color: 'black' }}
              >
                {item.title}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText sx={{ color: 'white' }}>Категория</FormHelperText>
        </FormControl>
        <StyledButton type="submit" variant="contained" endIcon={<SendIcon />} sx={{ ml: 5 }}>
          <Typography sx={{ mt: '4px', ml: '20px' }}>
            Добавить
          </Typography>
        </StyledButton>
      </form>
    </Box>
  );
}

export default MenuTable;
