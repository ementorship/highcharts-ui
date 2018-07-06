import {DRAWER_TOGGLE} from '../constants/DrawerConstants';

const initialDrawerState = {
  isDrawerOpen: false
}

export default function drawer(state = initialDrawerState, action){
  switch (action.type) {
    case DRAWER_TOGGLE:
      return Object.assign({}, state, {isDrawerOpen: action.value})
      break;
    default:
      return state;
  }
}
