import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import OtherPlatform from "./components/othersPlatform";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            {/* <Navbar /> */}
            <Route exact path="/" component={OtherPlatform} />
          </div>
        </Router>
    );
  }
}
export default App;