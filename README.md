## Front-End Developer Challenge and Questions

We realize there are often multiple solutions or answers to the same questions and to the challenge in particular. We do not necessarily have “right or wrong” in mind, we are simply looking to learn a bit about you, and your approach to development. 


Questions:

#### What front-end component libraries or frameworks have you used besides bootstrap?

`Material-Ui, UiKit, and Angular Material`

#### What tools would you implement to enforce code quality rules and standards? 

`ESLint with either the AirBnB, Babel, or Create-React-App standard along with a set of custom rules to start off - and eventually go all custom.`

#### What HTML templating languages or engines have you used?

`I've used Handlebars and EJS with Ruby on Rails`

#### Which code related blogs or sites do you read regularly?

`Some developer friends and I share a slack channel specifically for coding`
`Also, a lot of Reddit - i particularly enjoy this programming multi-reddit:` <https://www.reddit.com/user/krispykrackers/m/programming/>
`I find that most coding articles i read come from Medium, however.`

#### In Sass, what is the significance of using an underscore at the beginning of a sass file name?

`It's for Partials so you can import CSS into other sass files`

#### Name a few (npm) node modules that you think are most useful?

`ESLint, Babel, create-react-app, Moment for dates, Lodash (comes in handy, but i try to aviod it cause the bloat - i perfer to not import a library unless i absolutely MUST)`

#### Given the option to choose Angular, React or Vue.js for a new project which would you choose and why? What type of requirements might affect your decision to use one over the other?

`React for anything that is going to start from the ground level - mostly because it's the easiest to setup and start coding with and you can eventually add in a Redux or GraphQL or whatever down the road if/when you need it.  React also uses much more vanilla JavaScript than Angular, so the learning curve is much, much better`

`If however, you plan on starting something that will definitely become enterprise level off the get go - Angular 2+ might be a better solution - it's more opinionated, which will make it scale better (less things will come back and bite you in the long run)`

`As for Vue (in my opinion) while it could be the better solution for whatever you need - since it isn't backed and promoted by multi-national corporations who put on conferences and hire "develper advocates" to spread the word of their framework, odds are that it will never become as big or as widely supported.  It would be beneficial to learn/use though, for personal understanding and knowledge`

`Also worth noting - Angular 1.x is a terrible framework.  The people who wrote it openly admit to not knowing what they were doing (or what the ecosystem needed) when they built it, they saw React and how it worked, and then came to Angular 2+ and a more component based approach vs the MVC style of Angular 1`

#### If you were referred to an unfamiliar node project repo, what file or files would you first look to, to determine the commands to run, build and test the project?

`Package.json`

#### What is the benefit of using the HTML ‘nav’ element vs. a div with the class of .nav?

`Using 'nav' is more semantic - one of the benefits of which are accessibility through screen readers and 508 compliance`

#### What code related framework, library or language do you want to learn next?

`GraphQL because it can make interactions with the backend a cake walk`

`React Hooks (this is currently in progress) becuase you can use them to replace Redux (which i am actually a big fan of and understand quite well - i think the React community doesn't though)`



## `Challenge:`

Utilizing React and Bootstrap, create a single, web page that collapses responsively from desktop to mobile, where the desktop and mobile breakpoints match the wireframe images provided.
	
The carousel at the top of the page should contain three slides  – which can all display the same content, but the carousel itself should be functional in that clicking left or right will animate to the previous or next slide.

Additionally, in the mobile view, the “hamburger” (three lines icon) menu button should collapse and expand the navigation.

All other components are only present for layout purposes and do not need to function ie. navigation links do not need to lead anywhere, search does not need to function.

Utilize React for all functionality - do not include jQuery.

Bootstrap must be imported via Sass and compiled to CSS (Do not use CDN links for styles). Take care to demonstrate the use of modern, semantic HTML elements and CSS classes, and Sass style nesting in any custom CSS.

## `Challenge Setup:`

Use Create React App to create your project and generate the output to a /dist folder using the build script.

Combine all of your challenge directory/files as well as this document with completed answers in a single .zip file and deliver back to us as soon as you have completed them.

Please provide your entire directory structure (with the exception of node_modules) to keep total delivery size small.

Feel free to contact us with any questions and thank you for taking the time to complete these items!

