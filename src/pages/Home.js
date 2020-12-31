import React from 'react';
import Slide from 'react-reveal/Slide';
import hero from '../images/data-viz-cafe-hero.jpg';
import paperCupArtistic from '../images/home-page/paper-cup-artistic.png';

export const Home = () => {
  return (
    <>
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
      <div
        className='my-6 has-background-warning-light'
        style={{ minHeight: '700px' }}
      >
        <section className='section'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-three-fifths is-offset-one-fifth'>
                <h2 className='subtitle is-size-2-desktop'>Text...</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <div>
                <Slide big left>
                  <h1 className='title is-size-2-desktop has-text-centered'>
                    Big Taste and Style
                  </h1>
                  <div className='is-flex is-flex-direction-row is-justify-content-center'>
                    <img
                      className='image mx-5'
                      style={{ height: '400px' }}
                      src={paperCupArtistic}
                      alt='Paper Coffee Cup'
                    />
                    <div className='is-flex is-flex-direction-column is-justify-content-center mx-5'>
                      <div className='kpi'>24 Menu Choices</div>
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
