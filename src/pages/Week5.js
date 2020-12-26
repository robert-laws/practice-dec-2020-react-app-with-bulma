import React from 'react';
import { PageTitle, SectionList, SectionTitle } from '../components';
import { SubPage } from '../layout';
import { week5 } from '../context/data/weeksData';

export const Week5 = () => {
  return (
    <SubPage>
      <PageTitle>Week 5</PageTitle>
      <SectionList title='Dashboards & Storytelling' lists={week5} />
      <hr />
      <SectionTitle id='storytelling-with-data'>
        Storytelling with data
      </SectionTitle>
    </SubPage>
  );
};
