import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";

function App() {
  return (
    <Router>
      {Object.keys(routes).map((route) => {
        return (
          <Route path={route} exact key={route}>
            {routes[route]}
          </Route>
        );
      })}
    </Router>
  );
}

export default App;
