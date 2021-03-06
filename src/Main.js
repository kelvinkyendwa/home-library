import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, HashRouter } from 'react-router-dom';
import { Navbar } from './Layout/Navbar';
import Home from './Content/Home';
import Movies from './Content/Movies';
import Music from './Content/Music';
import Entry1 from './Articles/Entry1';
import ArticleList from './Articles/Index';
import { Login, Signup } from './Auth/Login';
import './css/index.css';

export default class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Navbar />
          <br />
          <div className="content bxd container">
            <Container>
              <Route exact path="/" component={Home} />
              <Route path="/movies" component={Movies} />
              <Route path="/music" component={Music} />
              <Route path="/articles" component={ArticleList} />
              <Route path="/articles/1" component={Entry1} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
            </Container>
          </div>
        </div>
      </HashRouter>
    );
  }
}
