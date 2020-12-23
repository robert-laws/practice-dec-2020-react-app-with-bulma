import { GET_ALL_MENUS } from '../types';

const menusReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_MENUS:
      return {
        ...state,
        menus: action.payload,
      };

    default:
      return state;
  }
};

export default menusReducer;
