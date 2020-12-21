import React, { useState } from 'react';
import { ReactComponent as Logo } from '../images/data-viz-cafe-logo-02.svg';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showMobile = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header className='is-flex-grow-0'>
      <nav className='navbar is-transparent'>
        <div className='navbar-brand'>
          <NavLink className='navbar-item' to='/'>
            <Logo alt='Data Viz Cafe' width='75' height='75' />
          </NavLink>
          <div
            className={`${
              toggle ? 'navbar-burger is-active' : 'navbar-burger'
            }`}
            data-target='navbarExampleTransparentExample'
            onClick={showMobile}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div
          id='navbarExampleTransparentExample'
          className={`${toggle ? 'navbar-menu is-active' : 'navbar-menu'}`}
        >
          <div className='navbar-start'>
            <div className='navbar-item has-dropdown is-hoverable'>
              <NavLink className='navbar-link' to='/'>
                Go to the Data Viz Cafe
              </NavLink>
              <div className='navbar-dropdown is-boxed'>
                <NavLink
                  className='navbar-item'
                  to='/stores'
                  onClick={(event) => {
                    event.target.blur();
                  }}
                >
                  Stores
                </NavLink>
                <NavLink
                  className='navbar-item'
                  to='/menu'
                  onClick={(event) => {
                    event.target.blur();
                  }}
                >
                  Menu
                </NavLink>
                <NavLink
                  className='navbar-item'
                  to='/order'
                  onClick={(event) => {
                    event.target.blur();
                  }}
                >
                  Place an Order
                </NavLink>
                <NavLink
                  className='navbar-item'
                  to='/'
                  onClick={(event) => {
                    event.target.blur();
                  }}
                >
                  Data
                </NavLink>
              </div>
            </div>
            <NavLink className='navbar-item' to='/'>
              Data Visualization Concepts
            </NavLink>
            <div className='navbar-item has-dropdown is-hoverable'>
              <NavLink className='navbar-link' to='/'>
                Class Weeks
              </NavLink>
              <div className='navbar-dropdown is-boxed'>
                <NavLink
                  className='navbar-item'
                  to='/'
                  onClick={(event) => {
                    event.target.blur();
                  }}
                >
                  Week 1
                </NavLink>
                <NavLink
                  className='navbar-item'
                  to='/'
                  onClick={(event) => {
                    event.target.blur();
                  }}
                >
                  Week 2
                </NavLink>
                <NavLink
                  className='navbar-item'
                  to='/'
                  onClick={(event) => {
                    event.target.blur();
                  }}
                >
                  Week 3
                </NavLink>
                <NavLink
                  className='navbar-item'
                  to='/'
                  onClick={(event) => {
                    event.target.blur();
                  }}
                >
                  Week 4
                </NavLink>
                <NavLink
                  className='navbar-item'
                  to='/'
                  onClick={(event) => {
                    event.target.blur();
                  }}
                >
                  Week 5
                </NavLink>
              </div>
            </div>
            <NavLink className='navbar-item' to='/'>
              About
            </NavLink>
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <NavLink className='button is-info' to='/menu'>
                    <span className='icon'>
                      <i className='fas fa-shopping-cart'></i>
                    </span>
                    <span>Your Order</span>
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
