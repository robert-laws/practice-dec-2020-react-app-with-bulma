import { GET_ALL_LOCATIONS } from '../types';

const locationsReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
      };

    default:
      return state;
  }
};

export default locationsReducer;
