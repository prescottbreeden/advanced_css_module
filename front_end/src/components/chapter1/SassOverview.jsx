import React from 'react'

const SassOverview = (props) => {
  const page = props.page
  const nextPage = page+1
  const prevPage = page-1

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
          Sass allows the use of a multitude of tools including variables, 
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
          The pros of Sass and Why it is so 'awesome'?
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
        <h3 className="module__objectives">
          Does Sass have any cons?
        </h3>
        <p className="module__text">
          Something that is ubiquitous amongst all frameworks is their ability 
          to create a disconnect between the programmer and the underlying 
          language. The reason for this is that frameworks tend to carry their 
          own behavior that is unique to them, and it is when the 
          idiosyncracies of a framework become more salient than the 
          idiosyncracies of a language that frameworks can sometimes obscure 
          the behavior of the underlying language itself.
        </p>
        <p className="module__text">
          This is less of a warning than it is an important observation about 
          programming in general.  When we talk about "high level" and "low 
          level" languages, we are often describing the level of abstraction 
          that the language has to the inner-workings of the computer itself. 
        </p>
        <p className="module__text">
          For instance, in JavaScript, a programmer doesn't have to concern 
          themselves with memory allocation or data types, and Python doesn't 
          even require any kind of variable declaration.  In contrast, a 
          language such as C forces the programmer to have to deal with 
          fundamentally important issues such as memory allocation and pointers.
          However, high level languages also carry with them an expressiveness 
          that a less abstracted language doesn't.  Python's list comprehension 
          is a terrific example where the "code-per-line" efficiency is hard to 
          match.
        </p>
        <p className="module__text">
          Forunately, Sass still <em>feels</em> and behaves very much like CSS 
          and thus learning Sass will be extremely educational for programmers 
          while also still offering an efficiency that can alleviate some of 
          the difficulty in organizing and structuring a language that cannot 
          be scoped to code blocks to contain the exposure of variables. CSS 
          rules, once imported to HTML, are exposed to every DOM element that 
          matches the correct criteria, which can feel at times a little like 
          the Wild West when you are trying to debug an issue caused by 
          competing specificities.
        </p>
        <h3 className="module__objectives">
          Roadmap 
        </h3>
        <p className="module__text">
          This course will teach two different methods of using Sass with your
          projects. To begin with, we will globally install a version of Sass 
          written in Dart.  While starting out, this will keep our project 
          sizes small and quick to create and edit. During this time we will 
          focus in on the mechanics of Sass and how it works.
        </p>
        <p className="module__text">
          Later in the course, as our projects grow, we will walk through 
          installing Sass locally with a module called 'node-sass' from the 
          Node Package Manager (npm). At this phase we will begin working with 
          npm scripts to automate important development and production 
          essentials, as well as install a script to automate our project 
          initialization, leaving you with more time writing styles and less 
          time making folder directories and boilerplate.
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

export default SassOverview
