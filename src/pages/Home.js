import React from 'react';
import hero from '../images/data-viz-cafe-hero.jpg';

export const Home = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='columns is-vcentered'>
          <div className='column is-one-third'>
            <h1 className='title is-size-3-mobile is-size-1-desktop ml-2'>
              Data Viz Cafe
            </h1>
            <h3
              className='title is-size-5-mobile is-size-4-desktop ml-2'
              style={{ marginTop: '-1rem' }}
            >
              Resources for Learning Data Visualization
            </h3>
          </div>
          <div className='column'>
            <img src={hero} alt='Hero for Data Visualization' />
          </div>
        </div>
      </div>
    </section>
  );
};
