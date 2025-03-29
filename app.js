import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id: "parent"},
    React.createElement(
        "div",
        {id: "child"},[
        React.createElement("h1",{key:1},"Namaste rea"),
        React.createElement("h2",{key:2},"second tag")
    ])
    
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);