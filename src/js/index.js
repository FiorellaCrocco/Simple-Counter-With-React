//import react into the bundle
import React, { Component } from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";

import Counter from "./component/counter";

//render your react application
ReactDOM.render(<Counter />, document.querySelector("#app"));
