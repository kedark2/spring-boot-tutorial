import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import CreateEmployeeComponent from './components/CreateEmployeeComponent'
import ViewEmployeeComponent from './components/ViewEmployeeComponent'
import Navbar from './components/NavbarComponent'
import ListServicesComponent from './components/ListServicesComponent'
function App() {
  return (

    <div className="App">
      <Router>
        <HeaderComponent />
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={ListEmployeeComponent} />
            <Route path="/employees" component={ListEmployeeComponent} />
            <Route path="/add-employee/:id" component={CreateEmployeeComponent} />
            <Route path="/view-employee/:id" component={ViewEmployeeComponent} />
            <Route path="/services" component={ListServicesComponent} />


          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;


