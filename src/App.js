import './assets/css/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import ContactUs from './components/ContactUs';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/ContactUs' component={ContactUs} />
          <Route exact path='/About' component={About} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
