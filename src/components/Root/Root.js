import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// custom components
import Home from '../Home';
import Players from '../Home/Players'
import Teams from '../Home/Teams'
import Export from '../Home/Export'
import GameAttributes from '../Home/GameAttributes'
import NotFound from '../NotFound';
import BaseLayout from '../Layouts/BaseLayout'


// custom styles
import './assets/styles/index.css';

// here would go some application default layout, if it exist
// in our case just simple router
const Root = () => (
  <Router>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/attributes" component={GameAttributes}/>
        <Route exact path="/teams" component={Teams}/>
        <Route exact path="/players" component={Players}/>
        <Route exact path="/export" component={Export}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </BaseLayout>
  </Router>
);

export default Root;
