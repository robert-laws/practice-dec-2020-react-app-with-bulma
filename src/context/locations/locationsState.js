import React, { useReducer, useCallback } from 'react';
import LocationsContext from './locationsContext';
import locationsReducer from './locationsReducer';
import {
  GET_ALL_LOCATIONS,
  GET_LOCATION_BY_ID,
  CLEAR_LOCATION,
} from '../types';
import { locations } from '../data/locationsData';

const LocationsState = ({ children }) => {
  const initialState = {
    locations: null,
    location: null,
  };

  const [state, dispatch] = useReducer(locationsReducer, initialState);

  const getLocations = useCallback(() => {
    dispatch({ type: GET_ALL_LOCATIONS, payload: locations });
  }, [dispatch]);

  const getLocationById = useCallback(
    (id) => {
      dispatch({ type: GET_LOCATION_BY_ID, payload: id });
    },
    [dispatch]
  );

  const clearLocation = useCallback(() => {
    dispatch({ type: CLEAR_LOCATION });
  }, [dispatch]);

  return (
    <LocationsContext.Provider
      value={{
        locations: state.locations,
        location: state.location,
        getLocations,
        getLocationById,
        clearLocation,
      }}
    >
      {children}
    </LocationsContext.Provider>
  );
};

export default LocationsState;
