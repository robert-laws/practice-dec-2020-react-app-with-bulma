import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showMobile = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header>
      <nav className='navbar is-transparent'>
        <div className='navbar-brand'>
          <NavLink className='navbar-item' to='/'>
            <img
              src='https://bulma.io/images/bulma-logo.png'
              alt='Bulma: a modern CSS framework based on Flexbox'
              width='112'
              height='28'
            />
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
            <NavLink className='navbar-item' to='/stores'>
              Stores
            </NavLink>
            <NavLink className='navbar-item' to='/menu'>
              Menu
            </NavLink>
            <div className='navbar-item has-dropdown is-hoverable'>
              <NavLink className='navbar-link' to='/'>
                Docs
              </NavLink>
              <div className='navbar-dropdown is-boxed'>
                <NavLink className='navbar-item' to='/'>
                  Overview
                </NavLink>
                <NavLink className='navbar-item' to='/'>
                  Modifiers
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
