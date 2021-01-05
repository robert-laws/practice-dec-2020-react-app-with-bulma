import React from 'react';
import {
  PageTitle,
  SectionList,
  SectionGroup,
  SectionTitle,
  SectionContent,
  Link,
  Image,
  Subtitle,
  SectionSubtitle,
} from '../components';
import { SubPage } from '../layout';
import { week1 } from '../context/data/weeksData';
import dataVizHistory1 from '../images/data-viz-history-1.png';
import dataVizHistory2 from '../images/data-viz-history-2.jpg';
import badDv1 from '../images/bad-dv-1.png';
import badDv2 from '../images/bad-dv-2.jpg';
import badDv3 from '../images/bad-dv-3.png';
import badDv5 from '../images/bad-dv-5.jpg';
import goodDv1 from '../images/good-dv-1.png';
import goodDv2 from '../images/good-dv-2.png';
import barChartExample from '../images/bar-chart-example.png';
import multisetBarChartExample from '../images/multiset-bar-chart-example.png';
import pieChartExample from '../images/pie-chart-example.png';

export const Week1 = () => {
  return (
    <SubPage>
      <PageTitle>Week 1</PageTitle>
      <SectionList
        title='Core Principles of Data Visualization & Getting Started with Tableau'
        lists={week1}
      />
      <hr />
      <Subtitle>Theory</Subtitle>
      <SectionGroup>
        <SectionTitle id='what-is-data-visualization'>
          What is Data Visualization
        </SectionTitle>
        <SectionContent>
          <blockquote>
            "Visualization is a medium: a way to explore, present, and express{' '}
            <strong>meaning in data</strong>." - Nathan Yau,{' '}
            <em>Data Points</em>
          </blockquote>
          <blockquote>
            "Being able to <strong>visualize data</strong> and tell stories with
            it is key to turning it into <strong>information</strong> that can
            be used to drive better <strong>decision making</strong>." - Cole
            Nussbaumer Knaflic. <em>Storytelling with Data</em>
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
          <SectionSubtitle>
            Two Famous Early Data Visualizations
          </SectionSubtitle>
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
                      'Data - comprising the basis of any type of graph or chart content',
                  },
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
                      'Scale or Proportion - show relationships between parts of the data',
                  },
                  {
                    type: 'text',
                    text:
                      'Clarity - differences in shapes, color, and relationships are easy to identify',
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
        <SectionContent>
          <SectionSubtitle>Bad Data Visualizations</SectionSubtitle>
          <div className='columns'>
            <div className='column'>
              <Image
                src={badDv1}
                alt='Bad Data Visualization'
                captionText='Bad'
              />
            </div>
            <div className='column'>
              <Image
                src={badDv2}
                alt='Bad Data Visualization'
                captionText='Bad'
              />
            </div>
          </div>
          <div className='columns'>
            <div className='column'>
              <Image
                src={badDv5}
                alt='Bad Data Visualization'
                captionText='Bad'
              />
            </div>
            <div className='column'>
              <Image
                src={badDv3}
                alt='Bad Data Visualization'
                captionText='Bad'
              />
            </div>
          </div>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionContent>
          <SectionSubtitle>Good Data Visualizations</SectionSubtitle>
          <div className='columns'>
            <div className='column'>
              <Image
                src={goodDv1}
                alt='Good Data Visualization'
                captionText='Good'
              />
            </div>
            <div className='column'>
              <Image
                src={goodDv2}
                alt='Good Data Visualization'
                captionText='Good'
              />
            </div>
          </div>
        </SectionContent>
      </SectionGroup>

      <Subtitle>Tableau</Subtitle>
      <SectionGroup>
        <SectionTitle id='connecting-to-data'>Connecting to Data</SectionTitle>
        <SectionContent>
          <div class='columns'>
            <div class='column is-three-fifths is-offset-one-fifth'>
              <iframe
                style={{ width: '100%', minHeight: '450px' }}
                title='Connecting to Data in Tableau'
                src='https://www.youtube.com/embed/FDxkvi1DZls'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </SectionContent>
      </SectionGroup>

      <SectionGroup>
        <SectionTitle id='interface-walkthrough'>
          Interface Walkthrough
        </SectionTitle>
        <SectionContent>
          <div class='columns'>
            <div class='column is-three-fifths is-offset-one-fifth'>
              <iframe
                title='Tableau Interface Walkthrough'
                style={{ width: '100%', minHeight: '450px' }}
                src='https://www.youtube.com/embed/EYBgwHA8YuM'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </SectionContent>
      </SectionGroup>

      <SectionGroup>
        <SectionTitle id='basics-of-building-visualizations'>
          Basics of Building Visualizations
        </SectionTitle>
        <SectionContent>
          <div class='columns'>
            <div class='column is-three-fifths is-offset-one-fifth'>
              <iframe
                title='Basics of Building Visualizations'
                style={{ width: '100%', minHeight: '450px' }}
                src='https://www.youtube.com/embed/KhY4qndWhQY'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </SectionContent>
      </SectionGroup>

      <SectionGroup>
        <SectionTitle id='labeling-visualizations'>
          Labeling Visualizations
        </SectionTitle>
        <SectionContent>
          <div class='columns'>
            <div class='column is-three-fifths is-offset-one-fifth'>
              <iframe
                title='Labeling Visualizations'
                style={{ width: '100%', minHeight: '450px' }}
                src='https://www.youtube.com/embed/etCFY-uM1X8'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </SectionContent>
      </SectionGroup>

      <SectionGroup>
        <SectionTitle id='sorting'>Sorting</SectionTitle>
        <SectionContent>
          <div class='columns'>
            <div class='column is-three-fifths is-offset-one-fifth'>
              <iframe
                title='Sorting'
                style={{ width: '100%', minHeight: '450px' }}
                src='https://www.youtube.com/embed/YyPrWrQih1M'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </SectionContent>
      </SectionGroup>

      <SectionGroup>
        <SectionTitle id='filtering'>Filtering</SectionTitle>
        <SectionContent>
          <div class='columns'>
            <div class='column is-three-fifths is-offset-one-fifth'>
              <iframe
                title='Filtering'
                style={{ width: '100%', minHeight: '450px' }}
                src='https://www.youtube.com/embed/F4DGioZAvwg'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </SectionContent>
      </SectionGroup>

      <SectionGroup>
        <SectionTitle id='exporting-visualizations'>
          Exporting Visualizations
        </SectionTitle>
        <SectionContent>
          <div class='columns'>
            <div class='column is-three-fifths is-offset-one-fifth'>
              <iframe
                title='Exporting Visualizations'
                style={{ width: '100%', minHeight: '450px' }}
                src='https://www.youtube.com/embed/jUHcs7C9uA8'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </SectionContent>
      </SectionGroup>

      <Subtitle>Charts & Graphs</Subtitle>
      <SectionGroup>
        <SectionTitle id='column-chart'>Column Chart</SectionTitle>
        <SectionContent>
          <div class='columns'>
            <div class='column is-three-fifths is-offset-one-fifth'>
              <Image
                src={barChartExample}
                alt='Column Chart'
                captionText='Column Chart Example'
              />
            </div>
          </div>
          <p>
            Column Charts (or Bar Charts when the 'bars' are horizontal) are
            used to show numerical comparisons across categories.
          </p>
        </SectionContent>
      </SectionGroup>

      <SectionGroup>
        <SectionTitle id='multiset-column-chart'>
          Multi-set Column Chart
        </SectionTitle>
        <SectionContent>
          <div class='columns'>
            <div class='column is-three-fifths is-offset-one-fifth'>
              <Image
                src={multisetBarChartExample}
                alt='Multiset Column Chart'
                captionText='Multiset Column Chart Example'
              />
            </div>
          </div>
          <p>
            Similar to a column chart, a Multi-set Column Chart displays two or
            more data series to show numerical comparisons across categories.
          </p>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='pie-chart'>Pie Chart</SectionTitle>
        <SectionContent>
          <div class='columns'>
            <div class='column is-three-fifths is-offset-one-fifth'>
              <Image
                src={pieChartExample}
                alt='Pie Chart'
                captionText='Pie Chart Example'
              />
            </div>
          </div>
          <p>
            A Pie Chart is used to show proportions and percentages between
            categories.
          </p>
        </SectionContent>
      </SectionGroup>
    </SubPage>
  );
};
