import React from "react";
import { createRoot } from "react-dom/client";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h3", {}, props.name),
    React.createElement("h5", {}, props.animal),
    React.createElement("h5", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, [
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Bhote",
      }),
      React.createElement(Pet, {
        name: "Muna",
        animal: "Cat",
        breed: "Chor",
      }),
      React.createElement(Pet, {
        name: "Kuna",
        animal: "Horse",
        breed: "Tagat",
      }),
    ]),
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
