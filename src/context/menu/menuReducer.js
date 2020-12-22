import { GET_ALL_MENU_ITEMS } from '../types';

const menuReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_MENU_ITEMS:
      return {
        ...state,
        menu: action.payload,
      };

    default:
      return state;
  }
};

export default menuReducer;
