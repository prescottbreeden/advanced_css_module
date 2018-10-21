import React from 'react'
import video from './running_sass.mp4'

const RunningSass = (props) => {
  const page = props.page
  const prevPage = page-1
  const nextPage = page+1

  return (
    <div className="module">
      <div className="module__container">
        <h2 className="module__title">Running Sass</h2> 
        <h3 className="module__objectives">
          First Sass Project:
        </h3>
        <p className="module__text">
          There are no hard and fast rules for where we place our Sass files. 
          For now we are going to place our Sass folder adjacent to our public
          folder to help reinforce the independence of your Sass architecture.
        </p>
        <ul className="module__list">
          <li className="module__list--item">
            Create the following folder structure:
          </li> 
        </ul>
        <div className="module__folders">
          <pre>{`
            `}&#128193;{` first_sass_project
            │      
            ├── index.html
            │      
            ├──`}&#128193;{` public
            │   └──`}&#128193;{` css
            │      
            └──`}&#128193;{` sass
                └── main.scss
              `}
          </pre>
        </div>
        <p className="module__text">
          <span className="u-font-small u-font-italic">
            Our css folder is intentionally empty and be sure that you 
            have the correct file suffix for 'main.scss'
          </span>
        </p>
        <ul className="module__list">
          <li className="module__list--item">
            Add the following html to your index.html:
          </li> 
        </ul>
        <div className="module__markup"><pre>{`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Running Sass</title>
        <link rel="stylesheet" href="/public/css/styles.css">
      </head>
      <body>
        <h2>Use the containers to refresh yourself with CSS rules</h2>
        <div class="block">
          <div class="block__element">
            <p class="block__element--modifier">1</p>
          </div>
        </div>
        <div class="block">
          <div class="block__element">
            <p class="block__element--modifier">2</p>
          </div>
        </div>
        <div class="block">
          <div class="block__element">
            <p class="block__element--modifier">3</p>
          </div>
        </div>
      </body>
      </html>
        `}</pre></div>
        <p className="module__text">
          Now that we have our DOM, let's add some styles!
        </p>
        <ul className="module__list">
          <li className="module__list--item">
            In your main.scss file, change the background color of block to
            'steelblue' with:
          </li> 
        </ul>
        <div className="module__markup"><pre>{`
        .block {
          background-color: steelblue;
        }
        `}</pre></div>
        <p className="module__text">
          This code right now will have no impact on our DOM because if you
          notice, the style sheet we are importing doesn't exist yet. To create
          the file, make sure your terminal is at the root level of your
          project directory and execute:
        </p>
        <p className="module__terminal-code">
          $ sass sass/main.scss public/css/styles.css
        </p>
        <p className="module__text">
          This command will tell Sass to take an input file ('main.scss') and
          then gives an export location for the css output ('styles.css').
        </p>
        <p className="module__terminal-code">
          sass <em>{`{{ input-file }} {{ output-file }}`}</em>
        </p>
        <p className="module__text">
          You should now see in your css folder a file named styles.css, so
          if you refresh your index.html, you will notice we now have our
          styles applied to '.block'.
        </p>
        <p className="module__text">
          This is the command that you run to compile any scss files; however,
          executing this command for every change to our scss would be a real
          drag to say the least.  Fortunately Sass has a watcher built
          into it which you can activate by adding the --watch flag:
        </p>
        <p className="module__terminal-code">
          $ sass --watch sass/main.scss public/css/styles.css
        </p>
        <p className="module__text">
          Now each time you save a change to your main.scss file, Sass will
          export a new CSS style sheet to your output location.
        </p>
      </div>    
      <h3 className="module__objectives">
        Demonstration Video
      </h3>
      <div className="module__video">
        <video controls>
          <source 
            type="video/mp4"
            src={video}
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

export default RunningSass
