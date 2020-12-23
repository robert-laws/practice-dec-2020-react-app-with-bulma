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
      <h1 className='title is-size-3-mobile is-size-2-desktop ml-2'>Stores</h1>
      <section className='is-flex is-flex-direction-row is-flex-wrap-wrap'>
        {menus !== null &&
          menus.map((menu) => (
            <section
              key={menu.id}
              className='section'
              style={{ minWidth: '25rem' }}
            >
              <div className='card'>
                <BaseMenuCard {...menu} />
              </div>
            </section>
          ))}
      </section>
    </SubPage>
  );
};
