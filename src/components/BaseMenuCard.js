import React from 'react';

export const BaseMenuCard = ({
  title,
  category,
  price,
  seasonal,
  children,
}) => {
  return (
    <div className='card-content'>
      <p className='title'>{title}</p>
      <p className='subtitle'>Category: {category}</p>
      <hr />
      <p>Price: ${price}</p>
      {seasonal && <p>Available Seasonally</p>}
      {children}
    </div>
  );
};
