import React from 'react';

// Imports CSS Document
import './counter.css';

class Counter extends React.Component {

  // This re renders thr app as well as adds the buttons etc... in 
  render(){
    return(
      <div className="counter">
        <h2> Counter </h2>
        <div>
          <button onClick={this.props.decrement}> - </button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.props.increment}> + </button>
        </div>
      </div>
    )
  }
}

export default Counter