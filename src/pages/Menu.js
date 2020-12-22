import React, { useContext, useEffect } from 'react';
import MenuContext from '../context/menu/menuContext';
import { SubPage } from '../layout/SubPage';

export const Menu = () => {
  const menuContext = useContext(MenuContext);
  const { menu, getMenu } = menuContext;

  useEffect(() => {
    getMenu();
  }, [getMenu]);

  if (!menu) {
    return (
      <SubPage>
        <h4>No Menu Items Found</h4>
      </SubPage>
    );
  }

  return (
    <SubPage>
      <h1 className='title is-size-3-mobile is-size-2-desktop ml-2'>Menu</h1>
      {menu !== null && menu.map((item) => <p key={item.id}>{item.title}</p>)}
    </SubPage>
  );
};
