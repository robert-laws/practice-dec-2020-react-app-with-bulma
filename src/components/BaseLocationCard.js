import React from 'react';

export const BaseLocationCard = ({
  title,
  street,
  city,
  state,
  zip,
  drive_thru,
  location_type,
  open_time,
  close_time,
}) => {
  return (
    <div className='card-content'>
      <p className='title'>{title}</p>
      <p className='subtitle'>
        {street}
        <br />
        {city}, {state} {zip}
      </p>
      <hr />
      <p>Location Type: {location_type}</p>
      <p>
        Opening Times: {open_time} - {close_time}
      </p>
      {drive_thru && <p>Drive Thru available at this location</p>}
    </div>
  );
};
