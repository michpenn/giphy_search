import React, { Component } from "react";
import Gif from "./Gif";
import SearchGifs from "./SearchGifs";
import { Consumer } from "../../context";

class GifsContainer extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { gifs } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Giphy</span> Search
              </h1>
              <div className="row">
                <div className="col-xs-10 col-md-4">
                  <SearchGifs />
                </div>

                {gifs.map(gif => (
                  <Gif key={gif.id} gif={gif} />
                ))}
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default GifsContainer;
