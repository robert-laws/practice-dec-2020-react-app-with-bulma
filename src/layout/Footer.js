import React from 'react';

export const Footer = () => {
  return (
    <footer
      className='footer is-flex-grow-0 has-background-dark'
      style={{ minHeight: '12rem' }}
    >
      <div className='columns has-text-white'>
        <div className='column'></div>
        <div className='column has-text-centered'>
          <p>Data Viz Cafe</p>
        </div>
        <div className='column has-text-centered'>
          <p>Copyright 2021</p>
        </div>
        <div className='column'></div>
      </div>
    </footer>
  );
};
