import React, { useState, useEffect } from 'react';
import { BaseLocationCard } from './BaseLocationCard';

export const LocationCard = ({
  id,
  location,
  sendSelection,
  disableCard = false,
}) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected((prev) => !prev);
  };

  useEffect(() => {
    sendSelection(id, selected);
  }, [sendSelection, id, selected]);

  return (
    <div
      className='card'
      style={{ backgroundColor: selected ? 'lightblue' : 'white' }}
    >
      <BaseLocationCard {...location} />
      <footer className='card-footer p-2'>
        <button
          disabled={disableCard && !selected}
          className='button is-medium is-fullwidth is-info'
          onClick={handleClick}
        >
          {selected ? 'Unselect' : 'Select'}
        </button>
      </footer>
    </div>
  );
};
