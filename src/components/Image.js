import React from 'react';

export const Image = ({ url, src, alt, captionText = null }) => {
  return (
    <div className='box my-3 mt-5 pt-5'>
      <div>
        <figure className='image'>
          {url ? (
            <a href={url}>
              <img src={src} alt={alt} />
            </a>
          ) : (
            <img src={src} alt={alt} />
          )}
        </figure>
      </div>
      {captionText && (
        <div className='has-text-centered'>
          <p>
            {url ? <a href={url}>{captionText}</a> : <span>{captionText}</span>}
          </p>
        </div>
      )}
    </div>
  );
};
