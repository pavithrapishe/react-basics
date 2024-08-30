import React from 'react';
import ReactDOM from 'react-dom/client';

// React.createElement => Object => HTMLElement(render)

const heading = React.createElement("div", {

}, "Hello my dear!🚀")

// JSX => babel transpiles it to React.createElement => Object => HTMLElement(render)

// functional component - a JS function that returns JSX/ReactElement. 

const HeadingComponent = () => {return <h1> React from functional component</h1>
}

const jsxHeading = <h1 id = "title"> React using JSX🚀</h1>

console.log(jsxHeading)

const mainRoot = ReactDOM.createRoot(document.getElementById("root"));

mainRoot.render(<HeadingComponent/>);