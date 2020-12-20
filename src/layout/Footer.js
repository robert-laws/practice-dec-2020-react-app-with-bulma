import React from 'react';

export const Footer = () => {
  return (
    <footer
      className='footer is-flex-grow-0 has-background-dark'
      style={{ minHeight: '10rem' }}
    >
      <div className='columns has-text-white'>
        <div className='column'>First column</div>
        <div className='column'>Second column</div>
        <div className='column'>Third column</div>
        <div className='column'>Fourth column</div>
      </div>
    </footer>
  );
};
