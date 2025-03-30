import React from "react";
import ReactDOM from "react-dom/client";

//React Element

const heading = React.createElement("h1",{id: "heading"},"Namaste React 🤓");

console.log(heading);

// JSX (transpiled before it reaches the JS) - Parcel - Babel

//JSX => babel transpiles it to React.createElement => reactElement object => render does HTMLElement

//React element
const jsxheading = (<h1 className="head">
    Namaste React using JSX by priyansh
    </h1>);

//React componenets
//clss based components OLD
//functional components NEW

//react functional component function that returns jsx code
const HeadingComponent=()=>{
    return <h1>Namaste React functional components</h1>
}

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);