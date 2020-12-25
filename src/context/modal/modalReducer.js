import { UPDATE_MODAL_ACTIVE } from '../types';

const modalReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_MODAL_ACTIVE:
      return {
        active: !state.active,
        selectionGroup: action.payload.group,
        selectionObject: action.payload.obj,
      };

    default:
      return state;
  }
};

export default modalReducer;
