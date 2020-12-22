import React, { useContext, useEffect } from 'react';
import LocationsContext from '../context/locations/locationsContext';
import { SubPage } from '../layout/SubPage';

export const Stores = () => {
  const locationsContext = useContext(LocationsContext);
  const { locations, getLocations } = locationsContext;

  useEffect(() => {
    getLocations();
  }, [getLocations]);

  if (!locations) {
    return (
      <SubPage>
        <h4>No Stores Found</h4>
      </SubPage>
    );
  }

  return (
    <SubPage>
      <h4>Stores</h4>
      {locations !== null &&
        locations.map((location) => <p key={location.id}>{location.title}</p>)}
    </SubPage>
  );
};
