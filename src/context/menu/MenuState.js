import React, { useReducer, useCallback } from 'react';
import MenuContext from './menuContext';
import menuReducer from './menuReducer';
import { GET_ALL_MENU_ITEMS } from '../types';
import { menu } from '../data/menuData';

const MenuState = ({ children }) => {
  const initialState = {
    menu: null,
  };

  const [state, dispatch] = useReducer(menuReducer, initialState);

  const getMenu = useCallback(() => {
    dispatch({ type: GET_ALL_MENU_ITEMS, payload: menu });
  }, [dispatch]);

  return (
    <MenuContext.Provider
      value={{
        menu: state.menu,
        getMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuState;
