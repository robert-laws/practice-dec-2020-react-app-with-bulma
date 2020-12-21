import React, { useState, useCallback } from 'react';
import Fade from 'react-reveal/Fade';
import { SubPage } from '../layout/SubPage';
import { MenuCard, StoreCard } from '../components';

export const Order = () => {
  const [step, setStep] = useState('store');
  const [storeTitle, setStoreTitle] = useState('');
  const [hasDriveThru, setHasDriveThru] = useState(false);

  const [disableStoreCards, setDisableStoreCards] = useState(false);

  const [selectDriveThru, setSelectedDriveThru] = useState(false);

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
    } else if (step === 'menu') {
      setStep('finalize');
    }
  };

  const handlePrevious = () => {
    if (step === 'menu') {
      setStep('store');
      setStoreTitle('');
      setDisableStoreCards(false);
    }
  };

  const getStoreIndex = (store) => {
    switch (store) {
      case 'Main Street':
        return '1';
      case 'City Mall':
        return '2';
      default:
        break;
    }
  };

  const getMenuIndex = (menu) => {
    switch (menu) {
      case 'Cafe Latte':
        return '1';
      case 'Muffin':
        return '2';
      default:
        break;
    }
  };

  const getTime = (date) => {
    date.setHours(date.getHours() + Math.round(date.getMinutes() / 60));
    date.setMinutes(0, 0, 0); // Resets also seconds and milliseconds

    return date.getHours();
  };

  const handlePlaceOrder = () => {
    const myDate = new Date();
    const dd = myDate.getDate();

    const mm = myDate.getMonth() + 1;
    const yyyy = myDate.getFullYear();
    const today = `${mm}/${dd}/${yyyy}`;

    const time = getTime(myDate);

    const storeIndex = getStoreIndex(storeTitle);
    const order = menuChoices.map((item) => [
      storeIndex,
      getMenuIndex(item.title),
      today,
      time,
      item.quantity,
      selectDriveThru,
    ]);

    console.log(order);
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
        {step === 'finalize' && (
          <Fade delay={500} duration={500}>
            <section
              className={`box ${step === 'finalize' ? 'showBox' : 'hideBox'}`}
            >
              <div className='box'>
                <h4 className='is-size-3-desktop mb-4'>Finalize your Order</h4>
                <p>Store Pickup: {storeTitle}</p>
                <p>Menu Items:</p>
                {menuChoices.map((item, index) => (
                  <p key={index}>
                    {item.title}, quantity: {item.quantity}
                  </p>
                ))}
                {hasDriveThru && (
                  <label className='checkbox'>
                    <input
                      checked={selectDriveThru}
                      onChange={(event) =>
                        setSelectedDriveThru(event.target.checked)
                      }
                      type='checkbox'
                    />{' '}
                    Pick up at Drive Thru
                  </label>
                )}
              </div>
              <button
                className={'button is-primary'}
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </section>
          </Fade>
        )}
        {step === 'store' && (
          <button
            disabled={!storeTitle}
            className='button is-info'
            onClick={handleNext}
          >
            Select from the Menu
          </button>
        )}
        {step === 'menu' && (
          <button
            disabled={!menuChoices}
            className='button is-info'
            onClick={handleNext}
          >
            Finalize your Order
          </button>
        )}
        {step === 'menu' && (
          <button className='button is-warning' onClick={handlePrevious}>
            Change Store
          </button>
        )}
      </div>
    </SubPage>
  );
};
