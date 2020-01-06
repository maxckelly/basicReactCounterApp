import React from "react";
import { render } from "react-dom";
import Counter from './counter.js';


// Import CSS
import "./index.css";
import SomeContainer from "./someContainer.js";

class App extends React.Component {

  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 10000 })
  }

  // This takes 1 away 
  decrement = () => {
    this.setState({ count: this.state.count - 10000 })
  }

  render () {
    return (
      <div>
        <div className="arbitrary-block">
          {/* The below renders the counter file */}
          < Counter 
            count={this.state.count}
            increment={this.increment}
            decrement={this.decrement}
          />
        </div>
        <div className="another-arbitrary-block">
          < SomeContainer 
            count={this.state.count}
            increment={this.increment}
            decrement={this.decrement}
          />
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById("root"));
