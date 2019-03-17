import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard/Dashboard';



class App extends Component {

    render() {
        return (
            <Fragment>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Dashboard} />
            </Fragment>
        );
    }
}

export default App;
