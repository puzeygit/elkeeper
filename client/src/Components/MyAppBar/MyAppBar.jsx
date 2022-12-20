import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import TableBarIcon from '@mui/icons-material/TableBar';
import {
  AppBar,
  Box, IconButton, Toolbar, Typography,
} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import React from 'react';
import GradingIcon from '@mui/icons-material/Grading';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { logoutUser } from '../../redux/slices/userSlice';

export default function MyAppBar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', mb: 15 }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#64451C' }}>
        <Toolbar>

          <Typography variant="h4" sx={{ flexGrow: 1 }} className="header">
            El-keeper
          </Typography>

          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1, display: 'flex', justifyContent: 'start',
            }}
          >
            {user?.name ? `Здравствуй, ${user?.name}` : 'Вы не авторизованы'}
          </Typography>
          {user?.role === 'admin' ? (
            <>
              <Tooltip title="Управление персоналом" TransitionComponent={Zoom}>
                <IconButton variant="text" color="inherit" onClick={(e) => { e.preventDefault(); navigate('/admin'); }}>
                  <SupervisorAccountIcon fontSize="large" sx={{ mr: 1 }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Управление залом" TransitionComponent={Zoom}>
                <IconButton variant="text" color="inherit" onClick={(e) => { e.preventDefault(); navigate('/tables'); }}>
                  <TableBarIcon fontSize="large" sx={{ mr: 1 }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Управление меню" TransitionComponent={Zoom}>
                <IconButton variant="text" color="inherit" onClick={(e) => { e.preventDefault(); navigate('/menu'); }}>
                  <MenuBookIcon fontSize="large" sx={{ mr: 1 }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="История заказов" TransitionComponent={Zoom}>
                <IconButton variant="text" color="inherit" onClick={(e) => { e.preventDefault(); navigate('/orderhistory'); }}>
                  <GradingIcon fontSize="large" sx={{ mr: 1 }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="?" TransitionComponent={Zoom}>
                <IconButton variant="text" color="inherit" onClick={(e) => { e.preventDefault(); navigate('/orders'); }}>
                  <QuestionMarkIcon fontSize="large" sx={{ mr: 1 }} />
                </IconButton>
              </Tooltip>
            </>
          )
            : user?.role === 'staff' ? (
              <>
                <Tooltip title="Управление залом" TransitionComponent={Zoom}>
                  <IconButton variant="text" color="inherit" onClick={(e) => { e.preventDefault(); navigate('/tables'); }}>
                    <TableBarIcon fontSize="large" sx={{ mr: 2 }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="?" TransitionComponent={Zoom}>
                  <IconButton variant="text" color="inherit" onClick={(e) => { e.preventDefault(); navigate('/order'); }}>
                    <QuestionMarkIcon fontSize="large" sx={{ mr: 1 }} />
                  </IconButton>
                </Tooltip>
              </>
            ) : (
              <>
                <Tooltip title="Войти в систему" TransitionComponent={Zoom}>
                  <IconButton variant="text" color="inherit" onClick={(e) => { e.preventDefault(); navigate('/login'); }}>
                    <LoginIcon fontSize="large" sx={{ mr: 2 }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Зарегистрироваться" TransitionComponent={Zoom}>
                  <IconButton variant="text" color="inherit" onClick={(e) => { e.preventDefault(); navigate('/signup'); }}>
                    <HowToRegIcon fontSize="large" sx={{ mr: 2 }} />
                  </IconButton>
                </Tooltip>
              </>
            )}

          {user?.id && (
            <Tooltip title="Выйти">
              <IconButton variant="text" color="inherit" onClick={() => { dispatch(logoutUser()); navigate('/'); }}>
                <ExitToAppIcon fontSize="large" sx={{ mr: 2 }} />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
