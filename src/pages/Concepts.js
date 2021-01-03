import React from 'react';
import { PageTitle } from '../components';
import { SubPage } from '../layout';

export const Concepts = () => {
  return (
    <SubPage>
      <PageTitle>Data Visualization Concepts</PageTitle>
      <div className='container mx-2'>
        <div className='content ml-4'>
          <p className='is-size-5'>
            <span className='has-text-weight-bold'>Data Visualization</span> -
            is the graphical representation of information and data.
          </p>
          <p className='is-size-5'>
            <span className='has-text-weight-bold'>Data set</span> - is a
            collection of data. In the case of tabular data, a data set
            corresponds to one or more database tables.
          </p>
          <p className='is-size-5'>
            <span className='has-text-weight-bold'>Categorical Data</span>
          </p>
          <p className='is-size-5'>
            <span className='has-text-weight-bold'>Numerical Data</span>
          </p>
        </div>
      </div>
    </SubPage>
  );
};
