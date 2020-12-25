import React, { useState, useContext, useEffect } from 'react';
import LocationsContext from '../context/locations/locationsContext';
import ModalContext from '../context/modal/modalContext';
import { SubPage } from '../layout';
// import { Location } from '../components';
import { BaseLocationCard, PageTitle } from '../components';

export const Stores = () => {
  const [locationId, setLocationId] = useState(null);

  const locationsContext = useContext(LocationsContext);
  const { locations, getLocations } = locationsContext;

  const modalContext = useContext(ModalContext);
  const { updateModal } = modalContext;

  useEffect(() => {
    getLocations();
  }, [getLocations]);

  useEffect(() => {
    if (locationId) {
      updateModal({
        group: 'locations',
        obj: locations.find((location) => location.id === locationId),
      });
    }
  }, [locationId, locations, updateModal]);

  if (!locations) {
    return (
      <SubPage>
        <h4>No Stores Found</h4>
      </SubPage>
    );
  }

  return (
    <SubPage>
      <PageTitle>Stores</PageTitle>
      <section className='is-flex is-flex-direction-row is-flex-wrap-wrap'>
        {locations !== null &&
          locations.map((location) => (
            <section
              key={location.id}
              className='section'
              style={{ width: '16rem' }}
            >
              <div
                className='card p-2 is-flex is-flex-direction-column is-justify-content-space-between'
                style={{ minHeight: '12rem' }}
              >
                <BaseLocationCard {...location} />
                <button
                  className='button is-fullwidth'
                  onClick={() => setLocationId(location.id)}
                >
                  Learn More
                </button>
              </div>
            </section>
          ))}
      </section>
    </SubPage>
  );
};
