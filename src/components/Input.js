import React, { useState, useEffect } from 'react';

export const Input = ({ nameValue, updateForm }) => {
  const [val, setVal] = useState('');

  useEffect(() => {
    updateForm({ [nameValue]: val });
  }, [nameValue, updateForm, val]);

  return (
    <input
      type='text'
      value={val}
      onChange={(e) => setVal(e.target.value)}
      placeholder='enter a name'
    ></input>
  );
};
