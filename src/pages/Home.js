import React, { useState } from 'react';
import hero from '../images/data-viz-cafe-hero.jpg';

export const Home = () => {
  const [progressVal, setProgressVal] = useState(0);

  const changeProgress = (value) => {
    if (progressVal < 100) {
      setProgressVal(progressVal + value);
    }
  };

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
        <div className='container'>
          <div className='columns'>
            <div className='column is-one-third'>Card...</div>
            <div className='column is-one-third'>
              <progress
                className='progress is-primary'
                style={{ transition: 'width 0.5s ease' }}
                value={progressVal}
                max='100'
              >
                15%
              </progress>
            </div>
            <div className='column is-one-third'>
              <button
                className='button is-success'
                onClick={() => changeProgress(10)}
              >
                Increase by 10
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
