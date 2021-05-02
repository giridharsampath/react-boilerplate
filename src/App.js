import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "mobx-react";
import { models } from "#models";
import { observer, inject } from "mobx-react";

const App = () => {
  return (
    <Provider {...models}>
      <Test />
    </Provider>
  );
};

const Test = inject("AppState")(
  observer((props) => {
    console.log(props);

    return <h1>Hello World</h1>;
  })
);

export default App;
