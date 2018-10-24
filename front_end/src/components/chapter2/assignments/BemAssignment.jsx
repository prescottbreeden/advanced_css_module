import React from 'react'
// import video from './running_sass.mp4'
import assignment from './BemAssignment.png'

const BemAssignment = (props) => {
  const page = props.page
  const prevPage = page-1
  const nextPage = page+1

  return (
    <div className="module">
      <div className="module__container">
        <h2 className="module__title">BEM Assignment</h2> 
        <h3 className="module__objectives">
          Learning Objectives:
        </h3>
        <ul className="module__list">
          <li className="module__list--item">
            Practice building BEM-style components
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
            Using the html provided below, reproduce the following image:
          </li> 
          <li className="module__list--item u-list-circle">
            <b>Challenge:</b> Try to use no more than 30 lines of rules
          </li> 
          <li className="module__list--item u-list-circle">
            Suggested time limit: 20-30min
          </li> 
        </ul>
        <div className="module__assignment">
        <img 
          alt="assignment"
          src={assignment}
          className="module__img" />
        </div>
        <div className="module__markup"><pre>{`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>BEM Architecture</title>
        <link rel="stylesheet" href="/public/css/styles.css">
      </head>
      <body>
        <h2>Voting Poll</h2>
        <div class="poll">
          <p class="poll__description">Do you think CSS rocks?!</p>
            <button class="btn btn--green">Yes</button>
            <button class="btn">Not sure</button>
            <button class="btn btn--red">Ask me later</button>
        </div>
        <div class="poll">
          <p class="poll__description">Are you a front-end ninja?</p>
            <button class="btn btn--green">Yes</button>
            <button class="btn">Not sure</button>
            <button class="btn btn--red">Ask me later</button>
        </div>
        <div class="poll">
          <p class="poll__description">Are you feeling <em>Sassy</em> yet?</p>
            <button class="btn btn--green">Yes</button>
            <button class="btn">Not sure</button>
            <button class="btn btn--red">Ask me later</button>
        </div>
      </body>
      </html>
        `}</pre></div>
      </div>    
      <h3 className="module__objectives">
        Demonstration Video
      </h3>
      <div className="module__video">
        <video controls>
          <source 
            type="video/mp4"
          />
          Your browser does not support the video tag. 
        </video>
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

export default BemAssignment
