import React, { useState } from 'react';
import { ReactComponent as Logo } from '../images/data-viz-cafe-logo-02.svg';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showMobile = () => {
    setToggle((prev) => !prev);
  };

  const closeMobileMenu = () => {
    if (toggle) {
      showMobile();
    }
  };

  return (
    <header className='is-flex-grow-0'>
      <nav className='navbar is-transparent'>
        <div className='navbar-brand'>
          <NavLink
            className='navbar-item'
            to='/'
            onClick={() => closeMobileMenu()}
          >
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
              <NavLink
                className='navbar-link'
                to='/cafe'
                onClick={() => closeMobileMenu()}
              >
                Visit the Data Viz Cafe
              </NavLink>
              <div className='navbar-dropdown is-boxed'>
                <NavLink
                  className='navbar-item'
                  to='/stores'
                  onClick={(event) => {
                    event.target.blur();
                    closeMobileMenu();
                  }}
                >
                  Stores
                </NavLink>
                <NavLink
                  className='navbar-item'
                  to='/menu'
                  onClick={(event) => {
                    event.target.blur();
                    closeMobileMenu();
                  }}
                >
                  Menu
                </NavLink>
                <NavLink
                  className='navbar-item'
                  to='/order'
                  onClick={(event) => {
                    event.target.blur();
                    closeMobileMenu();
                  }}
                >
                  Place an Order
                </NavLink>
                <NavLink
                  className='navbar-item'
                  to='/data'
                  onClick={(event) => {
                    event.target.blur();
                    closeMobileMenu();
                  }}
                >
                  Data
                </NavLink>
              </div>
            </div>
            <div className='navbar-item has-dropdown is-hoverable'>
              <NavLink
                className='navbar-link'
                to='/weeks'
                onClick={() => closeMobileMenu()}
              >
                Class Weeks
              </NavLink>
              <div className='navbar-dropdown is-boxed'>
                <NavLink
                  className='navbar-item'
                  to='/week1'
                  onClick={(event) => {
                    event.target.blur();
                    closeMobileMenu();
                  }}
                >
                  Week 1
                </NavLink>
                <NavLink
                  className='navbar-item'
                  to='/week2'
                  onClick={(event) => {
                    event.target.blur();
                    closeMobileMenu();
                  }}
                >
                  Week 2
                </NavLink>
                <NavLink
                  className='navbar-item'
                  to='/week3'
                  onClick={(event) => {
                    event.target.blur();
                    closeMobileMenu();
                  }}
                >
                  Week 3
                </NavLink>
                <NavLink
                  className='navbar-item'
                  to='/week4'
                  onClick={(event) => {
                    event.target.blur();
                    closeMobileMenu();
                  }}
                >
                  Week 4
                </NavLink>
                <NavLink
                  className='navbar-item'
                  to='/week5'
                  onClick={(event) => {
                    event.target.blur();
                    closeMobileMenu();
                  }}
                >
                  Week 5
                </NavLink>
              </div>
            </div>
            <NavLink
              className='navbar-item'
              to='/concepts'
              onClick={() => closeMobileMenu()}
            >
              Data Visualization Concepts
            </NavLink>
            <NavLink
              className='navbar-item'
              to='/resources'
              onClick={() => closeMobileMenu()}
            >
              Resources
            </NavLink>
            <NavLink
              className='navbar-item'
              to='/about'
              onClick={() => closeMobileMenu()}
            >
              About
            </NavLink>
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <NavLink
                    className='button is-info'
                    to='/order'
                    onClick={() => closeMobileMenu()}
                  >
                    <span className='icon'>
                      <i className='fas fa-shopping-cart'></i>
                    </span>
                    <span>Place an Order</span>
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
