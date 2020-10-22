import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import CreateEmployeeComponent from './components/CreateEmployeeComponent'
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent'

function App() {
  return (

    <div className="App">
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ListEmployeeComponent} />
            <Route path="/employees" component={ListEmployeeComponent} />
            <Route path="/add-employee" component={CreateEmployeeComponent} />
            <Route path="/update-employee/:id" component={UpdateEmployeeComponent} />

          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
