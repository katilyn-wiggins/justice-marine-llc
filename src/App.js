import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from '../src/containers/HomePage';
import Services from '../src/containers/Services';
// import Carousel from '../src/components/Carousel';
import Gallery from '../src/containers/Gallery';
import Contact from '../src/containers/Contact';
// import ComingSoon from '../src/containers/ComingSoon';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
