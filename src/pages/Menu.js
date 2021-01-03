import React, { useState, useContext, useEffect } from 'react';
import MenusContext from '../context/menus/menusContext';
import ModalContext from '../context/modal/modalContext';
import { SubPage } from '../layout';
import { BaseMenuCard, PageTitle } from '../components';

export const Menu = () => {
  const [menuId, setMenuId] = useState(null);

  const menusContext = useContext(MenusContext);
  const { menus, getMenus } = menusContext;

  const modalContext = useContext(ModalContext);
  const { updateModal } = modalContext;

  useEffect(() => {
    getMenus();
  }, [getMenus]);

  useEffect(() => {
    if (menuId) {
      updateModal({
        group: 'menus',
        obj: menus.find((menu) => menu.id === menuId),
      });
    }
  }, [menuId, menus, updateModal]);

  if (!menus) {
    return (
      <SubPage>
        <h4>No Menus Found</h4>
      </SubPage>
    );
  }

  return (
    <SubPage>
      <PageTitle>Menu</PageTitle>
      <h4 className='is-size-3-desktop ml-2'>Drinks</h4>
      <section className='is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-center'>
        {menus !== null &&
          menus.map((menu) =>
            menu.category === 'drink' ? (
              <section
                key={menu.id}
                className='section'
                style={{ width: '16rem' }}
              >
                <div
                  className='card p-2 is-flex is-flex-direction-column is-justify-content-space-between'
                  style={{ minHeight: '21.5rem' }}
                >
                  <BaseMenuCard {...menu} bgColor='#F9E1F7' />
                  <button
                    className='button is-fullwidth mt-2'
                    onClick={() => setMenuId(menu.id)}
                  >
                    Learn More
                  </button>
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
                style={{ width: '16rem' }}
              >
                <div
                  className='card p-2 is-flex is-flex-direction-column is-justify-content-space-between'
                  style={{ minHeight: '21.5rem' }}
                >
                  <BaseMenuCard {...menu} bgColor='#9BE5FF' />
                  <button
                    className='button is-fullwidth mt-2'
                    onClick={() => setMenuId(menu.id)}
                  >
                    Learn More
                  </button>
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
                style={{ width: '16rem' }}
              >
                <div
                  className='card p-2 is-flex is-flex-direction-column is-justify-content-space-between'
                  style={{ minHeight: '21.5rem' }}
                >
                  <BaseMenuCard {...menu} bgColor='#FCD9AA' />
                  <button
                    className='button is-fullwidth mt-2'
                    onClick={() => setMenuId(menu.id)}
                  >
                    Learn More
                  </button>
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
                style={{ width: '16rem' }}
              >
                <div
                  className='card p-2 is-flex is-flex-direction-column is-justify-content-space-between'
                  style={{ minHeight: '21.5rem' }}
                >
                  <BaseMenuCard {...menu} bgColor='#C3FFE1' />
                  <button
                    className='button is-fullwidth mt-2'
                    onClick={() => setMenuId(menu.id)}
                  >
                    Learn More
                  </button>
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
