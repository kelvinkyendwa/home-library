import React, { Component } from 'react';
import { Menu, Container, Grid } from 'semantic-ui-react';
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
          <h1>Home Library</h1>
          <Navbar />
          <br />
          <Grid divided="vertically">
            <Grid.Row columns="equal" divided inverted padded>
              <Grid.Column width={3}>
                <Sidebar />
              </Grid.Column>
              <Grid.Column width={13} color="black">
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
