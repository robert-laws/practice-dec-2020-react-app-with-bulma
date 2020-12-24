import React from 'react';

export const BaseMenuCard = ({
  title,
  category,
  price,
  seasonal,
  children,
  bgColor = 'white',
}) => {
  return (
    <div className='card-content' style={{ backgroundColor: bgColor }}>
      <p className='title'>{title}</p>
      <p className='subtitle'>Category: {category}</p>
      <hr />
      <p>Price: ${price}</p>
      {seasonal && <p>Available Seasonally</p>}
      {children}
    </div>
  );
};
