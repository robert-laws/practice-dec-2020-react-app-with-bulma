import React from 'react';
import { PageTitle, SectionList } from '../components';
import { SubPage } from '../layout';
import {
  tableau,
  online,
  recommended,
  international,
  unitedstates,
  gcc,
  developing,
  developed,
  course,
} from '../context/data/resourcesData';

export const Resources = () => {
  return (
    <SubPage>
      <PageTitle>Resources</PageTitle>
      <SectionList title='Tableau' lists={tableau} />
      <SectionList
        title='E-Books from the Library and Online Learning Resources'
        lists={online}
      />
      <SectionList
        title='Datasets'
        lists={[
          ...course,
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
