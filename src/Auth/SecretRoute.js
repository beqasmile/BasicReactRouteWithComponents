import { Route, Link, Redirect } from 'react-router-dom';
import {React,Component} from 'react'

const SecretRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      AuthService.isAuthenticatedEmployee === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  );


 
export default  SecretRoute;

