import React from 'react';
import { PageTitle, SectionList, SectionTitle } from '../components';
import { SubPage } from '../layout';
import { week4 } from '../context/data/weeksData';

export const Week4 = () => {
  return (
    <SubPage>
      <PageTitle>Week 4</PageTitle>
      <SectionList title='Geographic Data' lists={week4} />
      <hr />
      <SectionTitle id='combining-maps-and-data'>
        Combining maps and data
      </SectionTitle>
    </SubPage>
  );
};
