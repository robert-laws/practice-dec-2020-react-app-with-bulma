import React, { useState, useCallback, useContext, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import LocationsContext from '../context/locations/locationsContext';
import MenusContext from '../context/menus/menusContext';
import { SubPage } from '../layout';
import { LocationCard, MenuCard, PageTitle } from '../components';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { v4 as uuid_v4 } from 'uuid';

export const Order = () => {
  const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
  const SHEET_ID = process.env.REACT_APP_SHEET_ID;
  const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
  const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  const locationsContext = useContext(LocationsContext);
  const menusContext = useContext(MenusContext);

  const {
    locations,
    location,
    getLocations,
    getLocationById,
    clearLocation,
  } = locationsContext;

  const { menus, getMenus } = menusContext;

  useEffect(() => {
    getLocations();
    getMenus();
  }, [getLocations, getMenus]);

  const [step, setStep] = useState('store');
  const [disableStoreCards, setDisableStoreCards] = useState(false);

  const detectStoreSelection = useCallback(
    (id, cardSelected) => {
      if (cardSelected) {
        getLocationById(id);
        setDisableStoreCards(true);
      } else {
        clearLocation();
        setDisableStoreCards(false);
      }
    },
    [setDisableStoreCards, getLocationById, clearLocation]
  );

  const [menuChoices, setMenuChoices] = useState([]);

  const detectMenuSelection = useCallback(
    (menu, selectedQuantity, cardSelected) => {
      if (cardSelected) {
        setMenuChoices((prev) => [
          ...prev.filter((item) => item.id !== menu.id),
          {
            id: menu.id,
            title: menu.title,
            selectedQuantity,
            total: parseInt(selectedQuantity) * parseFloat(menu.price),
          },
        ]);
      } else {
        setMenuChoices((prev) => prev.filter((item) => item.id !== menu.id));
      }
    },
    [setMenuChoices]
  );

  const [selectDriveThru, setSelectedDriveThru] = useState(false);

  const getTime = (date) => {
    date.setHours(date.getHours() + Math.round(date.getMinutes() / 60));
    date.setMinutes(0, 0, 0); // Resets also seconds and milliseconds

    return date.getHours();
  };

  const appendSpreadsheet = async (row) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      // loads document properties and worksheets
      await doc.loadInfo();

      const sheet = doc.sheetsById[SHEET_ID];
      await sheet.addRow(row);
    } catch (e) {
      console.error('Error: ', e);
    }
  };

  const handlePlaceOrder = () => {
    const myDate = new Date();
    const dd = myDate.getDate();

    const mm = myDate.getMonth() + 1;
    const yyyy = myDate.getFullYear();
    const today = `${mm}/${dd}/${yyyy}`;

    const time = getTime(myDate);

    // const order = menuChoices.map((item) => [
    //   {
    //     id: uuid_v4(),
    //     location_id: location.id,
    //     menu_id: item.id,
    //     date: today,
    //     time: time,
    //     quantity: item.selectedQuantity,
    //     drive_thru: selectDriveThru,
    //   },
    // ]);

    // console.log(order);

    menuChoices.forEach((item) => {
      const order = {
        id: uuid_v4(),
        location_id: location.id,
        menu_id: item.id,
        date: today,
        time: time,
        quantity: item.selectedQuantity,
        drive_thru: selectDriveThru,
      };

      appendSpreadsheet(order);
    });

    setStep('confirmation');
  };

  const handleNext = () => {
    if (step === 'store') {
      setStep('menu');
    } else if (step === 'menu') {
      setStep('finalize');
    }
    window.scrollTo(0, 0);
  };

  const handlePrevious = () => {
    if (step === 'menu') {
      setStep('store');
      clearLocation();
      setDisableStoreCards(false);
    } else if (step === 'finalize') {
      setStep('menu');
      setMenuChoices([]);
    }
    window.scrollTo(0, 0);
  };

  const restartOrder = () => {
    clearLocation();
    setMenuChoices([]);
    setSelectedDriveThru(false);
    setDisableStoreCards(false);
    setStep('store');
  };

  if (!locations) {
    return (
      <SubPage>
        <div className='section'>
          <PageTitle>Shop Example</PageTitle>
          <h4>No Stores Found</h4>
        </div>
      </SubPage>
    );
  }

  return (
    <SubPage>
      <PageTitle>Place an Order</PageTitle>

      {step === 'store' && (
        <Fade delay={500} duration={500}>
          <section
            className={`box ${step === 'store' ? 'showBox' : 'hideBox'}`}
          >
            <div className='is-flex-desktop is-justify-content-space-between'>
              <h4 className='is-size-3-desktop is-size-4-mobile mb-4'>
                Step 1: Select a Location
              </h4>
              <button
                style={{ marginRight: '1rem', marginBottom: '1rem' }}
                disabled={!location}
                className='button is-info'
                onClick={handleNext}
              >
                Next Step: Select from the Menu
              </button>
            </div>
            <section className='is-flex is-flex-direction-row is-flex-wrap-wrap'>
              {locations !== null &&
                locations.map((location) => (
                  <section
                    key={location.id}
                    className='section'
                    style={{ minWidth: '27rem' }}
                  >
                    <div className='card'>
                      <LocationCard
                        id={location.id}
                        location={location}
                        sendSelection={detectStoreSelection}
                        disableCard={disableStoreCards}
                      />
                    </div>
                  </section>
                ))}
            </section>
          </section>
        </Fade>
      )}

      {step === 'menu' && (
        <Fade delay={500} duration={500}>
          <section className={`box ${step === 'menu' ? 'showBox' : 'hideBox'}`}>
            {location && (
              <div className='box'>
                <h4>
                  Your Selected Location:{' '}
                  <span className='has-text-weight-bold'>{location.title}</span>
                </h4>
                {location.drive_thru && (
                  <p>Drive Thru Available at this location</p>
                )}
              </div>
            )}
            <div className='is-flex-desktop is-justify-content-space-between'>
              <h4 className='is-size-3-desktop is-size-4-mobile mb-4'>
                Step 2: Select from the Menu
              </h4>
              <div>
                <button
                  style={{ marginRight: '1rem', marginBottom: '1rem' }}
                  disabled={!menuChoices || menuChoices.length === 0}
                  className='button is-info'
                  onClick={handleNext}
                >
                  Next Step: Finalize your Order
                </button>
                <button className='button is-warning' onClick={handlePrevious}>
                  Change Store
                </button>
              </div>
            </div>

            <h4 className='is-size-3-desktop is-size-4-mobile ml-2'>Drinks</h4>
            <section className='is-flex is-flex-direction-row is-flex-wrap-wrap'>
              {menus !== null &&
                menus.map((menu) =>
                  menu.category === 'drink' ? (
                    <section
                      key={menu.id}
                      className='section'
                      style={{ minWidth: '27rem' }}
                    >
                      <div className='p-2'>
                        <MenuCard
                          menu={menu}
                          sendSelection={detectMenuSelection}
                          bgColor='#F9E1F7'
                        />
                      </div>
                    </section>
                  ) : (
                    ''
                  )
                )}
            </section>

            <h4 className='is-size-3-desktop is-size-4-mobile ml-2'>Food</h4>
            <section className='is-flex is-flex-direction-row is-flex-wrap-wrap'>
              {menus !== null &&
                menus.map((menu) =>
                  menu.category === 'food' ? (
                    <section
                      key={menu.id}
                      className='section'
                      style={{ minWidth: '27rem' }}
                    >
                      <div className='p-2'>
                        <MenuCard
                          menu={menu}
                          sendSelection={detectMenuSelection}
                          bgColor='#9BE5FF'
                        />
                      </div>
                    </section>
                  ) : (
                    ''
                  )
                )}
            </section>

            <h4 className='is-size-3-desktop is-size-4-mobile ml-2'>
              Merchandise
            </h4>
            <section className='is-flex is-flex-direction-row is-flex-wrap-wrap'>
              {menus !== null &&
                menus.map((menu) =>
                  menu.category === 'merchandise' ? (
                    <section
                      key={menu.id}
                      className='section'
                      style={{ minWidth: '27rem' }}
                    >
                      <div className='p-2'>
                        <MenuCard
                          menu={menu}
                          sendSelection={detectMenuSelection}
                          bgColor='#FCD9AA'
                        />
                      </div>
                    </section>
                  ) : (
                    ''
                  )
                )}
            </section>

            <h4 className='is-size-3-desktop is-size-4-mobile ml-2'>
              Gift Cards
            </h4>
            <section className='is-flex is-flex-direction-row is-flex-wrap-wrap'>
              {menus !== null &&
                menus.map((menu) =>
                  menu.category === 'gift cards' ? (
                    <section
                      key={menu.id}
                      className='section'
                      style={{ minWidth: '27rem' }}
                    >
                      <div className='p-2'>
                        <MenuCard
                          menu={menu}
                          sendSelection={detectMenuSelection}
                          bgColor='#C3FFE1'
                        />
                      </div>
                    </section>
                  ) : (
                    ''
                  )
                )}
            </section>
          </section>
        </Fade>
      )}

      {step === 'finalize' && (
        <Fade delay={500} duration={500}>
          <section
            className={`box ${step === 'finalize' ? 'showBox' : 'hideBox'}`}
          >
            {location && menuChoices.length > 0 && (
              <section className='section'>
                <div className='content'>
                  <h4 className='is-size-3-desktop mb-4'>
                    Step 3: Finalize your Order
                  </h4>
                  <p>
                    <span className='has-text-weight-bold'>
                      Pickup Location
                    </span>
                    : {location.title}
                  </p>
                  <p>
                    <span className='has-text-weight-bold'>Menu Items</span>:
                  </p>
                  <ul>
                    {menuChoices.map((item) => (
                      <li key={item.id}>
                        {item.title} [quantity: {item.selectedQuantity}]
                      </li>
                    ))}
                  </ul>
                  {location.drive_thru && (
                    <div className='box'>
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
                    </div>
                  )}
                  <p>
                    <strong>
                      Total Quantity:{' '}
                      {menuChoices.reduce(
                        (sum, item) => sum + parseInt(item.selectedQuantity),
                        0
                      )}
                    </strong>
                  </p>
                  <hr />
                  <p>
                    <strong>
                      Total Price: $
                      {menuChoices
                        .reduce((sum, item) => sum + item.total, 0)
                        .toFixed(2)}
                    </strong>
                  </p>
                </div>
                <button
                  style={{ marginRight: '1rem', marginBottom: '1rem' }}
                  className={'button is-primary'}
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </button>
                <button
                  style={{ marginRight: '1rem', marginBottom: '1rem' }}
                  className='button is-info'
                  onClick={handlePrevious}
                >
                  Change Menu Selections
                </button>
                <button className='button is-warning' onClick={restartOrder}>
                  Cancel Order
                </button>
              </section>
            )}
          </section>
        </Fade>
      )}

      {step === 'confirmation' && (
        <Fade delay={500} duration={500}>
          <section
            className={`box ${step === 'confirmation' ? 'showBox' : 'hideBox'}`}
          >
            <div className='box'>
              <h4 className='is-size-3-desktop mb-4'>Order Confirmed</h4>
              <p>Thank you for your order</p>
            </div>
            <button className={'button is-primary'} onClick={restartOrder}>
              Place Another Order
            </button>
          </section>
        </Fade>
      )}

      {step === 'store' && (
        <button
          style={{ marginRight: '1rem', marginBottom: '1rem' }}
          disabled={!location}
          className='button is-info'
          onClick={handleNext}
        >
          Next Step: Select from the Menu
        </button>
      )}
      {step === 'menu' && (
        <button
          style={{ marginRight: '1rem', marginBottom: '1rem' }}
          disabled={!menuChoices || menuChoices.length === 0}
          className='button is-info'
          onClick={handleNext}
        >
          Next Step: Finalize your Order
        </button>
      )}
      {step === 'menu' && (
        <button className='button is-warning' onClick={handlePrevious}>
          Change Store
        </button>
      )}
    </SubPage>
  );
};
