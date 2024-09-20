# Learning and building applications using React

-   App component
    -   Header
        -   logo
        -   Nav items
    -   Body
        -   Search
        -   Restaurant container
            -   Img
            -   Name of rest, star rating, cuisines,
    -   Footer
        -   copyright
        -   links
        -   address
        -   contact

how to make smaller bundles ? how to make logical separation of code.

-   chunking
-   code splitting
-   dynamic bundling
-   lazy loading
-   on demand loading
-   dynamic import

how ?
just like swiggy, instamart,
its not loaded initially but load it later.

SASS - add super power to CSS.
SCSS
styled compoentns - used wiht React
materail UI
bootstrap
chakra UI  
ant design - 2nd most popular react library

tailwind css- it works wiht any library
Postcss is a tool for transforming css with javascript
tailwind css behind the scenes uses postcss.
npx tailwindcss init - creates tailwind.config.js - atuomatically created.
we have to create .postcssrc file manually. - config file for postcss and paste the code. It tells postcss to read from tailwind.
add content inside tailwind.config.js - tells use tailwind sinside any of these files

//error on npm start. -

-   nvm list
    nvm use v20.10.0
    rm -rf node_modules
    npm install
    npm start

# setup test environment

npm i -D @testing-library/react
npm i -D jest
npm i -save-dev babel-jest @babel/core @babel/preset-env # install babel dependencies

create babel.config.js and add below:

module.exports = {
presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

configure parcel to disable default babel transpilation

jest configuration
npx jest --init

install jsdom library
npm install --save-dev jest-environment-jsdom

install @babel/preset-react
npm i @babel/preset-react // to make jsx work in jest
then add it into babel config js
['@babel/preset-react', { runtime: "automatic" }],

install npm i -D @testing-library/jest-dom
