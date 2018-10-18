import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Index from '../components/Index'
import CourseOverview from '../components/CourseOverview'
import UsefulTools from '../components/UsefulTools'
import SassOverview from '../components/SassOverview'
import RunningSass from '../components/RunningSass'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Advanced CSS</h1>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/1" exact component={CourseOverview} />
          <Route path="/2" exact component={UsefulTools} />
          <Route path="/3" exact component={SassOverview} />
          <Route path="/4" exact component={RunningSass} />
        </Switch>
      </div>
    );
  }
}

export default App;
