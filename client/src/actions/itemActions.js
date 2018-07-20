import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getItems = () => dispatch => { //use dispatch to send the type as well as the data we get from the request
  dispatch(setItemsLoading());//want to call set irems loading by calling dispatch
  axios  //make our request to get('/api/items')
    .get('/api/items'); //added proxy so dont need to put httpslocalhost5000 etc
    .then(res => dispatch({ //returns a promise, which gives us a response(result), which we will return dispatch
      type:GET_ITEMS,
      payload: res.data // this is data that comes in from the backend when we hit 'api/items' end point
      // grabs them from the DB and returns them in JSON format: look at file routes/api/items.js
    }))
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
