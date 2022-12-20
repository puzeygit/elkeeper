import CoffeeIcon from '@mui/icons-material/Coffee';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import GrassIcon from '@mui/icons-material/Grass';
import IcecreamIcon from '@mui/icons-material/Icecream';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import TapasIcon from '@mui/icons-material/Tapas';
import {
  Button, Grid, styled, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoriesList, getMenuList,
} from '../../redux/slices/menuSlice';
import { addOrderItemAsync } from '../../redux/slices/orderSlice';
import BackButton from './BackButton';

export default function PurchaseGrid({
  clickHandler, flag, setFlag, category,
}) {
  const CategoryButton = styled(Button)({
    height: 120,
    width: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'wheat',
    marginTop: 20,
    marginLeft: 20,
    '&:hover': {
      backgroundColor: '#997647',
    },
  });
  const user = useSelector((state) => state.user);
  const receipt = useSelector((state) => state.receipt);
  const menu = useSelector((state) => state.menu);
  const [filteredMenu, setFilteredMenu] = useState([]);
  // console.log({ receipt });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenuList());
    if (flag === false) {
      setFilteredMenu(menu.menu.filter((item) => item.category === category));
    }
    if (flag === true) {
      dispatch(getCategoriesList());
    }
  }, [flag]);

  return (
    <>
      { user?.id && (
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} rowSpacing={1} columnSpacing={1} sx={{ mt: 7.5 }}>
          {(flag ? (menu.categories) : (filteredMenu))?.map((el) => (
            <CategoryButton
              el={el}
              key={el.id}
              onClick={() => {
                clickHandler(el);
                if (flag === false) {
                  dispatch(addOrderItemAsync({ position: el.id, receiptId: receipt.id }));
                }
              }}
              flag={flag}
            >
              <div style={{ color: 'black' }}>
                {el.title === 'Супы'
                  ? <SoupKitchenIcon />
                  : el.title === 'Горячие блюда'
                    ? <DinnerDiningIcon />
                    : el.title === 'Алкоголь'
                      ? <LocalBarIcon />
                      : el.title === 'Закуски'
                        ? <TapasIcon />
                        : el.title === 'Б/А напитки'
                          ? <CoffeeIcon />
                          : el.title === 'Десерты'
                            ? <IcecreamIcon />
                            : el.title === 'Бургеры'
                              ? <LunchDiningIcon />
                              : el.title === 'Пицца'
                                ? <LocalPizzaIcon />
                                : el.title === 'Салаты'
                                  ? <GrassIcon /> : null }
                <Typography sx={{ color: 'black' }} component="h3" variant="body1">
                  {el.title}
                </Typography>
              </div>
            </CategoryButton>
          ))}
          {flag ? null : (
            <BackButton flag={flag} setFlag={setFlag} />
          )}
      </Grid>
      )}
      {}
    </>
  );
}
