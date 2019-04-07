import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Article from "./Article";
import List from "./List";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={List} />
        <Route path="/article" component={Article} />
      </BrowserRouter>
    );
  }
}

export default App;
