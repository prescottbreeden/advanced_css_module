import React from 'react'
import assignment from './cssAssignment_1.png'
// const assingmentImage = require('./cssAssignment_1.png')

const SassIntro = (props) => {
  const page = props.page
  const prevPage = props.page-1
  const nextPage = props.page+1

  return (
    <div className="module">
      <div className="module__container">
        <h2 className="module__title">CSS Refresher and Sass Intro</h2> 
        <h3 className="module__objectives">
          Learning Objectives:
        </h3>
        <ul className="module__list">
          <li className="module__list--item">
            To gain comfort with dart-sass and live-server
          </li> 
          <li className="module__list--item">
            To refamiliarize yourself with important css concepts
          </li> 
          <li className="module__list--item">
            <b>Challenge:</b> Try to use no more than 30 lines of rules
          </li> 
          <li className="module__list--item">
            Suggested time limit: 20-30min
          </li> 
        </ul>
        <h3 className="module__objectives">
          First Sass Project:
        </h3>
        <ul className="module__list">
          <li className="module__list--item">
            Using the html provided in the previous lesson, reproduce the
            following image:
          </li> 
        </ul>
        <div className="module__assignment">
        <img 
          alt="assignment"
          src={assignment}
          className="img" />
        </div>
      </div>
      <div className="module__buttons">
        <a 
          href={prevPage}
          className="module__buttons btn">
          Prev
        </a>
        <a 
          href={nextPage}
          className="module__buttons btn">
          Next
        </a>
      </div>
    </div>
  )
}
export default SassIntro
