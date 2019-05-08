import React from 'react';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Errors from './pages/Errors';
import Navbar from './components/Navbar';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms/' component={Rooms} />
        <Route exact path='/rooms/:slug' component={SingleRoom} />
        <Route component={Errors} />
      </Switch>
    </>
  );
}

export default App;
