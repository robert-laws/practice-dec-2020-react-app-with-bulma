import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.css';
import './App.scss';
import LocationsState from './context/locations/locationsState';

ReactDOM.render(
  <React.StrictMode>
    <LocationsState>
      <App />
    </LocationsState>
  </React.StrictMode>,
  document.getElementById('root')
);
