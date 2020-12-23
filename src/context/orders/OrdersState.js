import React, { useReducer, useCallback } from 'react';
import OrdersContext from './ordersContext';
import ordersReducer from './ordersReducer';
import { GET_ALL_ORDERS } from '../types';

const OrdersState = ({ children }) => {
  const initialState = {
    orders: null,
  };

  const [state, dispatch] = useReducer(ordersReducer, initialState);

  const getOrders = useCallback(
    (orders) => {
      dispatch({ type: GET_ALL_ORDERS, payload: orders });
    },
    [dispatch]
  );

  return (
    <OrdersContext.Provider
      value={{
        orders: state.orders,
        getOrders,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

export default OrdersState;
