import React, { Component } from 'react';
import './App.css';
import { Header, Announcement } from './common';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './pages/Main/Main';
import Footer from './common/Footer';

class App extends Component {

  componentDidMount() {
    this.testApi();
  }

  testApi() {
    fetch('/test')
      .then(res => res.json())
      .then(result => console.log(result));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Announcement />
          <Header />
        </header>
        <main>
          <Router>
            <Route path="/" exact component={Main} />
          </Router>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
