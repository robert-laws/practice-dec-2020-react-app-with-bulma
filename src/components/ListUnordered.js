import React from 'react';
import { SectionTitle, Link, SimpleText } from './';

export const ListUnordered = ({ sectionTitle = null, listItems }) => {
  return (
    <>
      {sectionTitle && <SectionTitle>{sectionTitle}</SectionTitle>}
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>
            {item.type === 'link' ? (
              <Link url={item.url} text={item.text} />
            ) : (
              <SimpleText>{item.text}</SimpleText>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
