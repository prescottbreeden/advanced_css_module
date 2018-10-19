import React from 'react'
// const assingmentImage = require('./cssAssignment_1.png')

const SassIntro = (props) => {
  let fontColor = '<font color="#839496"'
  let endFont = '</font>'
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
        <img 
          src="{'/cssAssignment_1.png'}"
          className="img" />
        
      </div>
    </div>
  )
}
export default SassIntro