import {
  GET_ALL_LOCATIONS,
  GET_LOCATION_BY_ID,
  CLEAR_LOCATION,
} from '../types';

const locationsReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
      };

    case GET_LOCATION_BY_ID:
      return {
        ...state,
        location: state.locations.find(
          (location) => location.id === action.payload
        ),
      };

    case CLEAR_LOCATION:
      return {
        ...state,
        location: null,
      };

    default:
      return state;
  }
};

export default locationsReducer;
