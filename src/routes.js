import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Home from './Appdisplay/home';
import Quote from './Appdisplay/quote';
import Navbar from './Appdisplay/navbar';
import Error from './Appdisplay/error';

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={App} />
        <Route exact path="/quote" component={Quote} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
