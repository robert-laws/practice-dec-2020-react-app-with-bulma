import React, { useReducer, useCallback } from 'react';
import MenusContext from './menusContext';
import menusReducer from './menusReducer';
import { GET_ALL_MENUS } from '../types';
import { menus } from '../data/menusData';

const MenusState = ({ children }) => {
  const initialState = {
    menus: null,
  };

  const [state, dispatch] = useReducer(menusReducer, initialState);

  const getMenus = useCallback(() => {
    dispatch({ type: GET_ALL_MENUS, payload: menus });
  }, [dispatch]);

  return (
    <MenusContext.Provider
      value={{
        menus: state.menus,
        getMenus,
      }}
    >
      {children}
    </MenusContext.Provider>
  );
};

export default MenusState;
