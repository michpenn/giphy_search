import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import GifsContainer from "./components/gifs/GifsContainer";
import Favorites from "./components/gifs/Favorites";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Giphy Search" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={GifsContainer} />
                <Route exact path="/about" component={About} />
                <Route exact path="/favorites" component={Favorites} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
