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
          <Route path="/" exact component={Index} />
          <Route path="/course-overview" exact component={CourseOverview} />
          <Route path="/useful-tools" exact component={UsefulTools} />
          <Route path="/live-server" exact component={LiveServer} />
          <Route path="/sass-overview" exact component={SassOverview} />
          <Route path="/running-sass" exact component={RunningSass} />
          <Route path="/sass-intro" exact component={SassIntro} />
        </Switch>
      </div>
    );
  }
}

export default App;
