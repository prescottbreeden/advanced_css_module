import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// chapter 1
import Index from '../components/chapter1/Index'
import UsefulTools from '../components/chapter1/UsefulTools'
import CourseOverview from '../components/chapter1/CourseOverview'
import LiveServer from '../components/chapter1/LiveServer'
import SassOverview from '../components/chapter1/SassOverview'
import SassInstall from '../components/chapter1/SassInstall'
import RunningSass from '../components/chapter1/RunningSass'

// assignments
import SassIntro from '../components/chapter1/assignments/sass_intro/SassIntro'

// chapter 2
import BemIntro from '../components/chapter2/BemIntro'

// assignments
import BemAssignment from '../components/chapter2/assignments/BemAssignment'


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
              <a href="/" className="nav__link">
                <div className="nav__section--item">Index</div>
              </a>
              <a href="/1" className="nav__link">
                <div className="nav__section--item">Useful Tools</div>
              </a>
              <a href="/2" className="nav__link">
                <div className="nav__section--item">Course Overview</div>
              </a>
              <a href="/3" className="nav__link">
                <div className="nav__section--item">Live Server</div>
              </a>
              <a href="/4" className="nav__link">
                <div className="nav__section--item">Sass Overview</div>
              </a>
              <a href="/5" className="nav__link">
                <div className="nav__section--item">Sass Install</div>
              </a>
              <a href="/6" className="nav__link">
                <div className="nav__section--item">Running Sass</div>
              </a>
              <a href="/7" className="nav__link">
                <div className="nav__section--item">Assignment: Sass Intro</div>
              </a>
            </div>
            <div className="nav__section"> 
              2. Sass 
              <a href="/8" className="nav__link">
                <div className="nav__section--item">What is BEM?</div>
              </a>
              <a href="/9" className="nav__link">
                <div className="nav__section--item">Assignment: BEM</div>
              </a>
              <a href="/" className="nav__link">
                <div className="nav__section--item">Nesting</div>
              </a>
              <a href="/" className="nav__link">
                <div className="nav__section--item">Assignment: Nesting</div>
              </a>
              <a href="/" className="nav__link">
                <div className="nav__section--item">Variables</div>
              </a>
              <a href="/" className="nav__link">
                <div className="nav__section--item">Assignment: Variables</div>
              </a>
              <a href="/" className="nav__link">
                <div className="nav__section--item">Mixins</div>
              </a>
              <a href="/" className="nav__link">
                <div className="nav__section--item">Assignment: Mixins</div>
              </a>
              <a href="/" className="nav__link">
                <div className="nav__section--item">Extends</div>
              </a>
              <a href="/" className="nav__link">
                <div className="nav__section--item">Assignment: Extends</div>
              </a>
              <a href="/" className="nav__link">
                <div className="nav__section--item">Functions</div>
              </a>
              <a href="/" className="nav__link">
                <div className="nav__section--item">Assignment: Functions</div>
              </a>
            </div>
            <div className="nav__section"> 
              3. Modularizing Sass 
              <a href="/" className="nav__link">
                <div className="nav__section--item">7-1 pattern</div>
              </a>
              <a href="/" className="nav__link">
                <div className="nav__section--item">Scripting</div>
              </a>
              <a href="/" className="nav__link">
                <div className="nav__section--item">Using REM</div>
              </a>
              <a href="/" className="nav__link">
                <div className="nav__section--item">Float Grid and Clear Fixes</div>
              </a>
            </div>
            <div className="nav__section"> 
              4. Advanced CSS
              <a href="/" className="nav__link">
                <div className="nav__section--item">Pseudo Selectors</div>
              </a>
              <a href="/" className="nav__link">
                <div className="nav__section--item">Pseudo Elements</div>
              </a>
              <a href="/" className="nav__link">
                <div className="nav__section--item">Flexbox</div>
              </a>
              <a href="/" className="nav__link">
                <div className="nav__section--item">CSS Grid</div>
              </a>
              <a href="/" className="nav__link">
                <div className="nav__section--item">HTML/CSS Validation</div>
              </a>
              <a href="/" className="nav__link">
                <div className="nav__section--item">Clip Path</div>
              </a>
              <a href="/" className="nav__link">
                <div className="nav__section--item">Check-box Hacking</div>
              </a>
              <a href="/" className="nav__link">
                <div className="nav__section--item">Keyframe Animations</div>
              </a>
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
              <Route path="/8" exact render={(props) => <BemIntro page={8} />} />
              <Route path="/9" exact render={(props) => <BemAssignment page={9} />} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
