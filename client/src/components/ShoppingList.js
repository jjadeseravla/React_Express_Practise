import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
  state = {
    items: [
      { id: uuid(), name: 'Eggs'},
      { id: uuid(), name: 'Veg'},
      { id: uuid(), name: 'Fruit'},
      { id: uuid(), name: 'Cereal'}
    ]
  }

  render() {
  const { items } = this.state;// instead of using: this.state.items, use variable 'items', which is pulling out  from this.state.items
  return(
    <Container>
      <Button
        color="dark"
        style={{marginBottom: '2rem'}}
        onCLick={() => { const name = prompt('Enter Item');
        if(name) {
          this.setState(state => ({
            items: [...state.items, { id: uuid(), name: name }]
          }));
        }
      }}
      >Add Item</Button>
    </Container>
  );
 }
}

export default ShoppingList;
