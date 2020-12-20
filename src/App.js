import { useState } from 'react';
import './App.scss';

function App() {
  const [ddActive, setDdActive] = useState(false);
  return (
    <div>
      <h1 className='mb-2'>App</h1>
      <a href='/' className='button is-primary'>
        Primary
      </a>
      <span className='icon has-text-info'>
        <i className='fas fa-info-circle'></i>
      </span>

      <div className={`dropdown ${ddActive ? 'is-active' : ''}`}>
        <div className='dropdown-trigger'>
          <button
            className='button'
            aria-haspopup='true'
            aria-controls='dropdown-menu'
            onClick={() => setDdActive(!ddActive)}
          >
            <span>Dropdown button</span>
            <span className='icon is-small'>
              <i className='fas fa-angle-down' aria-hidden='true'></i>
            </span>
          </button>
        </div>
        <div className='dropdown-menu' id='dropdown-menu' role='menu'>
          <div className='dropdown-content'>
            <a href='/' className='dropdown-item'>
              Dropdown item
            </a>
            <a href='/' className='dropdown-item'>
              Other dropdown item
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
