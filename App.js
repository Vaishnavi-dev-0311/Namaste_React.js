// const heading = React.createElement(
//   "h1",
//   { id: "heading" }, //attribute
//   "Hello World By React..." //children OR props
// );

// console.log(heading); //object OR React element

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
//----------------------------------------------------------------

/**
 *
 * <div id ="parent">
 *     <div id="child 1">
 *         <h1>I am h1 tag</h1>
 *         <h2>I am h2 tag</h2>
 *      </div>
 *
 *      <div id="child 2">
 *         <h1>I am h1 tag</h1>
 *         <h2>I am h2 tag</h2>
 *      </div>
 * </div>
 *
 * ReactElement(Object) => HTML (Browaer Understands)
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child_1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),

  React.createElement("div", { id: "child_2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //replaces the tag which is already present in root which is h1 tag
