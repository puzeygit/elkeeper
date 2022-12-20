import HttpsIcon from '@mui/icons-material/Https';
import {
  Avatar, Button, Grid, Paper, TextField, Typography,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { loginUser } from '../../redux/slices/userSlice';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const paperStyle = {
    padding: 20, height: 280, width: 350, margin: '20px auto',
  };

  const avatarStyle = {
    backgroundColor: '#64451C',
  };

  const buttonStyle = {
    marginTop: '20px',
    backgroundColor: '#64451C',
    fontSize: '17px',
  };

  return (
    <form onSubmit={(e) => { dispatch(loginUser(e, Object.fromEntries(new FormData(e.target)))); navigate('/'); }}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}><HttpsIcon /></Avatar>
            <Typography component="h4" variant="h4">Войти</Typography>
          </Grid>
          <TextField
            variant="standard"
            name="login"
            label="Логин"
            placeholder="Введите логин"
            fullWidth
            required
          />
          <TextField
            variant="standard"
            label="Пароль"
            name="password"
            placeholder="Введите пароль"
            type="password"
            fullWidth
            required
          />
          <Button style={buttonStyle} type="submit" variant="contained" fullWidth>
            <LockOpenIcon fontSize="small" sx={{ marginRight: 1, mb: '3px' }} />
            Войти в систему
          </Button>
        </Paper>
      </Grid>
    </form>
  );
}
