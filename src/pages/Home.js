import React from 'react';
import Slide from 'react-reveal/Slide';
import hero from '../images/home-page/data-viz-cafe-hero-v2.png';
import paperCupArtisticSmall from '../images/home-page/paper-cup-artistic-small.png';
import locationRural from '../images/home-page/data-viz-stores-rural.png';
import cafeInterior from '../images/home-page/data-viz-cafe-interior.png';
import locationSuburban from '../images/home-page/data-viz-stores-suburban.jpg';
import cafeSetting from '../images/home-page/data-viz-cafe-setting.png';
import locationUrban from '../images/home-page/data-viz-stores-urban.png';

export const Home = () => {
  return (
    <>
      <section className='section'>
        <div className='container'>
          <div className='columns is-vcentered'>
            <div className='column is-one-third'>
              <h1 className='title is-size-3-mobile is-size-1-desktop ml-2'>
                The Data Viz Cafe
              </h1>
              <h3
                className='subtitle is-size-5-mobile is-size-4-desktop ml-2'
                style={{ marginTop: '-1rem' }}
              >
                Resources to learn Data Visualization and get your caffeine fix
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
              <div className='column "column is-8 is-offset-2'>
                <h1 className='title is-size-2-desktop has-text-centered mb-6'>
                  Data Visualization with Real-World Examples
                </h1>
                <div className='columns'>
                  <div className='column is-two-fifths has-text-centered'>
                    <img
                      style={{ maxWidth: '300px', maxHeight: '300px' }}
                      src={locationUrban}
                      alt='Data Viz Cafe Urban Location'
                    />
                  </div>
                  <div className='content column is-three-fifths'>
                    <p>
                      Using a fictitious coffee shop company called the Data Viz
                      Cafe located in Connecticut, USA as an example, students
                      will learn Data Visualization and Data Analytic concepts.
                    </p>
                    <p>
                      Students have access to datasets with company data about
                      locations, their menu, and sales over a time period of
                      several years.
                    </p>
                    <p>
                      The datasets offer a variety of ways to create data
                      visualizations and apply data analytics to gain insights
                      into the business performance of the coffee shop company.
                    </p>
                    <p>
                      The possible data visualizations that can be created
                      include column and bar charts, multi-set column charts,
                      pie charts, scatter plots, line graphs, geographic charts,
                      heatmaps, and more.
                    </p>
                  </div>
                </div>
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
                        style={{ maxWidth: '400px', maxHeight: '400px' }}
                        className='image mx-5'
                        src={cafeInterior}
                        alt='Paper Coffee Cup'
                      />
                    </div>
                    <div className='is-flex is-flex-direction-column is-justify-content-center is-align-items-center mx-5'>
                      <div className='kpi-2'>18 Menu Options</div>
                      <div className='kpi-1'>6 Gift & Merchandise Choices</div>
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
              <div className='column "column is-8 is-offset-2'>
                <h1 className='title is-size-2-desktop has-text-centered mb-6'>
                  Visualize the Menu & Discover Top Products
                </h1>
                <div className='columns'>
                  <div className='column is-two-fifths has-text-centered'>
                    <img
                      style={{ maxWidth: '226px', maxHeight: '320px' }}
                      src={paperCupArtisticSmall}
                      alt='Data Viz Cafe Urban Location'
                    />
                  </div>
                  <div className='content column is-three-fifths'>
                    <p>
                      The products in the Dat Viz Cafe are divided into the
                      categories of drink, food, merchandise, and gift cards.
                      Each product has a different price. Some products are only
                      available seasonally.
                    </p>
                    <p>
                      This level of detail allows for some interesting data
                      visualizations and analysis. Visualizations can be created
                      to show sales by product and product categories.
                    </p>
                    <p>
                      Each product's sales can be calculated and total sales can
                      be visualized, offering insight to which products and
                      categories are the most and least popular and have the
                      highest sales.
                    </p>
                    <p>
                      Because the date and time of orders is included in the
                      dataset, it's also possible to determine the most and
                      least popular products throughout the year and at
                      different times of the day.
                    </p>
                    <p>
                      The richness of the data allows for a wide range of
                      visualizations and analytics.
                    </p>
                  </div>
                </div>
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
                        style={{ maxWidth: '400px', maxHeight: '400px' }}
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
              <div className='column "column is-8 is-offset-2'>
                <h1 className='title is-size-2-desktop has-text-centered mb-6'>
                  Visualize Cafe Locations Geographically
                </h1>
                <div className='columns'>
                  <div className='column is-two-fifths has-text-centered'>
                    <img
                      style={{ maxWidth: '300px', maxHeight: '300px' }}
                      src={locationRural}
                      alt='Data Viz Cafe Urban Location'
                    />
                  </div>
                  <div className='content column is-three-fifths'>
                    <p>
                      The Data Viz Cafe is geographically situated in the US
                      state of Connecticut. The 24 locations are divided between
                      the 8 different counties and at various different
                      addresses.
                    </p>
                    <p>
                      Each location is classified by location type: rural,
                      suburban, or urban. Each location has distinct operating
                      hours during the day. Some locations offer a drive through
                      option as well.
                    </p>
                    <p>
                      The advantage of having real-world geographic locations is
                      being able to visualize the data against real maps. Each
                      location can be plotted onto a map and its data
                      visualized.
                    </p>
                    <p>
                      The richness of the location data allows for interesting
                      visualizations and analyses. It's possible to determine
                      the locations with the most and least sales figures.
                    </p>
                  </div>
                </div>
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
                      <div className='kpi-4'>$1.86M in sales since 2014</div>
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
