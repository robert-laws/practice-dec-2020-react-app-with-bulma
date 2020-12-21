import React, { useState, useEffect } from 'react';

export const Card = ({
  title,
  street,
  sendSelection,
  disableCard,
  cardSelected = false,
}) => {
  const [selected, setSelected] = useState(cardSelected);

  const handleClick = () => {
    setSelected((prev) => !prev);
  };

  useEffect(() => {
    sendSelection(title, selected);
  }, [sendSelection, title, selected]);

  return (
    <div
      className='card'
      style={{ backgroundColor: selected ? 'lightblue' : 'white' }}
    >
      <div className='card-content' style={{ minHeight: '10rem' }}>
        <p className='title'>{title}</p>
        <p className='subtitle'>{street}</p>
      </div>
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
