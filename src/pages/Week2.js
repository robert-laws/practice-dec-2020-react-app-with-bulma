import React from 'react';
import { PageTitle, SectionList, SectionTitle } from '../components';
import { SubPage } from '../layout';
import { week2 } from '../context/data/weeksData';

export const Week2 = () => {
  return (
    <SubPage>
      <PageTitle>Week 2</PageTitle>
      <SectionList title='Datasets & Time Series' lists={week2} />
      <hr />
      <SectionTitle id='design-principles-for-color-labeling-shapes-and-sizing'>
        Design principles for color, labeling, shapes, and sizing
      </SectionTitle>
    </SubPage>
  );
};
