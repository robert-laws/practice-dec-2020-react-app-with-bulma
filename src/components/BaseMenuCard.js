import React from 'react';

export const BaseMenuCard = ({ title, children, bgColor = 'white' }) => {
  return (
    <div
      className='card-content is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-wrap'
      style={{ backgroundColor: bgColor, flex: '1', borderRadius: '0.25rem' }}
    >
      <p className='has-text-weight-bold title is-size-5'>{title}</p>
      {children}
    </div>
  );
};
