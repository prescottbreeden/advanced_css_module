import React from 'react'

const CourseOverview = (props) => {
  return (
    <div className="container">
      <div className="overview">
        <h2 className="overview__title">Overview</h2> 
        <h3 className="overview__objectives">Objectives:</h3>
        <p className="overview__description">
          By the end of this course, you will have a solid understanding of: 
        </p>
        <h4>Syntactically Awesome Style Sheets (SASS):</h4>
        <ul className="overview__list">
          <li className="overview__list--item">What is SASS</li> 
          <li className="overview__list--item">How to modularize and make a component-based CSS structure</li> 
          <li className="overview__list--item">How to use utility classes to DRY up our CSS</li> 
          <li className="overview__list--item">How SASS uses folder structure, partials, imports, and caching</li> 
          <li className="overview__list--item">How to create variables, mixins, and functions in SASS</li> 
          <li className="overview__list--item">How to use SASS decorators</li> 
          <li className="overview__list--item">What are SASS data types and interpolation</li> 
          <li className="overview__list--item">How to use the SASS interactive shell</li> 
          <li className="overview__list--item">How SASS nesting and parent selectors work</li> 
          <li className="overview__list--item">How to use SASS inheritance with the Extend decorator</li> 
          <li className="overview__list--item">How to create reusable media-query functions</li> 
          <li className="overview__list--item">How to use scripting in your dev workflow</li> 
        </ul>
        <h4>Block Element Modifiers (BEM):</h4>
        <ul className="overview__list">
          <li className="overview__list--item">What is BEM and why is it important</li> 
          <li className="overview__list--item">How to define Blocks, Elements and Modifiers</li> 
          <li className="overview__list--item">How BEM and SASS overcome specificity conflicts</li> 

        </ul>
        <h4>CSS, CSS3, and Animations:</h4>
        <ul className="overview__list">
          <li className="overview__list--item">Why global resets are a sign of poorly designed CSS</li> 
          <li className="overview__list--item">How to convert pixels to rem units quickly and easily</li> 
          <li className="overview__list--item">How the use of 'rem' instead of 'px' speeeds up responsive layout workload</li> 
          <li className="overview__list--item">What the difference between a pseudo-selector and a pseudo-element is</li> 
          <li className="overview__list--item">Deep dive of all major pseudo-selectors</li> 
          <li className="overview__list--item">How to create pseudo-elements</li> 
          <li className="overview__list--item">Useful CSS debugging tricks</li> 
          <li className="overview__list--item">How to create your own float-grid</li> 
          <li className="overview__list--item">How to use Flexbox</li> 
          <li className="overview__list--item">How to use CSS Grid</li> 
          <li className="overview__list--item">How to style inputs and use HTML5-regex with CSS-validation</li> 
          <li className="overview__list--item">How to use Clip Path to create skewed angles on elements</li> 
          <li className="overview__list--item">What is a "checkbox-hack" and how can we use it to provide responsive user-experiences</li> 
          <li className="overview__list--item">How to use transitions to create basic animations</li> 
          <li className="overview__list--item">How to use CSS keyframes to make more dynamic animations</li> 
          <li className="overview__list--item">How to use animation <em>responsibly</em></li> 
        </ul>
      </div>    
    </div>
  )
}

export default CourseOverview