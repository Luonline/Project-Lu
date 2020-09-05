import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from 'components/routes/home/home';
import PageNotFound from 'components/routes/404/404';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
