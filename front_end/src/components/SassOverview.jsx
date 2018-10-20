import React from 'react'

const SassOverview = (props) => {
  return (
    <div className="module">
      <div className="module__container">
        <h2 className="module__title">Sass Overview</h2> 
        <h3 className="module__objectives">
          Learning Objectives:
        </h3>
        <ul className="module__list">
          <li className="module__list--item">
            What is Sass?
          </li> 
          <li className="module__list--item">
            What is the difference between '.scss' vs '.sass' Files?
          </li> 
          <li className="module__list--item">
            How to install and run Sass
          </li> 
        </ul>
        <h3 className="module__objectives">
          What is Sass?
        </h3>
        <p className="module__text">
          Sass stands for "Syntactically Awesome Style Sheets" and is an 
          extension of CSS that adds power and elegance to the basic language.
          SASS allows the use of a multitude of tools including variables, 
          nesting, mixins, imports, and more--all with a fully CSS-compatable 
          SCSS syntax. This means that any valid CSS is also valid SCSS,
          making both getting started with Sass as well as implementing 
          existing codebases with Sass a snap. When you add the power of Sass
          with the ease of learning and implenting it, it is no wonder that Sass
          is able to claim without much of a sweat that it is "the most mature, 
          stable, and powerful professional grade CSS extension language used
          in the world"
        </p>
        <p className="module__text">
          <em>Importantly, Sass should not be confused with SAAS (software as a 
            service)</em>
        </p>
        <h3 className="module__objectives">
          Why is Sass so 'awesome'?
        </h3>
        <ul className="module__list">
          <li className="module__list--item">
            Lowest barrier to entry (indeed some of the most powerful features 
            to Sass can be harnassed by learning a couple new symbols).
          </li> 
          <li className="module__list--item">
            New collaborators can have no trouble picking it up if they have a
            basic understanding of how CSS works.
          </li> 
          <li className="module__list--item">
            By far the most engaged community with extensive support and 
            available resources
          </li> 
          <li className="module__list--item">
            Used much more widely than any of its competitors such as Less,
            Stylus, and PostCSS
          </li> 
        </ul>
        <p className="module__text">
          There are two syntaxes available for Sass:
        </p>
        <ul className="module__list">
          <li className="module__list--item">
            <strong>.scss</strong> : (aka 'Sassy CSS') is written with 
            brackets and nearly identical to regular CSS. SCSS files understand 
            most CSS hacks and vendor-specific syntaxes (e.g. IE's old 'filter' 
            syntax). SCSS files are saved with the file extension '.scss'.
          </li> 
          <li className="module__list--item">
            <strong>.sass</strong> : a bracket-free, semi-colon-free, concise 
            way of writing CSS which utilizes indentation rather than brackets 
            to indicate nesting. Sass files are saved with the file extension 
            '.sass'.
          </li> 
        </ul>
        <p className="module__text">
          In this course you will see example code written primarily in SCSS 
          due to its popularity in codebases.
        </p>
        <h3 className="module__objectives">
          Roadmap 
        </h3>
        <p className="module__text">
          This course will teach two different methods of using Sass with your
          projects. To begin with, we will globally install a version of Sass 
          called 'Dart-Sass' to our computer.  for simplicity to help you gain familiarity with how Sass 
          works. Later in the course, we will walk through installing Sass 
          locally with a module called 'node-sass' from the Node Package 
          Manager (npm). At this phase we will begin working with npm scripts 
          to automate important development and production functionalities, as 
          well as install a script to automate our project initialization, 
          leaving you with more time writing styles and less time making folder
          directories and boilerplate.
        </p>
        <h3 className="module__objectives">
          Installing Dart-Sass Globally 
        </h3>
        <p className="module__text">
          There are a couple options for installing Sass globally:
        </p>
        <ul className="module__list">
          <li className="module__list--item">
            Install Anywhere (Standalone)
          </li> 
          <li className="module__list--item">
            Install Anywhere (npm) **
          </li> 
          <li className="module__list--item">
            Install on Windows (Chocolatey)
          </li> 
          <li className="module__list--item">
            Install on Mac OS X (Homebrew)
          </li> 
        </ul>
        <p className="module__text">
          ** It is important to note that the npm version of Sass installs a 
          pure JavaScript implementation which runs somewhat slower than the 
          other options listed. While this might be a consideration in 
          extremely large codebases, for most applications it will be 
          impossible to notice the difference.
        </p>
        <h3 className="module__objectives">
          Linux Install
        </h3>
        <ul className="module__list">
          <li className="module__list--item">
            Download the appropriate version of Dart-sass from 
            <a href="https://github.com/sass/dart-sass/releases/tag/1.14.2">
              GitHub
            </a>
          </li> 
          <li className="module__list--item">
            Save the file to your home directory and rename it ".dart-sass".
            The dot infront of the folder is simply to make it hidden. It is
            not essential to hide the folder, but if you like organization to
            your files and folers you can thank me later.
          </li> 
          <li className="module__list--item">
            Add sass to your path by executing <strong>export 
            PATH=$PATH:~/.dart-sass</strong>
          </li> 
          <li className="module__list--item">
            Type 'sass' into your terminal. You should see a help menu appear
            confirming the install.
          </li> 
        </ul>
        <h3 className="module__objectives">
          Mac OS X Install (Brew)
        </h3>
        <ul className="module__list">
          <li className="module__list--item">
            Run <strong>$ brew install sass/sass/sass</strong>
          </li> 
          <span>(It's a very sassy install for Mac users)</span>
          <li className="module__list--item">
            Type 'sass' into your terminal. You should see a help menu appear
            confirming the install.
          </li> 
        </ul>
        <h3 className="module__objectives">
          Windwos Install (Chocolatey)
        </h3>
        <ul className="module__list">
          <li className="module__list--item">
            Run <strong>choco install sass -prerelease</strong>
          </li> 
          <li className="module__list--item">
            Type 'sass' into your terminal. You should see a help menu appear
            confirming the install.
          </li> 
        </ul>
        <h3 className="module__objectives">
          For the GUI of heart
        </h3>
        <p className="module__text">
          This course will provide all examples and instructions directly from 
          the command line; however, for those who either are uncomfortable 
          using their terminal or simply prefer interacting with a graphical 
          interface, there are two free open source applications available on 
          all systems for download however this course will not cover them.
        </p>
        <ul className="module__list">
          <li className="module__list--item">
            Scout-App 
          </li> 
          <li className="module__list--item">
            Koala
          </li> 
        </ul>
      </div>    

      <div className="module__buttons">
        <a 
          href="/2"
          className="module__buttons btn">
          Prev
        </a>
        <a 
          href="/4"
          className="module__buttons btn">
          Next
        </a>
      </div>
    </div>
  )
}

export default SassOverview
