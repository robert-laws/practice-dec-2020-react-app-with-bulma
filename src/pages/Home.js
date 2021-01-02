import React from 'react';
import Slide from 'react-reveal/Slide';
import hero from '../images/data-viz-cafe-hero-v2.png';
// import paperCupArtisticSmall from '../images/home-page/paper-cup-artistic-small.png';
// import cafeShopSmall from '../images/home-page/cafe-shop-small.png';
import cafeInterior from '../images/home-page/data-viz-cafe-interior.png';
import locationSuburban from '../images/home-page/data-viz-stores-suburban.jpg';
import cafeSetting from '../images/home-page/data-viz-cafe-setting.png';

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
        style={{ minHeight: '550px' }}
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
            <div className='column is-three-fifths-desktop is-offset-one-fifth-desktop'>
              <div>
                <Slide big left>
                  <h1 className='title is-size-2-desktop has-text-centered'>
                    Big Menu Selection & Stylish Merchandise
                  </h1>
                  <div className='is-flex-desktop is-flex-direction-row is-justify-content-center '>
                    <div className='is-flex is-flex-direction-column is-justify-content-center is-align-items-center'>
                      <img
                        className='image mx-5'
                        src={cafeInterior}
                        alt='Paper Coffee Cup'
                      />
                    </div>
                    <div className='is-flex is-flex-direction-column is-justify-content-center is-align-items-center mx-5'>
                      <div className='kpi-1'>6 Gift & Merchandise Choices</div>
                      <div className='kpi-2'>18 Menu Choices</div>
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className='my-6 has-background-info-light'
        style={{ minHeight: '550px' }}
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
            <div className='column is-three-fifths-desktop is-offset-one-fifth-desktop'>
              <div>
                <Slide big right>
                  <h1 className='title is-size-2-desktop has-text-centered'>
                    Locations throughout the State
                  </h1>
                  <div className='is-flex-desktop is-flex-direction-row is-justify-content-center '>
                    <div className='is-flex is-flex-direction-column is-justify-content-center is-align-items-center'>
                      <img
                        className='image mx-5'
                        src={locationSuburban}
                        alt='Cafe Shop'
                      />
                    </div>
                    <div className='is-flex is-flex-direction-column is-justify-content-center is-align-items-center mx-5'>
                      <div className='kpi-3'>24 Store Locations</div>
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className='my-6 has-background-danger-light'
        style={{ minHeight: '550px' }}
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
            <div className='column is-three-fifths-desktop is-offset-one-fifth-desktop'>
              <div>
                <Slide big left>
                  <h1 className='title is-size-2-desktop has-text-centered'>
                    A Business on the Rise
                  </h1>
                  <div className='is-flex-desktop is-flex-direction-row is-justify-content-center '>
                    <div className='is-flex is-flex-direction-column is-justify-content-center is-align-items-center'>
                      <img
                        className='image mx-5'
                        src={cafeSetting}
                        alt='Cafe Shop'
                      />
                    </div>
                    <div className='is-flex is-flex-direction-column is-justify-content-center is-align-items-center mx-5'>
                      <div className='kpi-4'>5 Millions in Sales in 2020</div>
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
