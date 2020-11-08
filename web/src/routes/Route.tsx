import React, { useContext } from 'react';
import { Route, Redirect, RouteProps} from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
interface RouteWrapperProps extends RouteProps {
  isPrivate?: boolean;
  awaysPublic?: boolean;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({
  isPrivate,
  awaysPublic,
  component: Component,
  ...rest
}) => {

  const { authenticated } = useContext(AuthContext);

  if (isPrivate && !authenticated) {
    return <Redirect to='/signin' />;
  }
  
  if (!isPrivate && authenticated && !awaysPublic) {
    return  <Redirect to='/' />;
  }

  return <Route {...rest} component={Component}/>
}

export default RouteWrapper;