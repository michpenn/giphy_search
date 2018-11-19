import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GIF_SEARCH":
      return {
        ...state,
        gifs: [...action.payload.data]
      };
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case "DELETE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter(
          favorite => favorite.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    favorites: [],
    gifs: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
