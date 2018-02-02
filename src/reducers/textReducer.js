import { EDIT_INPUT } from '../constants/input';

const input = (state='', action) => {
  switch (action.type) {
    case EDIT_INPUT:
      return action.payload.text
    default:
      return state
  }
}

export default input;
