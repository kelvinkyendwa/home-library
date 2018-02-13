import React, { Component } from 'react';
import { Menu, Container, Grid, Header } from 'semantic-ui-react';
import { Navbar } from './Layout/Navbar';
import { Sidebar } from './Layout/Sidebar';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Content/Home';
import Stuff from './Content/Stuff';
import Contact from './Content/Contact';
import Biography from './Subjects/Biography';
import './css/index.css';

export default class Main extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <HashRouter>
        <div>
          <Navbar />
          <br />
          <Grid divided="vertically">
            <Grid.Row stretched columns="equal">
              <Grid.Column width={5} padded>
                <Sidebar />
              </Grid.Column>
              <Grid.Column width={10} color="black">
                <div className="content bxd container">
                  <Container>
                    <Route exact path="/" component={Home} />
                    <Route path="/stuff" component={Stuff} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/biography" component={Biography} />
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
