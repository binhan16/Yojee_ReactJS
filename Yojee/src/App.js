import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/modules/Navbar';
import Home from './components/pages/HomePage/Home'
import SignUp from './components/pages/SignUp/SignUp'
import Footer from './components/pages/Footer/Footer';
import Solutions from './components/pages/Solutions/Solutions';

import './assets/scss/style.scss'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/sign-up' exact component={SignUp} />
        <Route path='/solutions' exact component={Solutions} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;


/**
 *** REVIEW NOTE
 * 
 * 1. Folder's name
 *    components/modules      => modules/
 *    components/pages/Footer => components/Footer
 *    pages/Homepage          => ok
 * 
 * 2. CSS => SCSS 
 *    bootstrap.min.css : replace (check /assets/scss/style.scss)
 *    slick.min.css : ok, because not too much css need to restyle
 *    slick-theme.min.css : optional, sometime don't use this file
 * 
 * 3. Check comment on 
 *    - index.js
 *    - assets/scss
 */