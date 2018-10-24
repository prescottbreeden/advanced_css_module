import React from 'react'

const BemIntro = (props) => {
  const page = props.page
  const nextPage = page+1
  const prevPage = page-1

  return (
    <div className="module">
      <div className="module__container">
        <h2 className="module__title">BEM Overview</h2> 
        <h3 className="module__objectives">
          "There are only two hard problems in Computer Science: cache 
          invalidation and naming things." - Phil Karlton
        </h3>
        <h3 className="module__objectives">
          Learning Objectives:
        </h3>
        <ul className="module__list">
          <li className="module__list--item">
            What is BEM.
          </li> 
          <li className="module__list--item">
            Learn the difference between a block, an element, and a 
            modifier.
          </li> 
          <li className="module__list--item">
            Learn how BEM helps us write clean code.
          </li> 
          <li className="module__list--item">
            How to use BEM in your own code.
          </li> 
        </ul>
        <h3 className="module__objectives">
          What is Block Element Modifier?
        </h3>
        <p className="module__text">
          Block Element Modifier (BEM) is a methodology that helps programmers 
          create reusable components and code sharing in front-end development. 
          Think even to your own code and the naming conventions you have used 
          with your DOM. Are you consistent with the use of classes versus ids? 
          Do you write reusable components with your CSS or are you just adding 
          more rules until it looks right and then moving onto the next element? 
        </p>
        <p className="module__text">
          If you find these are questions you have not spent much time thinking 
          about, you are in good company. CSS is quite forgiving compared to 
          much of the code we write in web development, however, once we adopt 
          some consistent principles, writing reusable, component-based CSS 
          not only makes it easier to style our websites, but also speeds up 
          the development process and makes our DOM and styles much easier to 
          scale.
        </p>
        <h3 className="module__objectives">
          Block
        </h3>
        <div className="u-border-solid">
          <p className="module__text">
            Blocks Encapsulate a standalone entity that is meaningful on its own. 
            While block can be nested and interact with each other, semantically 
            they remain equal; there is no precedence or hierarchy. Holistic 
            entities without DOM representation (such as controllers or models) 
            can be blocks as well.
          </p>
          <ul className="module__list">
            <p className="module__text">
              <strong>Naming</strong>
            </p>
            <ul className="module__list">
              <li className="module__list--item u-list-circle">
                Block names may consist of Latin letters, digits, and dashes. To 
                form a CSS class, add a short prefix for the namespacing:  <span className="module__terminal-code">
                  .block</span>
              </li>
            </ul>
            <p className="module__text">
              <strong>HTML</strong>
            </p>
            <ul className="module__list">
              <li className="module__list--item u-list-circle">
                Any DOM node can be a block if it accepts a class name.
              </li>
              <li className="module__list--item u-list-circle">
                Example: <span className="module__css-code">
                  <pre>{'<div class="block">...</div>'}</pre>
                </span>
              </li>
            </ul>
            <p className="module__text">
              <strong>CSS</strong>
            </p>
            <ul className="module__list">
              <li className="module__list--item u-list-circle">
                Use class name selector only
              </li>
              <li className="module__list--item u-list-circle">
                No tage name or ids
              </li>
              <li className="module__list--item u-list-circle">
                No dependency on other blocks/elements on a page
              </li>
              <li className="module__list--item u-list-circle">
                Example: <span className="module__css-code">
                  <pre>{'.block { color: #042; }'}</pre>
                </span>
              </li>
            </ul>
          </ul>
        </div>
        <h3 className="module__objectives">
          Element
        </h3>
        <div className="u-border-solid">
          <p className="module__text">
            Blocks Encapsulate a standalone entity that is meaningful on its own. 
            While block can be nested and interact with each other, semantically 
            they remain equal; there is no precedence or hierarchy. Holistic 
            entities without DOM representation (such as controllers or models) 
            can be blocks as well.
          </p>
          <ul className="module__list">
            <p className="module__text">
              <strong>Naming</strong>
            </p>
            <ul className="module__list">
              <li className="module__list--item u-list-circle">
                Block names may consist of Latin letters, digits, and dashes. To 
                form a CSS class, add a short prefix for the namespacing:  <span className="module__terminal-code">
                  .block</span>
              </li>
            </ul>
            <p className="module__text">
              <strong>HTML</strong>
            </p>
            <ul className="module__list">
              <li className="module__list--item u-list-circle">
                Any DOM node can be a block if it accepts a class name.
              </li>
              <li className="module__list--item u-list-circle">
                Example: <span className="module__css-code">
                  <pre>{'<div class="block">...</div>'}</pre>
                </span>
              </li>
            </ul>
            <p className="module__text">
              <strong>CSS</strong>
            </p>
            <ul className="module__list">
              <li className="module__list--item u-list-circle">
                Use class name selector only
              </li>
              <li className="module__list--item u-list-circle">
                No tage name or ids
              </li>
              <li className="module__list--item u-list-circle">
                No dependency on other blocks/elements on a page
              </li>
              <li className="module__list--item u-list-circle">
                Example: <span className="module__css-code">
                  <pre>{'.block { color: #042; }'}</pre>
                </span>
              </li>
            </ul>
          </ul>
        </div>
        <h3 className="module__objectives">
          Modifier
        </h3>
        <div className="u-border-solid">
          <p className="module__text">
            Blocks Encapsulate a standalone entity that is meaningful on its own. 
            While block can be nested and interact with each other, semantically 
            they remain equal; there is no precedence or hierarchy. Holistic 
            entities without DOM representation (such as controllers or models) 
            can be blocks as well.
          </p>
          <ul className="module__list">
            <p className="module__text">
              <strong>Naming</strong>
            </p>
            <ul className="module__list">
              <li className="module__list--item u-list-circle">
                Block names may consist of Latin letters, digits, and dashes. To 
                form a CSS class, add a short prefix for the namespacing:  <span className="module__terminal-code">
                  .block</span>
              </li>
            </ul>
            <p className="module__text">
              <strong>HTML</strong>
            </p>
            <ul className="module__list">
              <li className="module__list--item u-list-circle">
                Any DOM node can be a block if it accepts a class name.
              </li>
              <li className="module__list--item u-list-circle">
                Example: <span className="module__css-code">
                  <pre>{'<div class="block">...</div>'}</pre>
                </span>
              </li>
            </ul>
            <p className="module__text">
              <strong>CSS</strong>
            </p>
            <ul className="module__list">
              <li className="module__list--item u-list-circle">
                Use class name selector only
              </li>
              <li className="module__list--item u-list-circle">
                No tage name or ids
              </li>
              <li className="module__list--item u-list-circle">
                No dependency on other blocks/elements on a page
              </li>
              <li className="module__list--item u-list-circle">
                Example: <span className="module__css-code">
                  <pre>{'.block { color: #042; }'}</pre>
                </span>
              </li>
            </ul>
          </ul>
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

export default BemIntro
