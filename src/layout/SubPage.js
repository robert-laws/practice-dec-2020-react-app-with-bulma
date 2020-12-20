import React from 'react';

export const SubPage = ({ children }) => {
  return (
    <section className='section'>
      <div className='container'>{children}</div>
    </section>
  );
};
