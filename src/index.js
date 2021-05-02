import React from "react";
import { render } from "react-dom";

import App from "./App";
// import config from "config";
const config = require("config");

render(<App />, document.getElementById("root"));
