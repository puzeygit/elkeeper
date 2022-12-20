import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './Components/App';

axios.defaults.baseURL = process.env.REACT_APP_BASEURL;
axios.defaults.withCredentials = true;

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily:
        'Comfortaa',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>,
);
