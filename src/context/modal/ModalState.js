import React, { useReducer, useCallback } from 'react';
import ModalContext from './modalContext';
import modalReducer from './modalReducer';
import { UPDATE_MODAL_ACTIVE } from '../types';

const ModalState = ({ children }) => {
  const initialState = {
    active: false,
    selectionGroup: null,
    selectionObject: null,
  };

  const [state, dispatch] = useReducer(modalReducer, initialState);

  const updateModal = useCallback(
    ({ group, obj }) => {
      dispatch({ type: UPDATE_MODAL_ACTIVE, payload: { group, obj } });
    },
    [dispatch]
  );

  return (
    <ModalContext.Provider
      value={{
        active: state.active,
        selectionGroup: state.selectionGroup,
        selectionObject: state.selectionObject,
        updateModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalState;
