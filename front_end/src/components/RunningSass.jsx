import React from 'react'

const RunningSass = (props) => {
  return (
    <div className="module">
      <div className="module__container">
        <h2 className="module__title">Running Sass</h2> 
        <h3 className="module__objectives">
          Project:
        </h3>
        <ul className="module__list">
          <li className="module__list--item">
            Create the following folder structure:
          </li> 
        </ul>
        <div className="u-folders">
          <pre>
            <font color="#839496"><b>.</b></font>
          ├── index.html
          └── <font color="#839496"><b>public</b></font>
            └── <font color="#839496"><b>css</b></font>
                ├── <font color="#839496"><b>scss</b></font>
                │   └── main.scss
                └── styles.css
          </pre>
        </div>
        <ul className="module__list">
          <li className="module__list--item">
            From the top of the project directory, run: 
          </li> 
        </ul>
        <p className="module__text">
            sass public/css/scss/main.scss public/css/styles.css
        </p>
        <p className="module__text">
          This command will tell Sass to watch for any changes in the first
          file location, and then export all changes to the seond file. 
        </p>
        <p className="module__text">
            sass input.scss output.css
        </p>
        <p className="module__text">
          This is the command that you run to compile any scss files; hoever,
          executing this command for every change to our scss would be a real
          drag to say the least.  Fortunately dart-sass has a watcher built
          into it which you can activate by running:
        </p>
        <p className="module__text">
            sass --watch public/css/scss/main.scss public/css/styles.css
        </p>
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
