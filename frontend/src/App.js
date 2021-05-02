import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './components/login';
import Home from './components/home';
import Signup from './components/signup';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>  
        
    )
  };
}
export default App;

