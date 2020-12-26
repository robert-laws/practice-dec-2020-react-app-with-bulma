import React from 'react';
import { PageTitle, SectionList } from '../components';
import { SubPage } from '../layout';
import {
  tableau,
  recommended,
  international,
  unitedstates,
  gcc,
  developing,
  developed,
} from '../context/data/resourcesData';

export const Resources = () => {
  return (
    <SubPage>
      <PageTitle>Resources</PageTitle>
      <SectionList title='Tableau' lists={tableau} />
      <SectionList
        title='Datasets'
        lists={[
          ...recommended,
          ...international,
          ...unitedstates,
          ...gcc,
          ...developing,
          ...developed,
        ]}
      />
    </SubPage>
  );
};
