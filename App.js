import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child"},
        React.createElement("h1", {}, "Nested div Heading")
    )
);

const heading = React.createElement("h1", {}, "Hello world from react CDN Harish");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);