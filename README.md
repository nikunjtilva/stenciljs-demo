How to run
---
###### Install dependencies
run `npm install` command in project directory

###### Running Solution
run `npm start` command

Above command should launch browser with some random port number

###### Running tests
run `npm test` command

Tests are written in jest. Above command should run all test without any browser.

###### Building components for distribution
run `npm run build` command

Above command should build all webcomponents in *dist* folder

###Architectural Overview
---
This solution majorly focus on architecture and less focused on user experience

This solution is build with purely web components which are first class citizens in modern browsers. At time of running these webcomponents are running without any framework. Multiple webcomponents are used together to generate this solution. 

This is a single page application with routing enabled so user can easily navigate through browser back and forward button while searching for results and moving to previous search. 

Below image shows architectural overview of this solution.



![alt text](https://image.ibb.co/fAZr3n/Webcomponent_Arch.png "Get User Guide search page architecture")

* `<app-root></app-root>` is the main container of all web components. It contains router which holds links for / or /search or /search/query
* */* or */search* will render `<landing-page></landing-page>` component
    * `<landing-page></landing-page>` component renders only `<search-bar></search-bar>` component
* When users search on search bar and hit enter or click on search button it will redirect user to */search/query* route
* */search/query* route will render `<search-results-page></search-results-page`> which is a combination of search-bar and search-results component as shown in above image.

#### Technology stack used

1. stenciljs as web components compiler
2. Typescript + JSX
3. SCSS
4. Jest 







