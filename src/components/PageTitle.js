import React from 'react';

export const PageTitle = ({ children }) => {
  return (
    <h1 className='title is-size-3-mobile is-size-2-desktop ml-2'>
      {children}
    </h1>
  );
};
