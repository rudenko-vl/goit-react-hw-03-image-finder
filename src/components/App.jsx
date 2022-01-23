import React, { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import Searchbar from "./Searchbar/Searchbar";

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Searchbar />
      </div>
    );
  }
}

export default App;
