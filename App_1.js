import React from 'react';
import ReactDOM from 'react-dom/client';
// Using REACT

//There will only be 1 root and 1 render method and React is added only inside the root id.
// {}  is given as <h1 id="title"> Namaste Eeveryone React! </h1> --- attributes to the tag.
// react replaces everything inside the root here "Not Rendered" and puts the below part.

const heading = React.createElement(
  "h1",
  {
    // (elementTag, {}, children(array for siblings))
    id: "title",
  },
  [
    React.createElement("div", {}, "Hello world"),
    React.createElement("div", {}, "Hello world2 again"),
  ]
);

// if i console log "heading" - it gives a React element its not a h1 tag -its a normal JS object.
// It has key, props (attributes)
const root = ReactDOM.createRoot(document.getElementById("root"));

// Remeber you create element using React and root is created using ReactDom.

root.render(heading);
// render methods takes the heading object and and converts itself into html and puts it to root
