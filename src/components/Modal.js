import React, { useContext } from 'react';
import ModalContext from '../context/modal/modalContext';

export const Modal = () => {
  const modalContext = useContext(ModalContext);
  const { active, selectionObject, selectionGroup, updateModal } = modalContext;

  return (
    <div className={`modal ${active ? 'is-active' : ''}`}>
      <div
        className='modal-background'
        onClick={() => updateModal({ group: null, obj: null })}
      ></div>
      <div
        className='modal-content has-background-white py-5 px-5'
        style={{ borderRadius: '0.25rem' }}
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
              Opening Times: {selectionObject ? selectionObject.open_time : ''}{' '}
              - {selectionObject ? selectionObject.close_time : ''}
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
            <p>Category: {selectionObject ? selectionObject.category : ''}</p>
            <hr />
            <p>Price: ${selectionObject ? selectionObject.price : ''}</p>
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
      </div>
    </div>
  );
};
