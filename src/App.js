import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from '../src/containers/HomePage';
import Services from '../src/containers/Services';
// import ComingSoon from '../src/containers/ComingSoon';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/services" component={Services} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
