import React from 'react'
import assignment from './cssAssignment_1.png'
// const assingmentImage = require('./cssAssignment_1.png')

const SassIntro = (props) => {
  const page = props.page
  const prevPage = page-1
  const nextPage = page+1

  return (
    <div className="module">
      <div className="module__container">
        <h2 className="module__title">CSS Refresher and Sass Intro</h2> 
        <h3 className="module__objectives">
          Learning Objectives:
        </h3>
        <ul className="module__list">
          <li className="module__list--item">
            To gain comfort with using basic sass functions and live-server
          </li> 
          <li className="module__list--item">
            To refamiliarize yourself with basic css styling
          </li> 
        </ul>
        <h3 className="module__objectives">
          Instructions:
        </h3>
        <ul className="module__list">
          <li className="module__list--item u-list-circle">
            Using the html provided in the previous lesson, reproduce the
            image below
          </li> 
          <li className="module__list--item u-list-circle">
            <b>Challenge:</b> Try to use no more than 30 lines of rules
          </li> 
          <li className="module__list--item u-list-circle">
            Suggested time limit: 20-30min
          </li> 
        </ul>
        <p className="module__text">
        </p>
        <div className="module__assignment">
        <img 
          alt="assignment"
          src={assignment}
          className="module__img" />
        </div>
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
export default SassIntro
