import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types'


const initialState = {
  items: [
    { id: uuid(), name: 'Eggs'},
    { id: uuid(), name: 'Veg'},
    { id: uuid(), name: 'Fruit'},
    { id: uuid(), name: 'Cereal'}
  ]
}


//ultimately it would be come from our back end, but for now
//right now we are moving the static data from the component to the reducer

// where actual state goes: in the reducer
// so if fetch data from our server for getItems, we would dispatch to the reducer and we would send the response we get from server to the reducer
//and we would do what we wanted with it, which is to add it to our component.
