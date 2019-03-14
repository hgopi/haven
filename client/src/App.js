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
            </main>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
