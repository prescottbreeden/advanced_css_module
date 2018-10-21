import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// lessons
import Index from '../components/Index'
import UsefulTools from '../components/UsefulTools'
import CourseOverview from '../components/CourseOverview'
import LiveServer from '../components/LiveServer'
import SassOverview from '../components/SassOverview'
import SassInstall from '../components/SassInstall'
import RunningSass from '../components/RunningSass'


// assignments
import SassIntro from '../components/assignments/sass_intro/SassIntro'


class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="header__title">Advanced CSS</h1>
        </header>
        <div className="app__container">
          <nav className="nav">
            <div className="nav__section"> 
              1. Introduction
              <div className="nav__section--item">Index</div>
              <div className="nav__section--item">Useful Tools</div>
              <div className="nav__section--item">Course Overview</div>
              <div className="nav__section--item">Live Server</div>
              <div className="nav__section--item">Sass Overview</div>
              <div className="nav__section--item">Running Sass</div>
              <div className="nav__section--item">Assignment: Sass Intro</div>
            </div>
          </nav>
          <main className="main">
            <Switch>
              <Route path="/"  exact render={(props) => <Index page={0} />} />
              <Route path="/1" exact render={(props) => <UsefulTools page={1} />} />
              <Route path="/2" exact render={(props) => <CourseOverview page={2} />} />
              <Route path="/3" exact render={(props) => <LiveServer page={3} />} />
              <Route path="/4" exact render={(props) => <SassOverview page={4} />} />
              <Route path="/5" exact render={(props) => <SassInstall page={5} />} />
              <Route path="/6" exact render={(props) => <RunningSass page={6} />} />
              <Route path="/7" exact render={(props) => <SassIntro page={7} />} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
