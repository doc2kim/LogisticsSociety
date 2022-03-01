import React, { Component } from "react";
import Router from "./Router.js";
import GlobalStyles from "./GlobalStyles";
import GlobalFonts from "./fonts";

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
        <GlobalFonts />
      </>
    );
  }
}

export default App;
