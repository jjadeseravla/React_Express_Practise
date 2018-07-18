import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id);// call deleteItem action which can be accessed by this.props.deleteItem and pass in id
  }

  render() {
    //this.props.item.items //'item' represents the entire state object and 'items' is the array inside the state
    //instead of using line 16 just use line 19
    //const { items } = this.state;// instead of using: this.state.items, use variable 'items', which is pulling out  from this.state.items
    const { items } = this.props.item; //this.props.item is now where our state lives in redux, and we're pulling out items from it
    return(
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={this.onDeleteClick.bind(this, id)} //needs to take in parameter of id
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

export default connect(mapStateToProps, { getItems, deleteItem }) (ShoppingList);

// last line allows all to be accessible to us by this.props.deleteItem or this.props.getItems
//need to do export default like that when using connect, which allows you to get state from redux into a react component
//mapStateToProps allows us to take item state and map/turn this into a component property so we can use it in shoppingList.
//so we can use it as this.props.items
