import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import CourseOverview from '../components/CourseOverview'
import UsefulTools from '../components/UsefulTools'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Advanced CSS</h1>
        <Switch>
          <Route path="/" exact component={CourseOverview} />
          <Route path="/1" exact component={UsefulTools} />
        </Switch>
      </div>
    );
  }
}

export default App;
