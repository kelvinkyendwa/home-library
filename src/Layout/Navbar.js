import React, { Component } from 'react';
import {
  Menu,
  Container,
  Grid,
  Segment,
  Button,
  Dropdown
} from 'semantic-ui-react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

export class Navbar extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Segment inverted>
          <Menu inverted pointing secondary position="right" size="massive">
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

            <Menu.Menu position="right">
              <Menu.Item>
                <Button inverted color="teal">
                  Login
                </Button>
              </Menu.Item>
              <Menu.Item>
                <Button inverted color="blue">
                  Sign Up
                </Button>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Segment>
      </div>
    );
  }
}
