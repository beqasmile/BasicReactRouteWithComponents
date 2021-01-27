import { Route, Link, Redirect } from 'react-router-dom';
import {React,Component} from 'react'
import {AuthService} from '.\SecretRoute'

class Login extends React.Component {
    state = {
      redirectToPreviousRoute: false
    };
  
    login = () => {
      AuthService.authenticate(() => {
        this.setState({ redirectToPreviousRoute: true });
      });
    };
  
    render() {
      const { from } = this.props.location.state || { from: { pathname: "/" } };
      const { redirectToPreviousRoute } = this.state;
  
       if (redirectToPreviousRoute) {
       return <Redirect to={from} />;
      }
  
      return (
        <div>
          <p>You must log in to view the page at {from.pathname}</p>
          <button onClick={this.login}>Log in</button>
        </div>
      );
    }
  }
  export default  Login;

  