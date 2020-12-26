import React from 'react';
import { Subtitle, ListUnordered } from './';

export const SectionList = ({ title = null, lists }) => {
  return (
    <div className='container mb-6 ml-5'>
      {title && <Subtitle>{title}</Subtitle>}
      <div className='content'>
        {lists.map((list, index) => (
          <ListUnordered
            key={index}
            sectionTitle={list.title}
            listItems={list.items}
          />
        ))}
      </div>
    </div>
  );
};
