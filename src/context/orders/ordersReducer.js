import { GET_ALL_ORDERS } from '../types';

const ordersReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };

    default:
      return state;
  }
};

export default ordersReducer;
