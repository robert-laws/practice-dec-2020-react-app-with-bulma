import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import ModalContext from '../context/modal/modalContext';

export const Modal = () => {
  const modalContext = useContext(ModalContext);
  const { active, selectionObject, selectionGroup, updateModal } = modalContext;

  return (
    <Fade duration={250}>
      <div className={`modal ${active ? 'is-active' : ''}`}>
        <div
          className='modal-background'
          onClick={() => updateModal({ group: null, obj: null })}
        ></div>
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>
              {selectionGroup && selectionGroup === 'locations'
                ? 'Location Information'
                : 'Menu Item Details'}
            </p>
            <button
              className='delete'
              aria-label='close'
              onClick={() => updateModal({ group: null, obj: null })}
            ></button>
          </header>
          <section
            className='modal-card-body has-background-white py-5 px-5'
            style={{
              borderBottomLeftRadius: '0.25rem',
              borderBottomRightRadius: '0.25rem',
            }}
          >
            <h3 className='title'>
              {selectionObject ? selectionObject.title : ''}
            </h3>
            {selectionGroup && selectionGroup === 'locations' && (
              <div className='box'>
                <p>
                  Address:
                  <br />
                  {selectionObject ? `${selectionObject.street}` : ''}
                  <br />
                  {selectionObject
                    ? `${selectionObject.city}, ${selectionObject.state} ${selectionObject.zip}`
                    : ''}
                </p>
                <hr />
                <p>
                  Location Type:{' '}
                  {selectionObject ? selectionObject.location_type : ''}
                </p>
                <p>
                  Opening Times:{' '}
                  {selectionObject ? selectionObject.open_time : ''} -{' '}
                  {selectionObject ? selectionObject.close_time : ''}
                </p>
                {selectionObject ? (
                  <p>
                    {selectionObject.drive_thru
                      ? '* Drive Thru available at this location'
                      : ''}
                  </p>
                ) : (
                  ''
                )}
              </div>
            )}
            {selectionGroup && selectionGroup === 'menus' && (
              <div className='box'>
                <p>
                  Category: {selectionObject ? selectionObject.category : ''}
                </p>
                <hr />
                <p>
                  Price: $
                  {selectionObject ? selectionObject.price.toFixed(2) : ''}
                </p>
                {selectionObject ? (
                  selectionObject.seasonal ? (
                    <p>Available Seasonally</p>
                  ) : (
                    ''
                  )
                ) : (
                  ''
                )}
              </div>
            )}
          </section>
        </div>
      </div>
    </Fade>
  );
};
