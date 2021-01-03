import React from 'react';
import { PageTitle } from '../components';
import { SubPage } from '../layout';
import paperCupArtistic from '../images/home-page/paper-cup-artistic.png';

export const About = () => {
  return (
    <SubPage>
      <PageTitle>About this Website</PageTitle>
      <div className='container mx-2 is-flex-desktop is-flex-direction-row'>
        <div className='mr-5 mb-4'>
          <div className='block'>
            <p>
              The Data Viz Cafe is a website to support student learning for the
              course Introduction to Data Visualization, taught in Spring 2021.
              The goal of the website is to teach key concepts and best
              practices for data visualization. The website does this by
              presenting concepts directly with weekly learning activities and
              resources.
            </p>
          </div>
          <div className='block'>
            <p>
              The aim of this website is to help students understand the process
              of creating data. This is done by replicating the online cafe
              storefront experience within the website. Students can place order
              in the store by first selecting a location and then items from a
              menu to order. Each time an order is placed, data is created.
              Students can view the data being created in real-time, replicating
              a real-world experience of how a business would collect data.
            </p>
          </div>
          <div className='block'>
            <p>
              Another key learning goal is to understand the concept of data
              analytics through working with data visualizations. Building data
              visualizations is only part of the learning goals for the course.
              This is complimented with a strong focus on analyzing the data and
              making sense of what the data is telling us. With this knowledge
              in hand, it's possible to understand the process of data-driven
              decision making.
            </p>
          </div>
          <div className='block'>
            <p>
              Students will use software to help facilitate the learning for
              this course - Tableau and Microsoft Excel. These two software
              tools are industry standard tools used by professionals. Students
              will gain experience with the tools and the benefit of being able
              to add different skills to their resume as they near graduation.
            </p>
          </div>
        </div>
        <div className='is-flex is-justify-content-center'>
          <img
            style={{ maxWidth: '226px', maxHeight: '320px' }}
            src={paperCupArtistic}
            alt='Paper Coffee Cup'
          />
        </div>
      </div>
    </SubPage>
  );
};
