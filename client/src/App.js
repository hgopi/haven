import React, { Component } from 'react';
import './App.css';
import { Header, Announcement } from './common';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './pages/Main/Main';
import Footer from './common/Footer';
import Store from './pages/Store/Store';
import Sale from './pages/Sale/Sale';
import Dining from './pages/Dining/Dining';
import Living from './pages/Living/Living';
import Bedroom from './pages/Bedroom/Bedroom';
import Details from './pages/Details/Details';
import Cart from './pages/Cart/Cart';
import reducer from './redux/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import Checkout from './pages/Checkout/Checkout';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Faq from './pages/FAQ/Faq';
import Legal from './pages/Legal/Legal';
import Page404 from './pages/404/404';

const store = createStore(reducer);

class App extends Component {

  componentDidMount() {
    this.testApi();
  }

  testApi() {
    fetch('/test')
      .then(res => res.ok ? res.json() : Error())
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
              <Announcement />
              <Header />
              <Cart />
            </header>
            <main>
              <Route path="/" exact component={Main} />
              <Route path="/store" exact component={Store} />
              <Route path="/sale" exact component={Sale} />
              <Route path="/dining" exact component={Dining} />
              <Route path="/living" exact component={Living} />
              <Route path="/bedroom" exact component={Bedroom} />
              <Route path="/product/:name" exact component={Details} />
              <Route path="/checkout" exact component={Checkout} />
              <Route path="/about" exact component={About} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/faq" exact component={Faq} />
              <Route path="/legal" exact component={Legal} />
              <Route component={Page404} />
            </main>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
