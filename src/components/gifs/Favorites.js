import React, { Component } from "react";
import Favorite from "./Favorite";
import { Consumer } from "../../context";

class Favorites extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { favorites } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Favorites</span> List
              </h1>
              <div className="row">
                {favorites.map(favorite => (
                  <Favorite key={favorite.id} gif={favorite} />
                ))}
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Favorites;
