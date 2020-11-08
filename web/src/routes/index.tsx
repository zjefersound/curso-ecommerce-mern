import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import Route from './Route';

import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import Home from '../pages/Home';


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/signup' exact component={Signup}/>
        <Route path='/signin' exact component={Signin}/>
        <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
  );
}

export default Routes;