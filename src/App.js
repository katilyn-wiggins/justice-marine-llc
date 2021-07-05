import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import HomePage from '../src/containers/HomePage';
import ComingSoon from '../src/containers/ComingSoon'; 


function App() {
  return (
    <div>
      <Router>
      <Switch>
      <Route exact path="/" 
      // component={HomePage} 
      component={ComingSoon}
      />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
