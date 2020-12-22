import React, { useReducer, useCallback } from 'react';
import LocationsContext from './locationsContext';
import locationsReducer from './locationsReducer';
import { GET_ALL_LOCATIONS } from '../types';
import { locations } from '../data/locationsData';

const LocationsState = ({ children }) => {
  const initialState = {
    locations: null,
  };

  const [state, dispatch] = useReducer(locationsReducer, initialState);

  const getLocations = useCallback(() => {
    dispatch({ type: GET_ALL_LOCATIONS, payload: locations });
  }, [dispatch]);

  return (
    <LocationsContext.Provider
      value={{
        locations: state.locations,
        getLocations,
      }}
    >
      {children}
    </LocationsContext.Provider>
  );
};

export default LocationsState;
