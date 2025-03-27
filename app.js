const parent = React.createElement("div",{id: "parent"},
    React.createElement(
        "div",
        {id: "child"},[
        React.createElement("h1",{},"first tag"),
        React.createElement("h2",{},"second tag")
    ])
    
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);