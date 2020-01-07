import React from 'react';
import { connect } from 'react-redux';

// Imports CSS Document
import './counter.css';

function mapStateToProps( state ) {
  return { count: state.count };
}
class Counter extends React.Component {

  sendToStore (count) {
    this.props.dispatch({ type: "UPDATE_COUNT", newCount: count })
  }
  // The dispatch says create an action object and I will then send it to the reducer on index.js.
  // The type allows us to link the the types to the reducer
  increment = () => {
    this.sendToStore( this.props.count + 1 ); 
  };

  // This takes 1 away 
  decrement = () => {
    this.sendToStore( this.props.count - 1 ); 
  };

  // This re renders thr app as well as adds the buttons etc... in 
  render(){
    return (
      <div className="counter">
        <h2> Counter </h2>
        <div>
          {/* Because we have the dispatch above we only need to call 'this.functionName' */}
          <button onClick={this.decrement}> - </button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}> + </button>
        </div>
      </div>
    )
  }
}

export default connect( mapStateToProps )( Counter );