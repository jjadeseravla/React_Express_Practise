import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    this.props.item.items //'item' represents the entire state object and 'items' is the array inside the state
    const { items } = this.state;// instead of using: this.state.items, use variable 'items', which is pulling out  from this.state.items
    return(
      <Container>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={() => { const name = prompt('Enter Item');
          if(name) {
            this.setState(state => ({
              items: [...state.items, { id: uuid(), name: name }]
            }));
          }
        }}
        >Add Item</Button>

        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => {
                    this.setState(state => ({
                      items: state.items.filter(item => item.id !== id)
                    }));
                  }}
                  >&times;</Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
  );
 }
}

ShoppingList.PropTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired //represents our state which is an object
}

const mapStateToProps = (state) => ({
  item: state.item //using item cos thats what we called it in our root reducer
});

export default connect(mapStateToProps, { getItems }) (ShoppingList);

//need to do export default like that when using connect, which allows you to get state from redux into a react component
//mapStateToProps allows us to take item state and map/turn this into a component property so we can use it in shoppingList.
//so we can use it as this.props.items
