import React from 'react';
// This allows us to connect to react-redux
import { connect } from 'react-redux';

// Other files
import ResetButton from './resetButton';

// Imports CSS Document
import './counter.css';

function mapStateToProps( store ) {
  return { count: store.count, label: store.label };
}
class Counter extends React.Component {

  sendToStore (count) {
    this.props.dispatch({ type: "UPDATE_COUNT", newCount: count })
  };
  // The dispatch says create an action object and I will then send it to the reducer on index.js.
  // The type allows us to link the the types to the reducer
  increment = () => {
    this.sendToStore( this.props.count + 1 ); 
  };

  // This takes 1 away 
  decrement = () => {
    this.sendToStore( this.props.count - 1 ); 
  };

  plusTen = () => {
    this.sendToStore( this.props.count + 10);
  };

  minusTen = () => {
    this.sendToStore(this.props.count - 10);
  };

  // This re renders thr app as well as adds the buttons etc... in 
  render(){
    return (
      <div className="counter">
        <h2> Counter </h2>
        <p>{this.props.label}</p>
        <div>
          {/* Because we have the dispatch above we only need to call 'this.functionName' */}
          <div>
            <button className="button" onClick={this.decrement}> -1 </button>
            <button className="button" onClick={this.minusTen}> -10 </button>
          </div>
          <span className="count">{this.props.count}</span>
          <div>
            <button className="button" onClick={this.increment}> +1 </button>
            <button className="button" onClick={this.plusTen}> +10 </button>
          </div>
        </div>
        <div>
          <ResetButton />
        </div>
      </div>
    )
  };
}

export default connect( mapStateToProps )( Counter );