import React from 'react';
import { PageTitle, SectionList } from '../components';
import { SubPage } from '../layout';

export const Weeks = () => {
  return (
    <SubPage>
      <PageTitle>Class Weeks</PageTitle>
      <SectionList
        title='Core Principles of Data Visualization & Getting Started with Tableau'
        lists={[
          {
            items: [
              {
                type: 'link',
                url: 'week1',
                text: 'Week 1',
              },
              {
                type: 'link',
                url: 'week2',
                text: 'Week 2',
              },
              {
                type: 'link',
                url: 'week3',
                text: 'Week 3',
              },
              {
                type: 'link',
                url: 'week4',
                text: 'Week 4',
              },
              {
                type: 'link',
                url: 'week5',
                text: 'Week 5',
              },
            ],
          },
        ]}
      />
    </SubPage>
  );
};
