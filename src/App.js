import './App.css';
import Movies from './components/movies.component';
import Navbar from './common/navbar.component';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Login from './components/login.component';
import SignUp from './components/signup.component';
import MovieForm from './components/movie-from.component';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/movies' component={Movies} />
        <Route exact path='/' component={Movies} />
        <Route path="/signup" component={SignUp} />
        <Route exact path='/add-movie' component={MovieForm} />
      </Switch>

    </div>
  );
}
export default App;