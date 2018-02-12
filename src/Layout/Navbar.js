import React, { Component } from 'react';
import { Menu, Container, Grid } from 'semantic-ui-react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

export class Navbar extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary>
          <NavLink to="/">
            <Menu.Item
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
          </NavLink>
          <NavLink to="/stuff">
            <Menu.Item
              name="stuff"
              active={activeItem === 'stuff'}
              onClick={this.handleItemClick}
            />
          </NavLink>
          <NavLink to="/contact">
            <Menu.Item
              name="contact"
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}
            />
          </NavLink>
        </Menu>
      </div>
    );
  }
}
