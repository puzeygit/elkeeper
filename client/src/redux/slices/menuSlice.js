import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const menu = createSlice({
  name: 'menu',
  initialState: {
    menu: [],
    categories: [],
  },
  reducers: {
    setMenu(state, action) {
      return { ...state, menu: action.payload };
    },
    addMenuItem(state, action) {
      return { ...state, menu: [...state.menu, action.payload] };
    },
    setMenuList(state, action) {
      return { ...state, categories: action.payload };
    },
  },
});
export const { setMenu, addMenuItem, setMenuList } = menu.actions;
export default menu.reducer;

export const getMenuList = () => (dispatch) => {
  axios('/menu/menulist')
    .then((res) => { dispatch(setMenu(res.data)); });
};

export const getCategoriesList = () => (dispatch) => {
  axios('/menu/categorieslist')
    .then((res) => dispatch(setMenuList(res.data)));
};

export const getFilteredMenuList = (category) => (dispatch) => {
  axios.post(`/menu/categorieslist/${category.title}`)
    .then((res) => dispatch(setMenu(res.data)));
};

export const addMenuItemAsync = (itemInfo) => (dispatch) => {
  axios.post('/menu/menuitem', itemInfo)
    .then((res) => dispatch(addMenuItem(res.data)));
};

export const editMenuItemAsync = (id, itemInfo) => (dispatch) => {
  axios.patch(`/menu/menuitem/${id}`, { itemInfo })
    .then((res) => { console.log(res.data); dispatch(setMenu(res.data)); });
};

export const deleteTable = (id) => (dispatch) => {
  axios.delete(`/menu/menuitem/${id}`)
    .then((res) => { dispatch(setMenu(res.data)); });
};
