import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Private from './components/private';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Auth from './components/auth';
import NavBar from './components/navbar';
import Authenticate from './components/authenticate';


require('dotenv').config()

const auth = new Auth();

function App() {
  return (
    <div className="App">
    <NavBar auth={auth} />
     <Private path='/dashboard' component={Dashboard} auth={auth} />
     <Route path='/authenticate'   render={props => {
         
          return <Authenticate {...props} auth={auth}/>
        }}  />
 
  </div>
  );
}

export default App;
