import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

class Gif extends Component {
  state = {
    isFavorite: false
  };

  onFavoriteClick = async (id, dispatch) => {
    if (this.state.isFavorite) {
      dispatch({ type: "DELETE_FROM_FAVORITES", payload: id });
    } else {
      dispatch({ type: "ADD_TO_FAVORITES", payload: this.props.gif });
    }
    this.setState({ isFavorite: !this.state.isFavorite });
  };

  render() {
    const { id, title, url, images } = this.props.gif;
    const imageUrl = images ? images.fixed_height.url : url;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3 col-sm-6 col-md-4">
              <img className="card-img-top" src={imageUrl} alt={title} />
              <div className="card-body">
                <h4>
                  {title}{" "}
                  <i
                    className={classnames("fa-heart", {
                      far: !this.state.isFavorite,
                      fas: this.state.isFavorite
                    })}
                    style={{ cursor: "pointer", float: "right", color: "red" }}
                    onClick={this.onFavoriteClick.bind(this, id, dispatch)}
                  />
                </h4>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Gif.propTypes = {
  gif: PropTypes.object.isRequired
};

export default Gif;
