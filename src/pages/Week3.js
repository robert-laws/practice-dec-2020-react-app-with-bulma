import React from 'react';
import { PageTitle, SectionList, SectionTitle } from '../components';
import { SubPage } from '../layout';
import { week3 } from '../context/data/weeksData';

export const Week3 = () => {
  return (
    <SubPage>
      <PageTitle>Week 3</PageTitle>
      <SectionList title='Data Analytics' lists={week3} />
      <hr />
      <SectionTitle id='the-value-of-data-analytics'>
        The value of data analytics
      </SectionTitle>
    </SubPage>
  );
};
