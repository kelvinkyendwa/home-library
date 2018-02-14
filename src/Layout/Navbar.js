import React, { Component } from 'react';
import { Menu, Segment, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export class Navbar extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Segment inverted>
          <Menu inverted pointing secondary position="right" size="large">
            <NavLink to="/">
              <Menu.Item
                name="home"
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
              />
            </NavLink>
            <NavLink to="/movies">
              <Menu.Item
                name="movies"
                active={activeItem === 'movies'}
                onClick={this.handleItemClick}
              />
            </NavLink>
            <NavLink to="/music">
              <Menu.Item
                name="music"
                active={activeItem === 'music'}
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
