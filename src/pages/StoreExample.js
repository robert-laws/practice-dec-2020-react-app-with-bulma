import React, { useState, useCallback } from 'react';
import Fade from 'react-reveal/Fade';
import { SubPage } from '../layout/SubPage';
import { Card } from '../components';

export const StoreExample = () => {
  const [firstStep, setFirstStep] = useState(false);
  const [disableCards, setDisableCards] = useState(false);
  const [selectedStore, setSelectedStore] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  const detectSelection = useCallback(
    (title, cardSelected) => {
      if (cardSelected) {
        setSelectedStore(title);
        setFirstStep(true);
        setDisableCards(true);
      } else {
        setSelectedStore('');
        setFirstStep(false);
        setDisableCards(false);
      }
    },
    [setSelectedStore, setFirstStep, setDisableCards]
  );

  return (
    <SubPage>
      <div className='section'>
        <h1 className='title is-size-3-mobile is-size-1-desktop ml-2'>
          Shop Example
        </h1>

        {!toggle && (
          <Fade delay={500} duration={500}>
            <section className={`box ${toggle ? 'hideBox' : 'showBox'}`}>
              <div className='columns'>
                <div className='column'>
                  <Card
                    disableCard={disableCards}
                    sendSelection={detectSelection}
                    selected={false}
                    title={'Main Street'}
                    street={'123 High St.'}
                  />
                </div>
                <div className='column'>
                  <Card
                    disableCard={disableCards}
                    sendSelection={detectSelection}
                    selected={false}
                    title={'City Mall'}
                    street={'123 High St.'}
                  />
                </div>
                <div className='column'>
                  <Card
                    disableCard={disableCards}
                    sendSelection={detectSelection}
                    selected={false}
                    title={'Valley Road'}
                    street={'123 High St.'}
                  />
                </div>
                <div className='column'>
                  <Card
                    disableCard={disableCards}
                    sendSelection={detectSelection}
                    selected={false}
                    title={'Overhill Pass'}
                    street={'123 High St.'}
                  />
                </div>
              </div>
              <div className='columns'>
                <div className='column'>
                  <Card
                    disableCard={disableCards}
                    sendSelection={detectSelection}
                    selected={false}
                    title={'Woodland High'}
                    street={'123 High St.'}
                  />
                </div>
                <div className='column'>
                  <Card
                    disableCard={disableCards}
                    sendSelection={detectSelection}
                    selected={false}
                    title={'Convention Center'}
                    street={'123 High St.'}
                  />
                </div>
                <div className='column'>
                  <Card
                    disableCard={disableCards}
                    sendSelection={detectSelection}
                    selected={false}
                    title={'2nd Avenue'}
                    street={'123 High St.'}
                  />
                </div>
                <div className='column'>
                  <Card
                    disableCard={disableCards}
                    sendSelection={detectSelection}
                    selected={false}
                    title={'County Fairgrounds'}
                    street={'123 High St.'}
                  />
                </div>
              </div>
            </section>
          </Fade>
        )}

        {toggle && (
          <Fade delay={500} duration={500}>
            <div className={`box ${!toggle ? 'hideBox' : 'showBox'}`}>
              <h4 className='is-size-4-desktop'>Store Two</h4>
              <p>{selectedStore}</p>
            </div>
          </Fade>
        )}

        <button
          disabled={!firstStep}
          className='button is-info'
          onClick={handleClick}
        >
          Select
        </button>
      </div>
      <div className='section'></div>
    </SubPage>
  );
};
