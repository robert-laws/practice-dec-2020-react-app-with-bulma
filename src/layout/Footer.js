import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/data-viz-cafe-logo-02.svg';

export const Footer = () => {
  return (
    <footer
      className='footer is-flex-grow-0 has-background-dark'
      style={{ maxHeight: '24rem' }}
    >
      <div className='columns has-text-white'>
        <div className='column is-4'></div>
        <div className='column is-2 mt-3'>
          <NavLink to='/'>
            <p style={{ color: 'white' }} className='has-text-weight-semibold'>
              The Data Viz Cafe
            </p>
          </NavLink>
          <p>Course: Spring 2021</p>
          <p>Fictitious company from Connecticut</p>
          <p>Copyright 2021</p>
        </div>
        <div className='column is-2 has-text-centered'>
          <NavLink to='/'>
            <Logo alt='Data Viz Cafe' width='116' height='116' />
          </NavLink>
        </div>
        <div className='column is-4'></div>
      </div>
    </footer>
  );
};
