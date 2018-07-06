import {DRAWER_TOGGLE} from '../constants/DrawerConstants';

export function drawerToggleMenu(value){
  return {
    type: DRAWER_TOGGLE,
    value
  }
}
