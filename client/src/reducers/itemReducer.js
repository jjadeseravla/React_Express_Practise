import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';


const initialState = {
  items: [
    { id: uuid(), name: 'Eggs'},
    { id: uuid(), name: 'Veg'},
    { id: uuid(), name: 'Fruit'},
    { id: uuid(), name: 'Cereal'}
  ]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload) //doing same thing as in the component but in the reducer (line 44)
        //action.payload is whatever id is passed in
      }
    default:
     return state;
  }
}

//because when we fetch from the API we will change it but for now it
//funciton 14 just returns the items object on line 6


//ultimately it would be come from our back end, but for now
//right now we are moving the static data from the component to the reducer

// where actual state goes: in the reducer
// so if fetch data from our server for getItems, we would dispatch to the reducer and we would send the response we get from server to the reducer
//and we would do what we wanted with it, which is to add it to our component.

//goal is to get ShoppingList component displaying the items on this file instead of what is embedded in the component.
