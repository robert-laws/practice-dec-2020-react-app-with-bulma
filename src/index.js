import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.css';
import './App.scss';
import LocationsState from './context/locations/LocationsState';
import MenuState from './context/menu/MenuState';

ReactDOM.render(
  <React.StrictMode>
    <LocationsState>
      <MenuState>
        <App />
      </MenuState>
    </LocationsState>
  </React.StrictMode>,
  document.getElementById('root')
);
