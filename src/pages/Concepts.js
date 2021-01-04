import React from 'react';
import { PageTitle } from '../components';
import { SubPage } from '../layout';

export const Concepts = () => {
  return (
    <SubPage>
      <PageTitle>Data Visualization Concepts</PageTitle>
      <div className='container mx-2'>
        <div className='content ml-4'>
          <div className='box'>
            <h4 className='is-size-4-desktop is-size-5-mobile'>
              General Concepts
            </h4>
            <p className='is-size-6 ml-3'>
              <span className='has-text-weight-bold'>Data Visualization</span> -
              is the graphical representation of information and data.
            </p>
            <p className='is-size-6 ml-3'>
              <span className='has-text-weight-bold'>Data set</span> - is a
              collection of data. In the case of tabular data, a data set
              corresponds to one or more database tables.
            </p>
            <p className='is-size-6 ml-3'>
              <span className='has-text-weight-bold'>Categorical Data</span> -
              represent types of data which may be divided into groups
            </p>
            <p className='is-size-6 ml-3'>
              <span className='has-text-weight-bold'>Numerical Data</span> -
              expressed in numbers that can have arithmetic operations performed
              on them
            </p>
          </div>
          <div className='box'>
            <h4 className='is-size-4-desktop is-size-5-mobile'>
              Tableau Concepts
            </h4>
            <p className='is-size-6 ml-3'>
              <span className='has-text-weight-bold'>Dimensions</span> - contain
              qualitative values (such as names, dates, or geographical data).
            </p>
            <p className='is-size-6 ml-3'>
              <span className='has-text-weight-bold'>Measures</span> - contain
              numeric, quantitative values that you can measure.
            </p>
            <p className='is-size-6 ml-3'>
              <span className='has-text-weight-bold'>Discrete</span> - counted
              as distinct and separate and can only take individual values
              within a range.
            </p>
            <p className='is-size-6 ml-3'>
              <span className='has-text-weight-bold'>Continuous</span> - are
              values that have an order over a continuum that can’t be
              re-ordered.
            </p>
          </div>
        </div>
      </div>
    </SubPage>
  );
};
