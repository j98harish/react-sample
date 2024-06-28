const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child"},
        React.createElement("h1", {}, "Nested div Heading")
    )
);

const heading = React.createElement("h1", { heading: "Hello world from react CDN Harish" }, "Hello world from react CDN Harish");
const root = ReactDOM.createRoot(document.getElementById("root"));
setTimeout(() => {
    root.render(parent);
}, 2000);