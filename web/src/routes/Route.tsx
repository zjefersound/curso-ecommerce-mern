import React from 'react';
import { Route, Redirect, RouteProps} from 'react-router-dom';
interface RouteWrapperProps extends RouteProps {
  isPrivate?: boolean;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({
  isPrivate,
  component: Component,
  ...rest
}) => {

  // const { authenticated } = useContext(AuthContext);

  const authenticated = false;
  if (isPrivate && !authenticated) {
    return <Redirect to='/' />;
  }
  
  if (!isPrivate && authenticated) {
    return  <Redirect to='/home' />;
  }

  return <Route {...rest} component={Component}/>
}

export default RouteWrapper;