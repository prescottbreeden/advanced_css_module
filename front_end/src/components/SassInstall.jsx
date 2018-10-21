import React from 'react'

const SassInstall = (props) => {
  const page = props.page
  const nextPage = page+1
  const prevPage = page-1

  return (
    <div className="module">
      <div className="module__container">
        <h2 className="module__title">Sass Install</h2> 
        <h3 className="module__objectives">
          Learning Objectives:
        </h3>
        <ul className="module__list">
          <li className="module__list--item">
            How to install and run Sass
          </li> 
        </ul>
        <h3 className="module__objectives">
          Installing Sass Globally 
        </h3>
        <p className="module__text">
          There are a couple options for installing Sass globally:
        </p>
        <ul className="module__list">
          <li className="module__list--item">
            Install Anywhere (Standalone)
          </li> 
          <li className="module__list--item">
            Install Anywhere (npm) <strong>*</strong>
          </li> 
          <li className="module__list--item">
            Install on Windows (Chocolatey)
          </li> 
          <li className="module__list--item">
            Install on Mac OS X (Homebrew)
          </li> 
        </ul>
        <p className="module__text">
          <strong>*</strong> Please note that the npm version of Sass installs 
          a pure JavaScript implementation which runs somewhat slower than the 
          other options listed. However this isn't a real concern and Sass 
          versions will largely fall on a team decision regarding preferences 
          as opposed to necessities.
        </p>
        <h3 className="module__objectives">
          Linux Install
        </h3>
        <ul className="module__list">
          <li className="module__list--item">
            Download the appropriate version of Sass from 
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
        <h3 className="module__objectives">
          Sass syntax:
        </h3>
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

export default SassInstall
