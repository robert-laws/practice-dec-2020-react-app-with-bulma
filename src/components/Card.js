import React from 'react';

export const Card = () => {
  return (
    <div className='card'>
      <div className='card-content'>
        <p className='title'>
          “There are two hard things in computer science: cache invalidation,
          naming things, and off-by-one errors.”
        </p>
        <p className='subtitle'>Jeff Atwood</p>
      </div>
      <footer className='card-footer p-2'>
        <button className='button is-medium is-fullwidth is-info'>
          Select
        </button>
      </footer>
    </div>
  );
};
