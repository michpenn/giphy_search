import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

class Favorite extends Component {
  onFavoriteClick = async (id, dispatch) => {
    dispatch({ type: "DELETE_FROM_FAVORITES", payload: id });
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
                    className="fas fa-heart"
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

Favorite.propTypes = {
  gif: PropTypes.object.isRequired
};

export default Favorite;
