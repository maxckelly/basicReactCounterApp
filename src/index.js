import React from "react";
import { render } from "react-dom";
// This creates a redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Other files 
import Counter from './counter.js';

// Import CSS
import "./index.css";
import SomeContainer from "./someContainer.js";

// This defines an initial state incase redux is undefined
const initialState = { count: 0 };

class App extends React.Component {

  // The state = initialState basically defines it as 0 instead of undefined 
  reducer( state = initialState, action ) {

    // The newState should never be modified within the reducer 
    let newState = {};

    // Switch is just like case in Ruby.
    switch( action.type ) {
      case "UPDATE_COUNT":
        newState = { count: action.newCount };
        break;

      default:
        newState = { ...state };
    }
    
    return newState
  };

  // Store is where we hold the data and actions redux 
  store = createStore( this.reducer );

  render () {
    return (
      <Provider store={this.store}>
        <div>
          <div className="arbitrary-block">
            {/* The below renders the counter file */}
            < Counter />
          </div>
          <div className="another-arbitrary-block">
            < SomeContainer />
          </div>
        </div>
      </Provider>
    )
  }
}

render(<App />, document.getElementById("root"));
