import React, { useState, useEffect } from 'react';

export const MenuCard = ({
  title,
  description,
  price,
  quantity = '1',
  sendSelection,
  cardSelected = false,
}) => {
  const [selected, setSelected] = useState(cardSelected);
  const [selectedQuantity, setSelectedQuantity] = useState(quantity);

  const handleClick = () => {
    setSelected((prev) => !prev);
    setSelectedQuantity('1');
  };

  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  useEffect(() => {
    sendSelection(title, selectedQuantity, selected);
  }, [sendSelection, title, selectedQuantity, selected]);

  return (
    <div
      className='card'
      style={{ backgroundColor: selected ? 'lightblue' : 'white' }}
    >
      <div className='card-content' style={{ minHeight: '10rem' }}>
        <p className='title'>{title}</p>
        <p className='subtitle'>{description}</p>
        <p>${price}</p>
        <div class='select'>
          <select
            disabled={!selected}
            value={selectedQuantity}
            onChange={handleQuantityChange}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
        </div>
      </div>
      <footer className='card-footer p-2'>
        <button
          className='button is-medium is-fullwidth is-info'
          onClick={handleClick}
        >
          {selected ? 'Remove from Order' : 'Add to Order'}
        </button>
      </footer>
    </div>
  );
};
