import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Airport from './Components/Airport';
import City from './Components/City';
import Courses from './Components/Courses';
import Employee from './Components/Employee';
import EmployeePrivate from './Components/EmployeePrivate';
import SecretRoute from './Auth/SecretRoute'
import Login from './Auth/Login'

function App() {
  return (
    <div >
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/airports">My Airport</Link></li>
        <li><Link to="/cities">My City</Link></li>
        <li><Link to="/courses">My Courses</Link></li>
        <li><Link to="/employee">My Public  Employees</Link></li>
        <li><Link to="/private_employee">My Private  Employees</Link></li>
      </ul>
      <Route path="/" exact component={Home}></Route>
      <Route path="/airports" component={Airport}></Route>
      <Route path="/cities" component={City}></Route>
      <Route path="/courses" component={Courses}></Route>
      <Route path="/employee" component={Employee}></Route>
      <Route path="/login" component={Login}></Route>
      <SecretRoute path="/private_employee" component={EmployeePrivate}></SecretRoute>
    </div>
  );
}



export default App;
