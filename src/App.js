import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import User from './components/User'
import './App.css';
import Shop from './components/Shop';



function App() {
  return (
    <Router>
    <div>
      <header className='App-header'>
      <Link to="/">首页</Link>
      <Link to="/user">用户</Link>
      <Link to="/shop">商户</Link>

      </header>    
        <Route exact path="/" component={Home}/>
        <Route path="/user" component={User}/>
        <Route path="/shop" component={Shop}/>

    </div>
  </Router>
  );
}

export default App;
