import React from 'react'

const UsefulTools = (props) => {
  return (
    <div className="module">
      <div className="module__container">
        <h2 className="module__title">Useful Tools</h2> 
        <h3 className="module__objectives">
          "We become what we behold. We shape our tools, and thereafter our 
          tools shape us." - Marshall McLuhan
        </h3>
        <p className="module__description">
          Before we get going, take the time to bookmark some of these handy 
          development tools for designing style sheets.  While all the concepts
          in this course are going to enhance the ease of writing and the 
          degree of organization to your website styling; clean, maintainable 
          and reusable code can only take us part of the way towards developing
          beautiful websites. Never undervalue the necessity of great tools!
        </p>
        <h4 class="module__sub-title">Color Tools</h4>
        <ul className="module__list">
          <li className="module__list--item">
            <a 
              rel="noopener noreferrer"
              target="_blank"
              className="module__list--item u-external-link"
              href="https://htmlcolorcodes.com">
                HTML Color Codes
            </a>
          </li> 
          <li className="module__list--item">
            <a 
              rel="noopener noreferrer"
              target="_blank"
              className="module__list--item u-external-link"
              href="http://www.0to255.com">
                0 to 255
            </a>
          </li> 
          <li className="module__list--item">
            <a 
              rel="noopener noreferrer"
              target="_blank"
              className="module__list--item u-external-link"
              href="https://mycolor.space">
                ColorSpace
            </a>
          </li> 
          <li className="module__list--item">
            <a 
              rel="noopener noreferrer"
              target="_blank"
              className="module__list--item u-external-link"
              href="https://flatuicolors.com">
                Flat UI Colors
            </a>
          </li> 
          <li className="module__list--item">
            <a 
              target="_blank"
              rel="noopener noreferrer"
              className="module__list--item u-external-link"
              href="https://color.adobe.com/explore/?filter=most-popular&time=month">
                Adobe Color CC
            </a>
          </li> 
        </ul>

        <h4 class="module__sub-title">Font Tools</h4>
        <ul className="module__list">
          <li className="module__list--item">
            <a 
              target="_blank"
              rel="noopener noreferrer"
              className="module__list--item u-external-link"
              href="https://fonts.google.com">
                Google Fonts
            </a>
          </li> 
          <li className="module__list--item">
            <a 
              target="_blank"
              rel="noopener noreferrer"
              className="module__list--item u-external-link"
              href="https://fontsquirrel.com">
                Font Squirrel
            </a>
          </li> 
          <li className="module__list--item">
            <a 
              target="_blank"
              rel="noopener noreferrer"
              className="module__list--item u-external-link"
              href="https://fontpair.co">
                Font Pair
            </a>
          </li> 
        </ul>

        <h4 class="module__sub-title">Learn More About...</h4>
        <ul className="module__list">
          <li className="module__list--item">
            <a 
              target="_blank"
              rel="noopener noreferrer"
              className="module__list--item u-external-link"
              href="https://webdesign.tutsplus.com/articles/an-introduction-to-color-theory-for-web-designers--webdesign-1437">
                An Introduction to Color Theory for Web Designers
            </a>
          </li> 
          <li className="module__list--item">
            <a 
              target="_blank"
              rel="noopener noreferrer"
              className="module__list--item u-external-link"
              href="https://uxplanet.org/the-secret-of-great-gradient-2f2c49ef3968">
                Creating Great Gradients
            </a>
          </li> 
          <li className="module__list--item">
            <a 
              target="_blank"
              rel="noopener noreferrer"
              className="module__list--item u-external-link"
              href="http://www.typogui.de/">
                A Pocket Guide to Master Every Day's Typographic Adventures
            </a>
          </li> 
        </ul>
      </div>    
      <div className="module__buttons">
        <a 
          href="/1"
          className="module__buttons btn">
          Prev
        </a>
        <a 
          href="/3"
          className="module__buttons btn">
          Next
        </a>
      </div>
    </div>
  )
}

export default UsefulTools
