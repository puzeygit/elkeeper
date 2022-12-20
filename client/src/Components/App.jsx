import { Container } from '@mui/material';
import React, {
  useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { checkUser } from '../redux/slices/userSlice';
import AdminPageNew from './AdminPage/AdminPageNew';
import LoginPage from './LoginPage/LoginPage';
import MainPage from './MainPage/MainPage';
import MyAppBar from './MyAppBar/MyAppBar';
import OneTable from './TablePages/OneTable';
import SignUpPage from './SignUpPage/SignUpPage';
import TablesPage from './TablePages/TableList';
import Notfound from './Notfound/Notfound';
import Menu from './MenuPages/Menu';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import OrderPage from './OrderPage/OrderPage';
import AdminWrapper from './AdminPage/AdminWrapper';
import ParticlesBg from './ParticlesBg/ParticlesBg';
import '../styles/style.css';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(checkUser());
  }, []);

  return (
    <>
      {!user?.id && <ParticlesBg />}
      <MyAppBar />
      <Container maxWidth="lg" className="overlay" sx={{ height: '100vh' }}>
        <Routes>
          <Route
            path="/admin"
            element={(
              <ProtectedRoute isAdmin={user?.role === 'admin'}>
                <AdminWrapper />
              </ProtectedRoute>
          )}
          />
          <Route path="/" element={<MainPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPageNew />} />
          <Route path="/tables" element={<TablesPage />} />
          <Route path="/tables/:id" element={<OneTable />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/orderhistory" element={<OrderPage />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
