import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.css';
import './App.scss';
import LocationsState from './context/locations/LocationsState';
import MenusState from './context/menus/MenusState';

ReactDOM.render(
  <React.StrictMode>
    <LocationsState>
      <MenusState>
        <App />
      </MenusState>
    </LocationsState>
  </React.StrictMode>,
  document.getElementById('root')
);
