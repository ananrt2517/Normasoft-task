import { User } from './pages/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Navigation from './components/Navigation';
import UserDetails from './pages/PostDetails';

function App() {

  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/post' component={User}></Route>
        <Route exact path='/post/:id' component={UserDetails}></Route>
      </Switch>
    </Router>
  );
}

export default App;
