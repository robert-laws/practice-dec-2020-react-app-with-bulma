import React from 'react';
import {
  PageTitle,
  SectionList,
  SectionGroup,
  SectionTitle,
  SectionContent,
  Link,
  Image,
} from '../components';
import { SubPage } from '../layout';
import { week1 } from '../context/data/weeksData';
import dataVizHistory1 from '../images/data-viz-history-1.png';
import dataVizHistory2 from '../images/data-viz-history-2.jpg';

export const Week1 = () => {
  return (
    <SubPage>
      <PageTitle>Week 1</PageTitle>
      <SectionList
        title='Core Principles of Data Visualization & Getting Started with Tableau'
        lists={week1}
      />
      <hr />
      <SectionGroup>
        <SectionTitle id='what-is-data-visualization'>
          What is Data Visualization
        </SectionTitle>
        <SectionContent>
          <blockquote>
            "Being able to <strong>visualize data</strong> and tell stories with
            it is key to turning it into <strong>information</strong> that can
            be used to drive better <strong>decision making</strong>." - Cole
            Nussbaumer Knaflic. <em>Storytelling with Data</em>
          </blockquote>
          <blockquote>
            "Visualization is a medium: a way to explore, present, and express{' '}
            <strong>meaning in data</strong>." - Nathan Yau,{' '}
            <em>Data Points</em>
          </blockquote>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='brief-history-of-data-visualization'>
          Brief History of Data Visualization
        </SectionTitle>
        <SectionContent>
          <Link
            url='https://www.tableau.com/learn/articles/best-beautiful-data-visualization-examples'
            text='Data is beautiful: 10 of the best data visualization examples from history to today'
          />
          <h4 className='is-size-6 mt-4 mb-0'>
            Two Famous Early Data Visualizations
          </h4>
          <div className='columns'>
            <div className='column is-three-fifths'>
              <Image
                url='https://en.wikipedia.org/wiki/Charles_Joseph_Minard'
                src={dataVizHistory1}
                alt='Napoleon March Map'
                captionText='Napoleon March Map'
              />
            </div>
            <div className='column is-two-fifths'>
              <Image
                url='https://en.wikipedia.org/wiki/1854_Broad_Street_cholera_outbreak'
                src={dataVizHistory2}
                alt='1854 Broad Street Cholera Outbreak Map'
                captionText='1854 Broad Street Cholera Outbreak Map'
              />
            </div>
          </div>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='elements-of-data-visualizations'>
          Elements of Data Visualizations
        </SectionTitle>
        <SectionContent>
          <SectionList
            lists={[
              {
                items: [
                  {
                    type: 'text',
                    text:
                      'Labels - including titles, axes (if applicable), legend, and data points',
                  },
                  {
                    type: 'text',
                    text:
                      'Colors - used to add more information to help the viewer understand it better',
                  },
                  {
                    type: 'text',
                    text:
                      'Data - comprising the basis of any type of graph or chart content',
                  },
                ],
              },
            ]}
          />
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='examples-of-good-and-bad-data-visualizations'>
          Examples of Good and Bad Data Visualizations
        </SectionTitle>
        <SectionContent></SectionContent>
      </SectionGroup>
    </SubPage>
  );
};
