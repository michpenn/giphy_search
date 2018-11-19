import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class SearchGifs extends Component {
  state = {
    category: "",
    errors: {}
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { category } = this.state;

    //Check for Errors
    if (category === "") {
      this.setState({ errors: { category: "A category is required" } });
      return;
    }

    const newGifSearch = {
      api_key: "GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw",
      q: category
    };

    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${newGifSearch.api_key}&q=${
        newGifSearch.q
      }`
    );

    dispatch({ type: "GIF_SEARCH", payload: res.data });

    this.setState({
      category: "",
      errors: {}
    });
  };

  render() {
    const { category, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Find Gifs</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Category"
                    name="category"
                    placeholder="Enter Category"
                    value={category}
                    onChange={this.onChange}
                    error={errors.category}
                  />
                  <input
                    type="submit"
                    value="Search Giphy"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default SearchGifs;
