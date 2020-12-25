import React from 'react';

export const BaseLocationCard = ({ title }) => {
  return (
    <div className='card-content'>
      <p className='has-text-weight-bold is-size-5'>{title}</p>
    </div>
  );
};
