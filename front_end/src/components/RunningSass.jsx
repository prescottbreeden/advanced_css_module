import React from 'react'

const RunningSass = (props) => {
  return (
    <div className="module">
      <div className="module__container">
        <h2 className="module__title">Running Sass</h2> 
        <h3 className="module__objectives">
          First Sass Project:
        </h3>
        <ul className="module__list">
          <li className="module__list--item">
            Create the following folder structure:
          </li> 
        </ul>
        <div className="u-folders">
          <pre>{`
          `}<font color="#839496"><b>{`.`}</b></font>{`
          ├── index.html
          └── `}<font color="#839496"><b>public</b></font>{`
            └──`}<font color="#839496"><b>css</b></font>{`
                └──`}<font color="#839496"><b>scss</b></font>{`
                    └── main.scss
         `}</pre>
        </div>
        <p className="module__text">
            <b>Important:</b> note the file suffix for main.scss is '.scss' 
        </p>
        <p className="module__text">
          There are no hard and fast rules for where we place our Sass files,
          however, since SCSS files are also completely valid CSS files, and
          their purpose is the same, it makes logical sense to place them as
          a subdirectory within our css directory.
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
        </div
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
        <ul className="module__list">
          <li className="module__list--item">
            sass public/css/scss/main.scss public/css/styles.css
          </li> 
        </ul>
        <p className="module__text">
          This command will tell Sass to take an input file ('main.scss') and
          then gives an export location for the css output ('styles.css').
        </p>
        <ul className="module__list">
          <li className="module__list--item">
            sass {`
              {{ input-file }} {{ output-file }}
           `}
          </li> 
        </ul>
        <p className="module__text">
          You should now see in your css folder a file named styles.css, so
          if you refresh your index.html, you will notice we now have our
          styles applied to '.block'.
        </p>
        <p className="module__text">
          This is the command that you run to compile any scss files; however,
          executing this command for every change to our scss would be a real
          drag to say the least.  Fortunately dart-sass has a watcher built
          into it which you can activate by adding the --watch flag:
        </p>
        <ul className="module__list">
          <li className="module__list--item">
            sass --watch public/css/scss/main.scss public/css/styles.css
          </li> 
        </ul>
        <p className="module__text">
          Now each time you save a change to your main.scss file, Sass will
          export a new CSS style sheet to your output location.
        </p>
      </div>    
      
      <div className="module__buttons">
        <a 
          href="/3"
          className="module__buttons btn">
          Prev
        </a>
        <a 
          href="/5"
          className="module__buttons btn">
          Next
        </a>
      </div>
    </div>
  )
}

export default RunningSass
