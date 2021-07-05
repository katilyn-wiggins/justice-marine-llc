import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from '../src/containers/HomePage';


function App() {
  return (
    <div>
      <Router>
      <Switch>
      <Route exact path="/" component={HomePage} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
