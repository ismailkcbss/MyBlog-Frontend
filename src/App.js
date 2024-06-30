import './assets/css/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/home';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
