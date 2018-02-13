import React, { Component } from 'react';
import { Menu, Container, Grid, Dropdown } from 'semantic-ui-react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

export class Sidebar extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing vertical size="massive">
        <NavLink to="/biography">
          <Menu.Item
            name="biography"
            active={activeItem === 'biography'}
            onClick={this.handleItemClick}
          />
        </NavLink>
        <NavLink to="/chemistry">
          <Menu.Item
            name="chemistry"
            active={activeItem === 'chemistry'}
            onClick={this.handleItemClick}
          />
        </NavLink>
        <NavLink to="/physics">
          <Menu.Item
            name="physics"
            active={activeItem === 'physics'}
            onClick={this.handleItemClick}
          />
        </NavLink>
      </Menu>
    );
  }
}
