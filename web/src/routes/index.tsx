import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import Route from './Route';

import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import Home from '../pages/Home';
import Menu from '../components/Menu';
import Dashboard from '../pages/Dashboard';


const Routes = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path='/signup' exact component={Signup}/>
        <Route path='/signin' exact component={Signin}/>
        <Route path='/' awaysPublic exact component={Home}/>
        <Route path='/dashboard' isPrivate exact component={Dashboard}/>
      </Switch>
    </Router>
  );
}

export default Routes;