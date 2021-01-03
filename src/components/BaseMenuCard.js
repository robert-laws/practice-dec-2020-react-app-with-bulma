import React from 'react';

export const BaseMenuCard = ({ title, price, children, bgColor = 'white' }) => {
  const imgUrl = `img/${title
    .replace(/\s+/g, '-')
    .toLowerCase()}-thumbnail.jpg`;

  return (
    <div
      className='card-content is-flex is-flex-direction-column is-flex-wrap-wrap'
      style={{ backgroundColor: bgColor, flex: '1', borderRadius: '0.25rem' }}
    >
      <div
        style={{ minHeight: '3.2rem' }}
        className='is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-wrap'
      >
        <p className='has-text-weight-bold title is-size-5'>{title}</p>
        {children}
      </div>
      <div>
        <p className='mb-4'>Price: ${price.toFixed(2)}</p>
      </div>
      <div>
        <img className='box' src={imgUrl} alt={title} />
      </div>
    </div>
  );
};
