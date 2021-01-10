import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Airport from './Components/Airport';
import City from './Components/City';
import Courses from './Components/Courses';

function App() {
  return (
    <div >
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/airports">My Airport</Link></li>
        <li><Link to="/cities">My City</Link></li>
        <li><Link to="/courses">My Courses</Link></li>
      </ul>
      <Route path="/" exact component={Home}></Route>
      <Route path="/airports" component={Airport}></Route>
      <Route path="/cities" component={City}></Route>
      <Route path="/courses" component={Courses}></Route>
    </div>
  );
}

export default App;
