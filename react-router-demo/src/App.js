import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Manatee from './components/Manatee';
import Narwhal from './components/Narwhal';
import Whale from './components/Whale';

function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <BrowserRouter>
      <nav>
          <ul>
            <li><Link to="/Manatee">Manatee</Link></li>
            <li><Link to="/Narwhal">Narwhal</Link></li>
            <li><Link to="/Whale">Whale</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Manatee">
            <Manatee />
          </Route>
          <Route path="/Narwhal">
            <Narwhal />
          </Route>
          <Route path="/Whale">
            <Whale />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
