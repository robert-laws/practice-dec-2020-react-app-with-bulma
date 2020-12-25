import React, { useState, useEffect } from 'react';
import { BaseMenuCard } from './BaseMenuCard';

export const MenuCard = ({ menu, sendSelection, bgColor, quantity = '1' }) => {
  const [selected, setSelected] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(quantity);

  const handleClick = () => {
    setSelected((prev) => !prev);
    setSelectedQuantity('1');
  };

  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  useEffect(() => {
    sendSelection(menu, selectedQuantity, selected);
  }, [sendSelection, menu, selectedQuantity, selected]);

  return (
    <div
      className='card p-2'
      style={{
        border: selected ? '1px solid red' : 'none',
      }}
    >
      <BaseMenuCard {...menu} bgColor={bgColor}>
        <div className='select'>
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
      </BaseMenuCard>
      <footer className='card-footer mt-2'>
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
