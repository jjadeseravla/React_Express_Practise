import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getItems = () => {
  return {
    type: GET_ITEMS
  };
};

export const deleteItem = (id) => { //takes id cos needs to know which item to delete
  return {
    type: DELETE_ITEM,
    payload: id// send payload along with dispatch/return
  };
};

export const addItem = (item) => { //takes in whole item
  return {
    type: ADD_ITEM,
    payload: item// send payload along with dispatch/return (payload can be called whatever you want though)
  };
};

export const setItemsLoading = () => { //dispatch items loading
  return {
    type: ITEMS_LOADING, //just sets it from false to true
  };
};

//could do function getItems() {
//}
//line 4 returns to the reducer the type of items
//line 4 return is going to the item reducer and checking action.type, and when it does we are just returning all the items (eg cereal etc )
// this is where we make our request to the backend
