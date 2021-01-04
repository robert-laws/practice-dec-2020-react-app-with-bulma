import React from 'react';
import { PageTitle } from '../components';
import { SubPage } from '../layout';
import { Link } from 'react-router-dom';
import suburbanThumbnail from '../images/suburban-thumbnail.png';
import cafeLatteThumbnail from '../images/cafe-latte-thumbnail.jpg';
import columnChartThumbnail from '../images/column-chart-thumbnail.png';
import orderCartThumbnail from '../images/order-cart-thumbnail.png';

export const Cafe = () => {
  return (
    <SubPage>
      <PageTitle>Visit the Data Viz Cafe</PageTitle>
      <div className='columns'>
        <div className='column is-3'>
          <div className='box has-text-centered'>
            <Link className='is-size-3-desktop is-size-4-mobile' to='/menu'>
              Menu
              <figure class='image'>
                <img
                  src={cafeLatteThumbnail}
                  alt='Menu'
                  style={{ width: '50%', height: '50%', margin: '0 auto' }}
                />
              </figure>
            </Link>
          </div>
        </div>
        <div className='column is-3'>
          <div className='box has-text-centered'>
            <Link className='is-size-3-desktop is-size-4-mobile' to='/stores'>
              Stores
              <figure class='image'>
                <img
                  src={suburbanThumbnail}
                  alt='Locations'
                  style={{ width: '50%', height: '50%', margin: '0 auto' }}
                />
              </figure>
            </Link>
          </div>
        </div>
        <div className='column is-3'>
          <div className='box has-text-centered'>
            <Link className='is-size-3-desktop is-size-4-mobile' to='/order'>
              Place an Order
              <figure class='image'>
                <img
                  src={orderCartThumbnail}
                  alt='Place an Order'
                  style={{ width: '50%', height: '50%', margin: '0 auto' }}
                />
              </figure>
            </Link>
          </div>
        </div>
        <div className='column is-3'>
          <div className='box has-text-centered'>
            <Link className='is-size-3-desktop is-size-4-mobile' to='/data'>
              Data
              <figure class='image'>
                <img
                  src={columnChartThumbnail}
                  alt='Data'
                  style={{ width: '50%', height: '50%', margin: '0 auto' }}
                />
              </figure>
            </Link>
          </div>
        </div>
      </div>
    </SubPage>
  );
};
