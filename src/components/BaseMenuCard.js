import React from 'react';

export const BaseMenuCard = ({ title, children, bgColor = 'white' }) => {
  return (
    <div
      className='card-content'
      style={{ backgroundColor: bgColor, flex: '1', borderRadius: '0.25rem' }}
    >
      <p className='has-text-weight-bold is-size-5'>{title}</p>
      {children}
    </div>
  );
};
