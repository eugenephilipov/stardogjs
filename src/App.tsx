import React, { Component } from 'react';

import './inject-tap-event-plugin';
import './App.css';
//import { Provider } from 'react-redux';
//import { createStore } from 'redux';
//import { getReducer } from 'sparql-connect';
import SparkJSconnect from './components/sparkJSconnect/SparkJSconnect';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './components/Home';
import { Grid, Col, Row } from 'react-bootstrap';
//const store = createStore(getReducer());
const Header = () => (
  <Row className="show-grid" >
    <Col xs={12} md={12}>

      <nav>
        <div id="navcontainer">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/stardogjs'>StardogJs</Link></li>
          </ul>
        </div>
      </nav>
    </Col>
  </Row>
)
const Main = () => {
  return (
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/stardogjs' component={SparkJSconnect} />
        </Switch>

  );
}
class App extends Component<any, any> {
  render() {
    return (
      <Grid>
        <Header />
        <Main />
      </Grid>
    );
  }

}

export default App;
