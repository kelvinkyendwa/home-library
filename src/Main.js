import React, { Component } from "react";
import { Menu , Container , Grid } from 'semantic-ui-react';
import { Navbar } from "./Layout/Navbar";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Content/Home";
import Stuff from "./Content/Stuff";
import Contact from "./Content/Contact";
import Biography from "./Subjects/Biography";
import './css/index.css';

 
export default class Main extends Component {
   state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <HashRouter>
        <div>
          <h1>Home Library</h1>
          <Menu pointing secondary>
           <NavLink to="/">
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
           </NavLink>
           <NavLink to="/stuff">
              <Menu.Item name='stuff' active={activeItem === 'stuff'} onClick={this.handleItemClick} />
           </NavLink>
            <NavLink to="/contact">
              <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick} />
           </NavLink>

            
          </Menu>


               <Grid divided='vertically'>
                    <Grid.Row columns='equal' divided inverted padded>
                          <Grid.Column width={3}>
                               <Menu pointing vertical >
                               <NavLink to="/biography">
                                    <Menu.Item name='biography' active={activeItem === 'biography'} onClick={this.handleItemClick} />
                               </NavLink>
                               <NavLink to="/chemistry">
                                  <Menu.Item name='chemistry' active={activeItem === 'chemistry'} onClick={this.handleItemClick} />
                               </NavLink>
                                <NavLink to="/physics">
                                  <Menu.Item name='physics' active={activeItem === 'physics'} onClick={this.handleItemClick} />
                               </NavLink>

                                
                              </Menu>

                         </Grid.Column>
                        <Grid.Column width={13}  color='black'>
                            <div className="content bxd">
                                <Container>
                                   <Route exact path="/" component={Home}/>
                                   <Route path="/stuff" component={Stuff}/>
                                   <Route path="/contact" component={Contact}/>
                                  <Route path="/biography" component={Biography}/>
                                </Container>
                            </div>
                        </Grid.Column>
                   </Grid.Row>
              </Grid>
        </div>
      </HashRouter>
    );
  }
}
