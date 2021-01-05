import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/data-viz-cafe-logo-02.svg';

export const Footer = () => {
  const history = useHistory();

  const returnHome = () => {
    history.push('/');
    window.scrollTo(0, 0);
  };

  return (
    <footer
      className='footer is-flex-grow-0 has-background-dark'
      style={{ maxHeight: '24rem' }}
    >
      <div className='columns has-text-white'>
        <div className='column is-4'></div>
        <div className='column is-2 mt-3'>
          <p
            style={{ color: 'white', cursor: 'pointer' }}
            className='has-text-weight-semibold'
            onClick={returnHome}
          >
            The Data Viz Cafe
          </p>

          <p>Course: Spring 2021</p>
          <p>Fictitious Coffee Company</p>
          <p>Based in Connecticut, USA</p>
          <p>Copyright 2021</p>
        </div>
        <div className='column is-2 has-text-centered'>
          <Logo
            alt='Data Viz Cafe'
            width='116'
            height='116'
            onClick={returnHome}
          />
        </div>
        <div className='column is-4'></div>
      </div>
    </footer>
  );
};
