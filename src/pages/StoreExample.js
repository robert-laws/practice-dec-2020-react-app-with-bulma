import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { SubPage } from '../layout/SubPage';

export const StoreExample = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <SubPage>
      <div className='section'>
        <h1 className='title is-size-3-mobile is-size-1-desktop ml-2'>
          Shop Example
        </h1>

        {!toggle && (
          <Fade delay={500} duration={500}>
            <div className={`box ${toggle ? 'hideBox' : 'showBox'}`}>
              <h4 className='is-size-4-desktop'>Store One</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus culpa aspernatur ullam ducimus molestias dicta
                excepturi reiciendis asperiores? Incidunt, doloribus.
              </p>
            </div>
          </Fade>
        )}

        {toggle && (
          <Fade delay={500} duration={500}>
            <div className={`box ${!toggle ? 'hideBox' : 'showBox'}`}>
              <h4 className='is-size-4-desktop'>Store Two</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus culpa aspernatur ullam ducimus molestias dicta
                excepturi reiciendis asperiores? Incidunt, doloribus.
              </p>
            </div>
          </Fade>
        )}

        <button className='button is-info' onClick={handleClick}>
          Select
        </button>
      </div>
    </SubPage>
  );
};
