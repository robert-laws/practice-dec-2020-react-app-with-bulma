import React from 'react';

export const SectionTitle = ({ id = '', children }) => {
  return (
    <h1
      id={id}
      className='subtitle is-size-5-desktop is-size-5-mobile mt-5 mb-1 ml-2'
    >
      {children}
    </h1>
  );
};
