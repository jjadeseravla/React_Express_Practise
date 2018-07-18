import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getItems = () => {
  return {
    type: GET_ITEMS
  };
};

//could do function getItems() {
//}
//line 4 returns to the reducer the type of items
// this is where we make our request to the backend
