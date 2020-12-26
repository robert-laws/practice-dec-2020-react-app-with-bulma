import React from 'react';
import { PageTitle, SectionList, SectionTitle } from '../components';
import { SubPage } from '../layout';
import { week1 } from '../context/data/weeksData';

export const Week1 = () => {
  return (
    <SubPage>
      <PageTitle>Week 1</PageTitle>
      <SectionList
        title='Core Principles of Data Visualization & Getting Started with Tableau'
        lists={week1}
      />
      <hr />
      <SectionTitle id='what-is-data-visualization'>
        What is Data Visualization
      </SectionTitle>

      <SectionTitle id='brief-history-of-data-visualization'>
        Brief History of Data Visualization
      </SectionTitle>
      <SectionTitle id='elements-of-data-visualizations'>
        Elements of Data Visualizations
      </SectionTitle>
      <SectionTitle id='examples-of-good-and-bad-data-visualizations'>
        Examples of Good and Bad Data Visualizations
      </SectionTitle>
    </SubPage>
  );
};
