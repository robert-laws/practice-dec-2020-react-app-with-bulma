import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.css';
import './App.scss';
import LocationsState from './context/locations/LocationsState';
import MenusState from './context/menus/MenusState';
import OrdersState from './context/orders/OrdersState';
import ModalState from './context/modal/ModalState';

ReactDOM.render(
  <React.StrictMode>
    <LocationsState>
      <MenusState>
        <OrdersState>
          <ModalState>
            <App />
          </ModalState>
        </OrdersState>
      </MenusState>
    </LocationsState>
  </React.StrictMode>,
  document.getElementById('root')
);
