import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products'
import Services from './pages/Services'
import SignUp from './pages/SignUp'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products'  component={Products} />
          <Route path='/services'  component={Services} />
          <Route path='/sign-up'  component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;