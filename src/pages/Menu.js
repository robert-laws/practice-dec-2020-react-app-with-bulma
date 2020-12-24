import React, { useContext, useEffect } from 'react';
import MenusContext from '../context/menus/menusContext';
import { SubPage } from '../layout/SubPage';
import { BaseMenuCard } from '../components';

export const Menu = () => {
  const menusContext = useContext(MenusContext);
  const { menus, getMenus } = menusContext;

  useEffect(() => {
    getMenus();
  }, [getMenus]);

  if (!menus) {
    return (
      <SubPage>
        <h4>No Menus Found</h4>
      </SubPage>
    );
  }

  return (
    <SubPage>
      <h1 className='title is-size-3-mobile is-size-2-desktop ml-2'>Menu</h1>
      <h4 className='is-size-3-desktop ml-2'>Drinks</h4>
      <section className='is-flex is-flex-direction-row is-flex-wrap-wrap'>
        {menus !== null &&
          menus.map((menu) =>
            menu.category === 'drink' ? (
              <section
                key={menu.id}
                className='section'
                style={{ minWidth: '25rem' }}
              >
                <div className='card'>
                  <BaseMenuCard {...menu} bgColor='#F9E1F7' />
                </div>
              </section>
            ) : (
              ''
            )
          )}
      </section>

      <h4 className='is-size-3-desktop ml-2'>Food</h4>
      <section className='is-flex is-flex-direction-row is-flex-wrap-wrap'>
        {menus !== null &&
          menus.map((menu) =>
            menu.category === 'food' ? (
              <section
                key={menu.id}
                className='section'
                style={{ minWidth: '25rem' }}
              >
                <div className='card'>
                  <BaseMenuCard {...menu} bgColor='#9BE5FF' />
                </div>
              </section>
            ) : (
              ''
            )
          )}
      </section>

      <h4 className='is-size-3-desktop ml-2'>Merchandise</h4>
      <section className='is-flex is-flex-direction-row is-flex-wrap-wrap'>
        {menus !== null &&
          menus.map((menu) =>
            menu.category === 'merchandise' ? (
              <section
                key={menu.id}
                className='section'
                style={{ minWidth: '25rem' }}
              >
                <div className='card'>
                  <BaseMenuCard {...menu} bgColor='#FCD9AA' />
                </div>
              </section>
            ) : (
              ''
            )
          )}
      </section>

      <h4 className='is-size-3-desktop ml-2'>Gift Cards</h4>
      <section className='is-flex is-flex-direction-row is-flex-wrap-wrap'>
        {menus !== null &&
          menus.map((menu) =>
            menu.category === 'gift cards' ? (
              <section
                key={menu.id}
                className='section'
                style={{ minWidth: '25rem' }}
              >
                <div className='card'>
                  <BaseMenuCard {...menu} bgColor='#C3FFE1' />
                </div>
              </section>
            ) : (
              ''
            )
          )}
      </section>
    </SubPage>
  );
};
