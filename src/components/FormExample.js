import React, { useState, useCallback } from 'react';
import { Input } from './Input';

export const FormExample = () => {
  const [formState, setFormState] = useState({
    name: '',
    age: '',
  });

  const updateForm = useCallback(
    (componentInput) => {
      setFormState((prevState) => ({ ...prevState, ...componentInput }));
    },
    [setFormState]
  );

  return (
    <div>
      <h1 className='mb-2'>
        {formState.name} {formState.age}
      </h1>
      <Input nameValue='name' updateForm={updateForm} />
      <Input nameValue='age' updateForm={updateForm} />
    </div>
  );
};
