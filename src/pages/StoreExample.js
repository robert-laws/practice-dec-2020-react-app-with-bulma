import React, { useState, useCallback, useContext, useEffect } from 'react';
import LocationsContext from '../context/locations/locationsContext';
import MenusContext from '../context/menus/menusContext';
import { SubPage } from '../layout/SubPage';
import { LocationCard, MenuCard } from '../components';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { v4 as uuid_v4 } from 'uuid';

export const StoreExample = () => {
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

    // setStep('confirmation');
  };

  if (!locations) {
    return (
      <SubPage>
        <div className='section'>
          <h1 className='title is-size-3-mobile is-size-1-desktop ml-2'>
            Shop Example
          </h1>
          <h4>No Stores Found</h4>
        </div>
      </SubPage>
    );
  }

  return (
    <SubPage>
      <div className='section'>
        <h1 className='title is-size-3-mobile is-size-1-desktop ml-2'>
          Shop Example
        </h1>
        <h4 className='is-size-3-desktop mb-4'>Select a Store</h4>
        <section className='is-flex is-flex-direction-row is-flex-wrap-wrap'>
          {locations !== null &&
            locations.map((location) => (
              <section
                key={location.id}
                className='section'
                style={{ minWidth: '25rem' }}
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
        <section className='section'>
          {location && (
            <div className='box'>
              <h4 className='has-text-weight-bold'>{location.title}</h4>
              {location.drive_thru && <p>Drive Thru Available</p>}
            </div>
          )}
          {menus !== null && (
            <section className='is-flex is-flex-direction-row is-flex-wrap-wrap'>
              {menus.map((menu) => (
                <section
                  key={menu.id}
                  className='section'
                  style={{ minWidth: '25rem' }}
                >
                  <div className='card'>
                    <MenuCard menu={menu} sendSelection={detectMenuSelection} />
                  </div>
                </section>
              ))}
            </section>
          )}
        </section>
        {location && menuChoices.length > 0 && (
          <section className='section'>
            <div className='box'>
              <h4 className='is-size-3-desktop mb-4'>Finalize your Order</h4>
              <p>Store Pickup: {location.title}</p>
              <p>Menu Items:</p>
              {menuChoices.map((item) => (
                <p key={item.id}>
                  {item.title}, quantity: {item.selectedQuantity}
                </p>
              ))}
              {location.drive_thru && (
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
              <p>
                <strong>
                  Total Quantity:{' '}
                  {menuChoices.reduce(
                    (sum, item) => sum + parseInt(item.selectedQuantity),
                    0
                  )}
                </strong>
              </p>
              <p>
                <strong>
                  Total Price: $
                  {menuChoices.reduce((sum, item) => sum + item.total, 0)}
                </strong>
              </p>
            </div>
            <button className={'button is-primary'} onClick={handlePlaceOrder}>
              Place Order
            </button>
          </section>
        )}
      </div>
    </SubPage>
  );
};
