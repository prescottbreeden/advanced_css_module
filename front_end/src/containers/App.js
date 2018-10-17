import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import CourseOverview from '../components/CourseOverview'
import UsefulTools from '../components/UsefulTools'
import SASS_Overview from '../components/SASS_Overview'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Advanced CSS</h1>
        <Switch>
          <Route path="/" exact component={CourseOverview} />
          <Route path="/1" exact component={UsefulTools} />
          <Route path="/2" exact component={SASS_Overview} />
        </Switch>
      </div>
    );
  }
}

export default App;
