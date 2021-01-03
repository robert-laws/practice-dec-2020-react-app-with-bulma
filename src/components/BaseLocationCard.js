import React from 'react';
import ruralThumbnail from '../images/rural-thumbnail.png';
import suburbanThumbnail from '../images/suburban-thumbnail.png';
import urbanThumbnail from '../images/urban-thumbnail.png';

export const BaseLocationCard = ({
  card = 'list',
  title,
  location_type,
  open_time,
  close_time,
  drive_thru,
}) => {
  const getThumbnail = (location) => {
    if (location === 'rural') {
      return <img src={ruralThumbnail} alt='Rural Location' />;
    } else if (location === 'suburban') {
      return <img src={suburbanThumbnail} alt='Suburban Location' />;
    } else {
      return <img src={urbanThumbnail} alt='Urban Location' />;
    }
  };

  return (
    <div className='card-content'>
      {card === 'order' ? (
        <p
          style={{ minHeight: '1rem' }}
          className='has-text-weight-bold title is-size-5'
        >
          {title}
        </p>
      ) : (
        <p
          style={{ minHeight: '4.2rem' }}
          className='has-text-weight-bold title is-size-5'
        >
          {title}
        </p>
      )}
      {card === 'order' ? (
        <section className='is-flex is-flex-desktop-only'>
          <div style={{ width: '120px', marginRight: '10px' }}>
            {getThumbnail(location_type)}
          </div>
          <div>
            <p>Location Type: {location_type}</p>
            <p>
              Store Hours: {open_time} - {close_time}
            </p>
            {drive_thru ? 'Drive Thru Available' : ''}
          </div>
        </section>
      ) : (
        getThumbnail(location_type)
      )}
    </div>
  );
};
