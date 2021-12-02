import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Main from './components/main/Main'
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/shop" component={Footer} />
            <Route exact path="/atelier" component={Footer} />
            <Route exact path="/order" component={Footer} />
          </Switch>
        </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
