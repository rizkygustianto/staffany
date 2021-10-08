import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Staff from './pages/Staff';
import Home from './pages/Home';
import AllShifts from './pages/AllShifts';
import Navigation from './component/Nav';
import EditShift from './pages/EditShift';
import NewShift from './pages/NewShift';
import StaffShifts from './pages/StaffShifts';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path='/staff/:id'>
          <StaffShifts />
        </Route>
        <Route path='/staff'>
          <Staff />
        </Route>
        <Route path='/shift/:id'>
          <EditShift />
        </Route>
        <Route path='/shifts'>
          <AllShifts />
        </Route>
        <Route path='/new-shift'>
          <NewShift />
        </Route>
        <Route path='/' exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;