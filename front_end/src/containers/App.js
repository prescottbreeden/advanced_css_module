import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// lessons
import Index from '../components/Index'
import CourseOverview from '../components/CourseOverview'
import UsefulTools from '../components/UsefulTools'
import LiveServer from '../components/LiveServer'
import SassOverview from '../components/SassOverview'
import RunningSass from '../components/RunningSass'


// assignments
import SassIntro from '../components/assignments/sass_intro/SassIntro'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Advanced CSS</h1>
        <Switch>
          <Route path="/0"  exact render={(props) => <Index page={0} />} />
          <Route path="/1" exact render={(props) => <UsefulTools page={1} />} />
          <Route path="/2" exact render={(props) => <CourseOverview page={2} />} />
          <Route path="/3" exact render={(props) => <LiveServer page={3} />} />
          <Route path="/4" exact render={(props) => <SassOverview page={4} />} />
          <Route path="/5" exact render={(props) => <RunningSass page={5} />} />
          <Route path="/6" exact render={(props) => <SassIntro page={6} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
