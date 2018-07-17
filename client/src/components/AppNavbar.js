import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNavbar extends Component {
    state = {
      isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">ShoppingList</NavbarBrand>
            <NavbarToggler onCLick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar />
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/jjadeseravla">Github</NavLink>
                </NavItem>
              </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;

// this.toggle = this.toggle.bind(this); cos in a class/component you have default methods like render, componentDidMount etc
// in those functions/methods, 'this' is available and it pertains to the class/component.
//when you have a custom method like toggle, 'this' isnt automatically included, so you have to bind 'this' to that function
//you can do this in the constructor.  but if you dont want to do this, you can just use an arrow function (like line 18)
// since we took out binding cos we useing arrow function, we dont need a constructor, and we can create state without one.

//    super(); //super calls parent's class' constructor
