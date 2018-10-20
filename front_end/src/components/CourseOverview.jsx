import React from 'react'

const CourseOverview = (props) => {
  const page = props.page
  const nextPage = page+1
  const prevPage = page-1

  return (
    <div className="module">
      <div className="module__container">
        <h2 className="module__title">Course Overview</h2> 
        <h3 className="module__objectives">Course Objectives:</h3>
        <p className="module__text">
          By the end of this course, you will have a solid understanding of: 
        </p>
        <h4 className="module__sub-title">
          Syntactically Awesome Style Sheets (Sass):
        </h4>
        <ul className="module__list">
          <li className="module__list--item">
            What is Sass
          </li> 
          <li className="module__list--item">
            How to modularize and make a component-based CSS structure
          </li> 
          <li className="module__list--item">
            How to use utility classes to <em>'DRY'</em> up our CSS
          </li> 
          <li className="module__list--item">
            How Sass uses folder structure, partials, imports, and caching
          </li> 
          <li className="module__list--item">
            How to create variables, mixins, and functions in Sass
          </li> 
          <li className="module__list--item">
            How to use Sass decorators
          </li> 
          <li className="module__list--item">
            What are Sass data types and how to interpolate data in CSS
          </li> 
          <li className="module__list--item">
            How to use the Sass interactive shell
          </li> 
          <li className="module__list--item">
            How Sass nesting and parent selectors work
          </li> 
          <li className="module__list--item">
            How to use Sass inheritance with the Extend decorator
          </li> 
          <li className="module__list--item">
            How to create reusable media-query functions
          </li> 
          <li className="module__list--item">
            How to use scripting in your dev workflow
          </li> 
        </ul>
        <h4 className="module__sub-title">Block Element Modifiers (BEM):</h4>
        <ul className="module__list">
          <li className="module__list--item">
            What is BEM and why is it important
          </li> 
          <li className="module__list--item">
            How to define Blocks, Elements and Modifiers
          </li> 
          <li className="module__list--item">
            How BEM and Sass overcome specificity conflicts
          </li> 

        </ul>
        <h4 className="module__sub-title">CSS, CSS3, and Animations:</h4>
        <ul className="module__list">
          <li className="module__list--item">
            How global resets can be an indicator of poorly designed DOM and CSS
          </li> 
          <li className="module__list--item">
            How to convert pixels to rem-units quickly and easily
          </li> 
          <li className="module__list--item">
            How the use of 'rem' instead of 'px' speeeds up responsive layout 
            workload
          </li> 
          <li className="module__list--item">
            What is the difference between a <em>pseudo-selector</em> and a 
            <em>pseudo-element</em>
          </li> 
          <li className="module__list--item">
            Deep dive of all major pseudo-selectors
          </li> 
          <li className="module__list--item">
            How to create pseudo-elements
          </li> 
          <li className="module__list--item">
            What are some useful CSS debugging tricks
          </li> 
          <li className="module__list--item">
            How to create your own float-grid
          </li> 
          <li className="module__list--item">
            How to use Flexbox
          </li> 
          <li className="module__list--item">
            How to use CSS Grid
          </li> 
          <li className="module__list--item">
            How to style inputs and use HTML5-regex with CSS-validation
          </li> 
          <li className="module__list--item">
            How to use Clip Path to create skewed angles on elements
          </li> 
          <li className="module__list--item">
            What is a "checkbox-hack" and how can we use it to provide 
            responsive user-experiences
          </li> 
          <li className="module__list--item">
            How to use transitions to create basic animations
          </li> 
          <li className="module__list--item">
            How to use CSS keyframes to make more dynamic animations
          </li> 
          <li className="module__list--item">
            How to use animation <em>responsibly</em>
          </li> 
        </ul>
        <h3 className="module__objectives">
          Utilizing the Learning Objectives:
        </h3>
        <p className="module__text">
          Each lesson beings with a brief list of learning objectives. For 
          those who are less familiar with their role in learning, these are 
          <strong><em>not</em></strong> the 'Cliff Notes' or TLDRs for the 
          lesson. Learning objectives are meant as a way to prepare you for 
          what you are about to read so that your mind has a better frame of 
          reference regarding the purpose of the content. It is especially
          important to briefly re-read the learning objectives before moving 
          onto the next lesson to help ensure that you feel comfortable with 
          the information provided.
        </p>
      </div>    
      <div className="module__buttons">
        <a 
          href={prevPage}
          className="btn">
          Prev
        </a>
        <a 
          href={nextPage}
          className="btn">
          Next
        </a>
      </div>
    </div>
  )
}

export default CourseOverview
