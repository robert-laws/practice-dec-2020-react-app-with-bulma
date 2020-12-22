import React, { useContext, useEffect } from 'react';
import LocationsContext from '../context/locations/locationsContext';
import { SubPage } from '../layout/SubPage';
import { Location } from '../components';

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
      <h1 className='title is-size-3-mobile is-size-2-desktop ml-2'>Stores</h1>
      <section className='is-flex is-flex-direction-row is-flex-wrap-wrap'>
        {locations !== null &&
          locations.map((location) => (
            <section
              key={location.id}
              className='section'
              style={{ minWidth: '25rem' }}
            >
              <Location {...location} />
            </section>
          ))}
      </section>
    </SubPage>
  );
};
