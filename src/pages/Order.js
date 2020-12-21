import React, { useState, useCallback } from 'react';
import Fade from 'react-reveal/Fade';
import { SubPage } from '../layout/SubPage';
import { MenuCard, StoreCard } from '../components';

export const Order = () => {
  const [step, setStep] = useState('store');
  const [storeTitle, setStoreTitle] = useState('');
  const [hasDriveThru, setHasDriveThru] = useState(false);

  const [disableStoreCards, setDisableStoreCards] = useState(false);

  const [menuChoices, setMenuChoices] = useState([]);

  const detectStoreSelection = useCallback(
    (title, driveThru, cardSelected) => {
      if (cardSelected) {
        setStoreTitle(title);
        setDisableStoreCards(true);
        setHasDriveThru(driveThru);
      } else {
        setStoreTitle('');
        setDisableStoreCards(false);
        setHasDriveThru(false);
      }
    },
    [setStoreTitle, setDisableStoreCards, setHasDriveThru]
  );

  const detectMenuSelection = useCallback(
    (title, quantity, cardSelected) => {
      if (cardSelected) {
        setMenuChoices((prev) => [
          ...prev.filter((item) => item.title !== title),
          { title, quantity },
        ]);
      } else {
        setMenuChoices((prev) => prev.filter((item) => item.title !== title));
      }
    },
    [setMenuChoices]
  );

  const handleNext = () => {
    if (step === 'store') {
      setStep('menu');
    }
  };

  const handlePrevious = () => {
    if (step === 'menu') {
      setStep('store');
      setStoreTitle('');
      setDisableStoreCards(false);
    }
  };

  return (
    <SubPage>
      <div className='section'>
        <h1 className='title is-size-3-mobile is-size-2-desktop ml-2'>
          Place an Order
        </h1>
        {step === 'store' && (
          <Fade delay={500} duration={500}>
            <section
              className={`box ${step === 'store' ? 'showBox' : 'hideBox'}`}
            >
              <h4 className='is-size-3-desktop mb-4'>Select a Store</h4>
              <div className='columns'>
                <div className='column'>
                  <StoreCard
                    disableCard={disableStoreCards}
                    sendSelection={detectStoreSelection}
                    selected={false}
                    hasDriveThru={true}
                    title={'Main Street'}
                    street={'123 High St.'}
                  />
                </div>
                <div className='column'>
                  <StoreCard
                    disableCard={disableStoreCards}
                    sendSelection={detectStoreSelection}
                    selected={false}
                    title={'City Mall'}
                    street={'123 High St.'}
                  />
                </div>
              </div>
            </section>
          </Fade>
        )}
        {step === 'menu' && (
          <Fade delay={500} duration={500}>
            <section
              className={`box ${step === 'menu' ? 'showBox' : 'hideBox'}`}
            >
              <h4 className='is-size-3-desktop mb-4'>Select a Store</h4>
              <p>{storeTitle}</p>
              <p>{hasDriveThru ? 'Drive Thru Option' : ''}</p>
              <div className='columns'>
                <div className='column'>
                  <MenuCard
                    title={'Cafe Latte'}
                    description={'Refreshing mix of coffee and milk'}
                    price={'3.50'}
                    quantity={'1'}
                    sendSelection={detectMenuSelection}
                    cardSelected={false}
                  />
                </div>
                <div className='column'>
                  <MenuCard
                    title={'Muffin'}
                    description={'Tasty treat for morning time'}
                    price={'2.75'}
                    quantity={'1'}
                    sendSelection={detectMenuSelection}
                    cardSelected={false}
                  />
                </div>
              </div>
            </section>
          </Fade>
        )}
        {step === 'store' && (
          <button
            disabled={!storeTitle}
            className='button is-info'
            onClick={handleNext}
          >
            Next Step
          </button>
        )}
        {step === 'menu' && (
          <button className='button is-warning' onClick={handlePrevious}>
            Previous Step
          </button>
        )}
      </div>
    </SubPage>
  );
};
